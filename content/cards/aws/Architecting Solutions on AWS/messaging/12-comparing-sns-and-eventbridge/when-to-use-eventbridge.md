### When to Use EventBridge

---

Use **EventBridge** when you need:

- Advanced event routing
- JSON-based filtering rules
- SaaS event integration
- Schema management
- Integration with many AWS services

Typical pattern:

Event Source → EventBridge Bus → Rules → Targets

In practical terms:

- **SNS** = fast fan-out messaging
- **EventBridge** = smarter event routing
