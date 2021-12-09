import { Options } from "@mikro-orm/core";
import { Item } from "../entities/Item";

const config: Options = {
  dbName: "gtp",
  entities: [Item],
  type: "postgresql",
  host: "157.230.108.247",
  port: 1285,
  name: "victor",
  password: "1901Washington!",
  debug: true,
};

export default config;
