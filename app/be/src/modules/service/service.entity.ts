import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Salon } from '../salon/salon.entity';

@Entity('services')
export class Service {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({ type: 'real' })
  price: number;

  @Column({ type: 'integer' })
  duration_minutes: number;

  @ManyToOne(() => Salon, { onDelete: 'CASCADE' })
  salon: Salon;
}
