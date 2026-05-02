---
id: eksctl
aliases: []
tags: []
noteId: 1777728478364
---

## Create cluster using eksctl

```sh
eksctl create cluster \
  --name "name" \
  --region "region" \
  --nodegroup-name "nodegroup-name" \
  --nodes 1 \
  --nodes-min 1 \
  --nodes-max 3
```

## Delete cluster using eksctl

```sh
eksctl delete cluster --name "name"
```
