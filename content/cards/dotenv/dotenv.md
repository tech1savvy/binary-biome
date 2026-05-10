---
id: dotenv
aliases: []
tags: []
noteId: 1777823467847
---

# Getting Started

- [Docs](https://github.com/motdotla/dotenv?tab=readme-ov-file#%EF%B8%8F-usage)

## Create a `.env` file, by default dotenv searches for it in the project root

```text .env
PORT="8000"
MONGODB_URL="mongodb://localhost:27017/<dbname>"
```

## Install

```sh
npm install dotenv
```

## Import

```js
require("dotenv").config();
```

- This loads the `.env` file variables into `process.env`.

## Using environment variables in code

```js
const PORT = process.env.PORT || 8000;
```

- Good to add a fail safe value using the `or` operator.

## Add `.env` to `.gitignore`

```text .gitignore
.env
```
