### Pub/Sub Model

---

Components:

- **Topic** – communication channel
- **Publisher** – sends message to topic
- **Subscriber** – receives message

Fan-out pattern:

Publisher → SNS Topic → Multiple Subscribers

One message can trigger multiple consumers.
