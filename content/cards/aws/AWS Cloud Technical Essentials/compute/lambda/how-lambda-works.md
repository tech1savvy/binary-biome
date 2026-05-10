### How does AWS Lambda work?

---

**Key Components of a Lambda Function:**
1. **Trigger:** Describes when the function should run (e.g., S3 upload, API call)
2. **Code:** The source code describing what the function should do
3. **Configuration:** Describes how the function runs (Memory, timeout, IAM role, environment variables)

**Function Handler:** The specific method in your code that processes events.
- Python Syntax: `def handler_name(event, context): ... return value`
- Naming Convention: `[file_name].[method_name]` (default: `lambda_function.lambda_handler`)

**Billing & Performance:**
- Sub-second metering: Duration rounded up to nearest 1ms with no minimum execution time
- Continuous scaling: Automatically scales with consistent performance, whether for 1 or 10,000 requests

**Runtimes:** Python, Node.js, Ruby, Go, Java, .NET Core (built-in). Custom runtimes also supported.

**Triggers:**
- HTTP Requests (via Amazon API Gateway)
- File Uploads (e.g., a file added to S3)
- Database Changes (e.g., updates to DynamoDB)
- In-App Activity (events from mobile or web applications)
