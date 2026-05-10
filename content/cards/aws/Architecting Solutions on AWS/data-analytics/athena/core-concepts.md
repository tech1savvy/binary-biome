### Core Concepts

---

## External Tables

Athena does not store data itself.

Instead it defines **metadata tables** that reference data in S3.

Example structure:

Athena Table → Schema
S3 Bucket → Actual Data Files

Tables created with:

CREATE EXTERNAL TABLE

You must specify:

- schema
- file format
- S3 location
