Do

```sh
npm install @useverk/drizzle-pgvector
```

or

```sh
yarn add @useverk/drizzle-pgvector
```

or

```sh
pnpm add @useverk/drizzle-pgvector
```

And then in your code:

```ts
import { customVector } from '@useverk/drizzle-pgvector'
export const myTable = pgTable(
  'mytable',
  {
    ...
    embedding: customVector('embedding', { dimensions: 1536 }),
    ...
  })
```

### Known issues

-   [ ] running `drizzle-kit generate` will generate the following sql migration file:

    ```sql
    CREATE TABLE IF NOT EXISTS "myTable" (
    "id" serial PRIMARY KEY NOT NULL,
    "vector" "vector(1536)"
    );
    ```

    which is not valid postgresql syntax.
    Simply remove the quotes around the type name to fix it.
    The correct syntax is:

    ```sql
    CREATE TABLE IF NOT EXISTS "myTable" (
    "id" serial PRIMARY KEY NOT NULL,
    "vector" vector(1536)
    );
    ```

    Will fix this once `drizzle-kit` is open-source.
