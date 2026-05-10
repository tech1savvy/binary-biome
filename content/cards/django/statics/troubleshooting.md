---
id: favicon-django-troubleshooting
level: 1
noteId: 1777823465871
---

Why might a favicon not work in a Django project despite correct template syntax?

---

Two critical issues that often cause favicon not to work in Django, even when all the syntax is correct:

1. **Django Server Cache**

   - Django development server keeps static files configuration in memory
   - Changes to static files settings in `settings.py` require a server restart
   - Simply refreshing the page won't work until server is restarted

2. **Browser Cache**
   - Browsers aggressively cache favicons for performance
   - Old favicon versions can persist even after server changes
   - Must force a browser cache refresh with Ctrl+Shift+R (Cmd+Shift+R on Mac)

---

To fix:

1. Restart Django development server: `python manage.py runserver`
2. Force browser cache refresh with Ctrl+Shift+R

Note: This is a common pitfall that confuses many developers because everything appears correctly configured, yet the favicon still doesn't show up.
