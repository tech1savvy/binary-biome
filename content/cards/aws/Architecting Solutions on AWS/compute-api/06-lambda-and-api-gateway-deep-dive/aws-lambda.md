### AWS Lambda

---

Runs code in isolated **execution environments**.

## Key Configuration

**Runtime**

- Language environment (Python, Node.js, Java, .NET, Go, Ruby)
- Custom runtimes supported

**Execution Role**

- IAM role granting permissions to other AWS services

**VPC Access**

- Default: AWS-managed network
- Optional: connect Lambda to a **VPC** to access private resources

**Handler**
Entry point of the function.

Parameters:
handler(event, context)

**event** → trigger payload
**context** → runtime metadata
