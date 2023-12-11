"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  cosineDistance: () => cosineDistance,
  customVector: () => customVector,
  l2Distance: () => l2Distance,
  maxInnerProduct: () => maxInnerProduct
});
module.exports = __toCommonJS(src_exports);
var import_drizzle_orm = require("drizzle-orm");
var import_pg_core = require("drizzle-orm/pg-core");
var customVector = (0, import_pg_core.customType)({
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
  return import_drizzle_orm.sql`${column} <-> ${toSql(value)}`;
}
function maxInnerProduct(column, value) {
  return import_drizzle_orm.sql`${column} <#> ${toSql(value)}`;
}
function cosineDistance(column, value) {
  return import_drizzle_orm.sql`${column} <=> ${toSql(value)}`;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  cosineDistance,
  customVector,
  l2Distance,
  maxInnerProduct
});
