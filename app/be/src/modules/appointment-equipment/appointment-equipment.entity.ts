import { Entity, PrimaryGeneratedColumn, ManyToOne, Unique } from 'typeorm';
import { Appointment } from '../appointment/appointment.entity';
import { Equipment } from '../equipment/equipment.entity';

@Entity('appointment_equipment')
@Unique(['appointment', 'equipment'])
export class AppointmentEquipment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Appointment, { onDelete: 'CASCADE' })
  appointment: Appointment;

  @ManyToOne(() => Equipment, { onDelete: 'CASCADE' })
  equipment: Equipment;
}
