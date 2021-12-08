import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Item {
  @PrimaryKey()
  id!: number;

  @Property({ type: "text" })
  name!: string;
}
