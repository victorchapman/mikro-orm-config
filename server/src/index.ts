import { MikroORM } from "@mikro-orm/core";
import { Item } from "./entities/Item.js";
import "express";

const orm = await MikroORM.init({
  entities: [Item],
  dbName: process.env.DB_NAME,
  type: "postgresql",
  clientUrl: "157.230.108.247:1285",
  name: process.env.NAME,
  password: process.env.PASSWORD,
});
orm.getMigrator().up();
console.log(orm);
