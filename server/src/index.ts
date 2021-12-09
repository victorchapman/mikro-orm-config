import {
  EntityManager,
  MikroORM,
  EntityRepository,
  RequestContext,
} from "@mikro-orm/core";
import cors from "cors";
import { Item } from "./entities/Item.js";
import express, { Request, Response } from "express";

export const DI = {} as {
  orm: MikroORM;
  em: EntityManager;
  itemRepository: EntityRepository<Item>;
};

const app = express();

(async () => {
  DI.orm = await MikroORM.init({
    dbName: "gtp",
    entities: [Item],
    type: "postgresql",
    host: process.env.HOST,
    port: 1285,
    name: process.env.NAME,
    password: process.env.PASSWORD,
    debug: true,
  });
  DI.itemRepository = DI.orm.em.getRepository(Item);

  app.use(express.json());
  app.use(cors());

  app.use((req, res, next) => RequestContext.create(DI.orm.em, next));
  app.listen(1234, () => {
    console.log("Connected");
  });
})();
