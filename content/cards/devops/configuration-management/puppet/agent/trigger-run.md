---
id: trigger-run
backward:
  - "[install agent](../install/agent.md)"
noteId: 1777728478991
---

How to manually trigger a Puppet agent run?

---

Use the `puppet agent -t` command with elevated privileges:

```sh
sudo puppet agent -t
```

- **`sudo`**: Runs the command with root permissions, which is necessary for applying system configurations.
- **`puppet agent`**: The client binary that communicates with the Puppet master.
- **`-t` (`--test`)**: Tells the agent to run in the foreground and immediately apply any new configurations.

---

- This command initiates an immediate, interactive run.
- The agent fetches a catalog from the master, applies the configurations, and reports the results.
- It's commonly used for testing or forcing an immediate configuration update outside the scheduled run interval.
