# Fetch Boot.dev Certificates

Fetches completed courses from Boot.dev profile and updates certifications page.

## Usage

```
/fetch-certs
```

## Command

```bash
python3 scripts/fetch-bootdev-certs.py
```

## Description

Scrapes the Boot.dev profile page to extract completed course certificates with UUIDs, titles, and completion dates. Output can be used to update `content/works/certifications.md`.
