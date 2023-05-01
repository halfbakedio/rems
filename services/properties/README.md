# Properties Service

## Database

Tasks have been added to `robo`:

* `robo dev db/reset` to drop and recreate databases
* `robo dev db/migrate` to perform database migrations

## Tasks

The `grift` package is used to create `rake` like tasks.

### Migrations

Create a Fizz migration with:

```shell
soda generate fizz migration_name
```
