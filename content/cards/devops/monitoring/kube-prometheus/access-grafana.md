---
noteId: 1778320499790
---

### How do I access Grafana after deploying kube-prometheus stack?

---

Port-forward the Grafana service:

```bash
kubectl port-forward svc/kube-prometheus-stack-grafana 3000:80
```

Open `http://localhost:3000` in your browser.

Retrieve the admin password:

```bash
kubectl get secret kube-prometheus-stack-grafana -o jsonpath="{.data.admin-password}" | base64 --decode
```

Default username: `admin`
