---
id: shell
noteId: 1777823465547
---

How do you use the Django shell to explore and manipulate models?

---

Using the Django shell to explore models allows you to interactively insert, update, and delete records in your database via the ORM without writing separate scripts or accessing the admin interface.

### Starting the Django Shell
Run this command from your project directory to open the shell with Django's context loaded:
```bash
python manage.py shell
```

### Basic Operations in the Shell

#### Importing Your Model
```python
from myapp.models import MyModel
```
Replace `myapp` and `MyModel` with your app and model names.

#### Inserting (Creating) New Records
```python
# Create an instance
obj = MyModel(field1='value1', field2=123)

# Save to database
obj.save()

# Or create and save in one step
obj = MyModel.objects.create(field1='value1', field2=123)
```

#### Querying Records
```python
# Retrieve all objects
all_objs = MyModel.objects.all()

# Filter objects by a field
filtered_objs = MyModel.objects.filter(field1='value1')

# Get a single object
one_obj = MyModel.objects.get(id=1)
```

#### Updating Records
```python
# Update fields
obj = MyModel.objects.get(id=1)
obj.field2 = 456
obj.save()
```

Or batch update:
```python
MyModel.objects.filter(field1='value1').update(field2=789)
```

#### Deleting Records
```python
# Delete a single object
obj = MyModel.objects.get(id=1)
obj.delete()

# Bulk delete
MyModel.objects.filter(field2=123).delete()
```