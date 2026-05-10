---
id: database-connection
noteId: 1777823463048
---

How do you configure the database connection in Django?

---

To configure a database connection, set the `DATABASES` setting in `settings.py`. Django supports SQLite (default), PostgreSQL, MySQL, and Oracle.

### 1) Locate `DATABASES` in `settings.py`
Default (SQLite):
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

### 2) Configure another backend
PostgreSQL:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'your_db_name',
        'USER': 'your_db_user',
        'PASSWORD': 'your_db_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
```

MySQL:
```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'your_db_name',
        'USER': 'your_db_user',
        'PASSWORD': 'your_db_password',
        'HOST': 'localhost',
        'PORT': '3306',
    }
}
```

### 3) Install the database driver
- PostgreSQL: `psycopg2-binary`
```bash
pip install psycopg2-binary
```
- MySQL: `mysqlclient`
```bash
pip install mysqlclient
```

### 4) Apply migrations
```bash
python manage.py migrate
```

---

- Configure the backend and credentials in `DATABASES`.
- Install the appropriate Python adapter for your DBMS.
- Run migrations to initialize tables and schema.
