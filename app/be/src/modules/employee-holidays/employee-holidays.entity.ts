import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Employee } from '../employee/employee.entity';

@Entity('employee_holidays')
export class EmployeeHolidays {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'text' })
  start_date: string;

  @Column({ type: 'text' })
  end_date: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @ManyToOne(() => Employee, { onDelete: 'CASCADE' })
  employee: Employee;
}
