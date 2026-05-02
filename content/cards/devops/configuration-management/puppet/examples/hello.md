---
id: puppet_module_lifecycle
noteId: 1777728479315
---

How to create, apply, and troubleshoot a basic Puppet module named `hello` that creates a file `/tmp/helloModule` with content "in hello.md"?

---

1.  **Create Module Structure:**
    ```sh
    mkdir -p puppet/modules/hello/manifests
    ```
2.  **Create `init.pp`:** Place the class definition in `puppet/modules/hello/manifests/init.pp`:
    ```puppet
    class hello {
      file { '/tmp/helloModule':
        ensure  => file,
        content => 'in hello.md',
      }
    }
    ```
3.  **Apply Module (from `puppet` directory):**
    ```sh
    puppet apply --modulepath=modules -e 'class { "hello": }'
    ```
4.  **Troubleshooting "Could not find declared class" error:**
    -   Ensure `--modulepath` points to the directory *containing* the module (e.g., `modules`), not the module itself (e.g., `modules/hello`).
5.  **Verify Application:**
    -   Check for "Notice: Applied catalog" in the `puppet apply` output.
    -   Confirm file creation and content (e.g., `cat /tmp/helloModule`).

---

-   The `init.pp` file is the main manifest for a Puppet class within a module.
-   The `--modulepath` argument tells Puppet where to find your modules. It should be the parent directory of your module directories.
