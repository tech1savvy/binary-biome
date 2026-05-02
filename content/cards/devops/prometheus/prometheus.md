---
id: prometheus
aliases: []
tags: []
source:
  - https://youtu.be/h4Sl21AKiDg
noteId: 1777728483001
---

## Overview

###### What is Prometheus?

---

- **Prometheus** is an open-source monitoring and alerting toolkit used to collect, store, query, and monitor metrics from servers, applications, databases, and other services.

## Benifits

### What problems Prometheus solves

- **Manual Debugging of Complex Systems**: In microservice architectures with hundreds of interconnected processes, it is difficult to quickly identify the root cause of failures. Prometheus automates monitoring to pinpoint exactly what went wrong.

- **Chain Reaction Failures**: It helps identify the root cause of cascading failures, such as when a server running out of memory causes database pods to fail, which in turn breaks authentication services and the user interface.

- **Lack of Proactive Alerting**: Prometheus monitors system resources (like memory usage or disk space) and alerts administrators when thresholds are breached, helping prevent issues before they impact users.

- **Bottlenecks and High Traffic**: The pull mechanism avoids the bottleneck problem found in push-based systems by preventing constant network traffic from every service.

---

### How it solves them

- **Automated Data Retrieval**: The Prometheus Server uses a data retrieval worker to automatically scrape metrics from targets via HTTP endpoints (`/metrics`). This enables continuous monitoring without manual intervention.

- **Proactive Alerting**: Prometheus evaluates metrics against defined rules. When conditions are met (e.g., memory usage > 80%), alerts are sent to Alertmanager, which then notifies through channels like Email or Slack.

- **Efficient Network Usage**: The pull system ensures Prometheus collects data only when needed, reducing unnecessary network traffic compared to push-based systems.

- **Service Discovery**: Prometheus automatically discovers and monitors new targets in dynamic environments like Kubernetes, ensuring new services are monitored without manual configuration.

## Architecture

### 1. Prometheus Server

The Prometheus server is the core component. It is responsible for:

- **Scraping metrics** from monitored targets
- **Storing metrics** in its time-series database
- **Serving queries** through HTTP and PromQL
- **Evaluating rules** for alerting and recording

#### Main parts of the Prometheus server

- **Time-series database (TSDB)**
  Stores all collected metrics data such as:
  - CPU usage
  - Memory usage
  - Request count
  - Exception count
  - Response duration

- **Data retrieval worker**
  Pulls metrics from applications, services, or servers at regular intervals

- **HTTP server**
  Accepts PromQL queries and exposes the Prometheus web UI and API

---

### 2. Exporters

An **exporter** is a service or script that fetches metrics from a target system and converts them into a format Prometheus understands. The exporter then exposes those metrics at a `host-address/metrics` endpoint.

#### Notes about exporters

- Many exporters are available for different systems
- Example: **Node Exporter** for Linux server metrics
- Exporters are often available as **Docker images**
- For something like a MySQL database, an exporter can run as a **sidecar container** in the same pod
- For applications, Prometheus provides **client libraries** in many programming languages so metrics can be exposed directly by the application

## Terminologies

### Target

A **target** is any system or service that Prometheus monitors.

Examples:

- Linux server
- Windows server
- Apache server
- Single application
- Database service

#### Units measured on a target

Examples of measurable units include:

- CPU status or usage
- Memory usage
- Disk usage
- Exception count
- Request count
- Request duration

---

### Metric

A **metric** is a specific measured value from a target.

Examples:

- CPU usage of a server
- Total number of HTTP requests
- Number of exceptions thrown
- Duration of requests

#### Metric format

- Metrics are exposed in a **human-readable text-based format**

#### Metric attributes

- **HELP**
  Describes what the metric represents

- **TYPE**
  Defines the metric type

---

### Metric Types

#### Counter

A **counter** represents a value that only increases over time.

Used for things like:

- Total request count
- Total exception count
- Number of completed jobs

---

#### Gauge

A **gauge** represents a value that can go up or down.

Used for things like:

- Current memory usage
- Current CPU usage
- Current number of active connections

---

#### Histogram

A **histogram** measures the distribution of values such as duration or size.

Used for things like:

- Request duration
- Response size

It groups observations into buckets so you can analyze how values are distributed.

## Working

Prometheus collects metrics using a **pull model**.

```
[Targets / Applications]
        │
        │  (Expose metrics via /metrics or Exporter)
        ▼
[Prometheus Server]
        │
        │  (Scrapes metrics via HTTP)
        ▼
[Time Series Database (Storage)]
        │
        ├──────────────► [PromQL Queries]
        │                     │
        │                     ▼
        │              [Visualization (UI / Grafana)]
        │
        ▼
[Alert Rules Evaluation]
        │
        ▼
[Alertmanager]
        │
        ▼
[Notifications (Email / Slack / etc.)]
```

### How Prometheus gets metrics

- Prometheus sends HTTP requests to targets
- It pulls metrics from the target’s `/metrics` endpoint
- Example:

```text
http://host-address/metrics
```

The metrics are collected at regular intervals defined in the configuration.

---

## Pull Mechanism

One of Prometheus’s most important features is its **pull-based model**.

### In many other monitoring systems

- Applications or servers **push** metrics to a centralized monitoring system

### Problems with push-based systems

- Many microservices pushing to one central server can increase network traffic
- This can create bottlenecks
- It often requires active daemons or agents pushing data from targets

### Advantages of the pull model

- **Multiple Prometheus servers** can scrape the same target
- Prometheus can better detect whether a target is up
- If Prometheus cannot pull metrics, that itself indicates a possible service failure
- Centralized control over scraping intervals and targets

---

## Pushgateway

The pull model is not ideal for every case.

### When it is needed

Some targets run only for a very short time, such as:

- Short-lived batch jobs
- Ephemeral jobs

In such cases, the target may finish before Prometheus gets a chance to scrape it.

### Solution

Use **Pushgateway**.

- The short-lived job pushes metrics to Pushgateway
- Prometheus then scrapes metrics from Pushgateway

This provides compatibility for cases where direct pulling is not practical.

## Configuring Prometheus

Prometheus is configured using a YAML file, usually named:

```yaml
prometheus.yml
```

### Configuration defines

- Which targets Prometheus should monitor
- How often Prometheus should scrape them
- Rule files for alerts and aggregations

### Example default configuration

```yaml
global:
  scrape_interval: 15s
  evaluation_interval: 15s

rule_files:

scrape_configs:
  - job_name: "prometheus"
    static_configs:
      - targets: ["localhost:9090"]
```

### Explanation

#### global

Defines global settings such as:

- **scrape_interval**: how often Prometheus scrapes targets
- **evaluation_interval**: how often rules are evaluated

#### rule_files

Contains rule definitions for:

- Alerting rules
- Recording rules

#### scrape_configs

Defines what resources Prometheus monitors

In the default example:

- Prometheus monitors itself through its own `/metrics` endpoint

### Default values for each job

- `metrics_path: /metrics`
- `scheme: http`

---

## Alertmanager

Prometheus itself evaluates alert rules, but **Alertmanager** handles alert delivery.

### What Alertmanager does

- Receives alerts from Prometheus
- Groups alerts
- Deduplicates alerts
- Routes alerts to configured channels
- Manages silencing and inhibition rules

### Who receives alerts

Alerts can be sent to channels such as:

- Email
- Slack
- Other notification systems

---

## Data Storage

Prometheus stores data as **time-series data**.

### Storage options

- **Local disk storage**
- **Remote storage systems**

### Querying stored data

Stored metrics can be queried using **PromQL**.

---

## Querying Prometheus

You can query Prometheus using:

- **Prometheus Web UI**
- **Grafana** or other visualization tools

### Example queries

#### 1. Query all HTTP status codes except 4xx

```promql
http_requests_total{status!~"4.."}
```

#### 2. Request rate over time

```promql
rate(http_requests_total[5m])
```

This returns the per-second average rate of requests over the last 5 minutes.

## Disadvantage

### Difficult to scale

One disadvantage of Prometheus is that it can be harder to scale for very large environments because:

- It is primarily designed around local storage
- Large-scale metric collection can require federation or remote storage solutions
- Long-term storage and massive deployments need additional architecture planning
