### Typical Workflow

---

1. Data stored in **S3**
2. Create **external table** in Athena
3. Run **SQL queries**
4. Send results to analytics or BI tools

Example query:

SELECT item_id, COUNT(\*)
FROM clickstream_table
GROUP BY item_id;
