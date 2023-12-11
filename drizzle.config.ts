import type { Config } from "drizzle-kit";
export default {
    schema: "./test/schema/mySchema.ts",
    out: "./drizzle",
} satisfies Config;
