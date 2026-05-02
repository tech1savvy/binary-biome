---
noteId: 1777728478641
---

How do you parse options (flags) in a Bash script?
***
- Use the `getopts` command inside a `while` loop to process short options (e.g., `-f`) and their corresponding arguments.

```bash
while getopts ":u:p:" opt; do
  case $opt in
    u) username="$OPTARG" ;;
    p) password="$OPTARG" ;;
    \?) echo "Invalid option: -$OPTARG" ;;
    :) echo "Option -$OPTARG requires an argument." ;;
  esac
done
```

**Example Usage:**

```sh
./your-script.sh -u myusername -p "a secret password"
```

---

- In the option string (`":u:p:"`), a colon after a letter (e.g., `u:`) signifies that the option requires an argument.
- The value of the argument is stored in the `$OPTARG` variable.
- A leading colon in the option string enables silent error handling.
