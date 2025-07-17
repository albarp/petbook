import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Employee } from '../employee/employee.entity';

@Entity('employee_availability')
export class EmployeeAvailability {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer' })
  day_of_week: number;

  @Column({ type: 'text' })
  start_time: string;

  @Column({ type: 'text' })
  end_time: string;

  @ManyToOne(() => Employee, { onDelete: 'CASCADE' })
  employee: Employee;
}
