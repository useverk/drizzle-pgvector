import { pgTable, uuid } from "drizzle-orm/pg-core";
import { customVector } from "../..";

export const myTable = pgTable("jobSeekerProfile", {
    id: uuid("id").notNull().primaryKey().defaultRandom(),
    embedding: customVector("embedding", { dimensions: 1536 }).notNull(),
});
