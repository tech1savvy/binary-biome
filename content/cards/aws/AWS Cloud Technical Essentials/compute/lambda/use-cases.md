### What are the use cases and limitations of AWS Lambda?

---

**Use Cases:**
- **Web Backends:** Handling specific API requests
- **Real-time File Processing:** Generating thumbnails, transcoding videos, or indexing files
- **Data Transformation:** Validating or cleaning data before it enters a database
- **Microservices:** Building small, independent pieces of application logic

**Not Suitable For:**
- Long-running processes (over 15 minutes)
- Deep learning training
- High-traffic persistent web servers (like a complex WordPress site)
