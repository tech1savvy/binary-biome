---
noteId: 1778320499641
---

### How do I generate load to trigger VPA recommendations?

---

Minikube idle means VPA has no data. Generate load with a busybox pod:

```bash
kubectl run -i --tty load-generator --image=busybox -- /bin/sh
```

Inside the shell, hammer the service:

```sh
while true; do wget -q -O- http://vpa-demo; done
```

Leave it running. VPA now has real usage to analyze and will start making meaningful recommendations.
