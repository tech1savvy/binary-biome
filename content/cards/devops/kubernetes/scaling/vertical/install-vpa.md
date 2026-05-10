---
noteId: 1778320499665
---

### How do I install VPA in Minikube?

---

Clone the autoscaler repo and deploy VPA:

```bash
git clone https://github.com/kubernetes/autoscaler.git
cd autoscaler/vertical-pod-autoscaler/
./hack/vpa-up.sh
```

This deploys three components:

- `recommender` — analyzes usage and suggests resources
- `updater` — decides when to restart pods for updates
- `admission controller` — applies new resources on pod creation

Verify:

```bash
kubectl get pods -n kube-system
```

You should see VPA component pods running.
