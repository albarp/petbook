import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Salon } from '../salon/salon.entity';
import { Room } from '../room/room.entity';

@Entity('equipment')
export class Equipment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  name: string;

  @ManyToOne(() => Salon, { onDelete: 'CASCADE' })
  salon: Salon;

  @ManyToOne(() => Room, { nullable: true, onDelete: 'SET NULL' })
  room: Room | null;
}
