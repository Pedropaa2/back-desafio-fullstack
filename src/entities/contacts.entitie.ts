import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

import { getRounds, hashSync } from "bcryptjs";
import { Client } from "./clients.entitie";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "varchar", length: 45 })
  name: string;

  @Column({ type: "varchar", length: 45, unique: true })
  email: string;

  @Column({ type: "varchar", length: 120 })
  telephone: string;

  @CreateDateColumn({ type: "date" })
  createdAt: Date | string;

  @ManyToOne(() => Client, () => Client, { cascade: true })
  client: Client;
}

export { Contact };
