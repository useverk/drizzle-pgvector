// src/index.ts
import { sql } from "drizzle-orm";
import { customType } from "drizzle-orm/pg-core";
var customVector = customType({
  dataType(config) {
    if (!config) {
      return `vector(1536)`;
    }
    return `vector(${config.dimensions})`;
  },
  toDriver(value) {
    return toSql(value);
  },
  fromDriver(value) {
    return fromSql(value);
  }
});
function fromSql(value) {
  return value.substring(1, value.length - 1).split(",").map((v) => parseFloat(v));
}
function toSql(value) {
  return JSON.stringify(value);
}
function l2Distance(column, value) {
  return sql`${column} <-> ${toSql(value)}`;
}
function maxInnerProduct(column, value) {
  return sql`${column} <#> ${toSql(value)}`;
}
function cosineDistance(column, value) {
  return sql`${column} <=> ${toSql(value)}`;
}
export {
  cosineDistance,
  customVector,
  l2Distance,
  maxInnerProduct
};
