# Properties Service

## Database

### Migrations

Create a Fizz migration with:

```shell
soda generate fizz migration_name
```

### Development

Tasks have been added to `robo`:

* `robo dev db/reset` to drop and recreate databases
* `robo dev db/migrate` to perform database migrations

### Production

Proxy the database port to run migration tasks.

```shell
fly proxy 5433:5432 -a rems-properties-db
```

Create a `.env` file with

```shell
PROPERTIES_DB_URL=postgres://rems_properties:<password>@127.0.0.1:5433/rems_properties?sslmode=disable
```

The value for `<password>` is created at first launch using `fly`. If this value
was lost the secrets for `rems-properties-db` can be set to update the password.

## Tasks

The `grift` package is used to create `rake` like tasks.
