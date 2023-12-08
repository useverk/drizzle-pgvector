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

-   [] Returns `Vector | number[]` instead of `Vector` on query results. The real type is always `Vector` but the type system doesn't know it. This is a limitation of the current version of `drizzle-orm` and will (hopefully) be fixed very soon.
    A workaround is to use `const myVector = myResult.embedding as Vector` to get the correct type.
