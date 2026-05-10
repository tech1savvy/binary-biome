### 2. Defining Boundaries

---

Establishing what is **in scope** vs. **out of scope** aligns customer expectations.

*   **In Scope:** The complete data analytics pipeline (Ingestion, Storage, Processing, Visualization).
*   **Out of Scope:** The third-party payment processing gateway and the client-side JavaScript code.

## 3. Data Strategy
The SA emphasizes thinking about the **data source** first. 
*   **Scenario Logic:** Since the customer controls the data production (via their JS library), they can send clean data that doesn't require heavy transformation upon arrival. 
*   **Storage Choice:** **Amazon S3** is the natural candidate for the data lake, as it supports static website hosting (current state) and scalable object storage (future state).
