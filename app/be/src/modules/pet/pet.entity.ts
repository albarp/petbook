import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Client } from '../client/client.entity';

@Entity('pets')
export class Pet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', nullable: true })
  breed: string | null;

  @Column({ type: 'integer', nullable: true })
  age: number | null;

  @Column({ type: 'text', nullable: true })
  notes: string | null;

  @ManyToOne(() => Client, { onDelete: 'CASCADE' })
  client: Client;
}
