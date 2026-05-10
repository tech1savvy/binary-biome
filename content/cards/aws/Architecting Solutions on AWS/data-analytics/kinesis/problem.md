### Problem

---

Client behavior:

- JavaScript library sends **HTTPS POST**

Kinesis requirement:

- AWS API calls:
  - `PutRecord`
  - `PutRecordBatch`

Mismatch:

- Web client can't directly call Kinesis APIs easily.
