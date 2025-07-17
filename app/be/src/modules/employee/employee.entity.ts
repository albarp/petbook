import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  Unique,
} from 'typeorm';
import { Salon } from '../salon/salon.entity';

@Entity('employees')
@Unique(['userId'])
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', nullable: true })
  email: string | null;

  @Column({ type: 'text', nullable: true })
  phone: string | null;

  @ManyToOne(() => Salon, { onDelete: 'CASCADE' })
  salon: Salon;

  @Column({ type: 'integer', nullable: true, unique: true })
  userId: number | null;
}
