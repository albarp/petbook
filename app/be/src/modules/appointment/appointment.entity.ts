import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Salon } from '../salon/salon.entity';
import { Pet } from '../pet/pet.entity';
import { Service } from '../service/service.entity';
import { Employee } from '../employee/employee.entity';
import { Room } from '../room/room.entity';

@Entity('appointments')
export class Appointment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  start_time: string;

  @Column({ type: 'text' })
  end_time: string;

  @Column({ type: 'text', nullable: true })
  status: string | null;

  @Column({ type: 'text', nullable: true })
  notes: string | null;

  @ManyToOne(() => Salon, { onDelete: 'CASCADE' })
  salon: Salon;

  @ManyToOne(() => Pet, { onDelete: 'CASCADE' })
  pet: Pet;

  @ManyToOne(() => Service, { onDelete: 'CASCADE' })
  service: Service;

  @ManyToOne(() => Employee, { onDelete: 'CASCADE' })
  employee: Employee;

  @ManyToOne(() => Room, { onDelete: 'CASCADE' })
  room: Room;
}
