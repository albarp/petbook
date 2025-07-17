import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Salon } from '../salon/salon.entity';

@Entity('salon_holidays')
export class SalonHolidays {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  start_date: string;

  @Column({ type: 'text' })
  end_date: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @ManyToOne(() => Salon, { onDelete: 'CASCADE' })
  salon: Salon;
}
