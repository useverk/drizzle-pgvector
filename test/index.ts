import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
export * from "drizzle-orm";

// for query purposes
const queryClient = postgres("postgres://postgres:adminadmin@0.0.0.0:5432/db");
const db = drizzle(queryClient);

await db.insert(schema.myTable).values({ id: "1", embedding: [1, 2, 3] });
const a = await db
    .select({ embedding: schema.myTable.embedding })
    .from(schema.myTable);
