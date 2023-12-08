import { Vector } from "@useverk/vector";
import { AnyColumn, SQLWrapper, sql } from "drizzle-orm";
import { customType } from "drizzle-orm/pg-core";
export { Vector };

export const customVector = customType<{
    data: Vector | number[];
    driverData: string;
    config: { dimensions: number };
}>({
    dataType(config) {
        if (!config) {
            return `vector(1536)`;
        }
        return `vector(${config.dimensions})`;
    },
    toDriver(value: Vector | number[]): string {
        return toSql(value);
    },

    fromDriver(value: string): Vector {
        return fromSql(value);
    },
});

function fromSql(value: string) {
    return new Vector(
        value
            .substring(1, value.length - 1)
            .split(",")
            .map((v) => parseFloat(v))
    );
}

function toSql(value: Vector | number[]) {
    return JSON.stringify(value);
}

export function l2Distance(
    column: SQLWrapper | AnyColumn,
    value: Vector | number[]
) {
    return sql`${column} <-> ${toSql(value)}`;
}

export function maxInnerProduct(
    column: SQLWrapper | AnyColumn,
    value: Vector | number[]
) {
    return sql`${column} <#> ${toSql(value)}`;
}

export function cosineDistance(
    column: SQLWrapper | AnyColumn,
    value: Vector | number[]
) {
    return sql`${column} <=> ${toSql(value)}`;
}
