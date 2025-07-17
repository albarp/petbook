import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Salon } from '../salon/salon.entity';

@Entity('salon_hours')
export class SalonHours {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  day_of_week: number;

  @Column({ type: 'text' })
  open_time: string;

  @Column({ type: 'text' })
  close_time: string;

  @ManyToOne(() => Salon, { onDelete: 'CASCADE' })
  salon: Salon;
}
