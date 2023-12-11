import * as drizzle_orm from 'drizzle-orm';
import { SQLWrapper, AnyColumn } from 'drizzle-orm';
import * as drizzle_orm_pg_core from 'drizzle-orm/pg-core';

declare const customVector: <TName extends string>(dbName: TName, fieldConfig?: {
    dimensions: number;
} | undefined) => drizzle_orm_pg_core.PgCustomColumnBuilder<{
    name: TName;
    dataType: "custom";
    columnType: "PgCustomColumn";
    data: number[];
    driverParam: string;
    enumValues: undefined;
}>;
declare function l2Distance(column: SQLWrapper | AnyColumn, value: number[]): drizzle_orm.SQL<unknown>;
declare function maxInnerProduct(column: SQLWrapper | AnyColumn, value: number[]): drizzle_orm.SQL<unknown>;
declare function cosineDistance(column: SQLWrapper | AnyColumn, value: number[]): drizzle_orm.SQL<unknown>;

export { cosineDistance, customVector, l2Distance, maxInnerProduct };
