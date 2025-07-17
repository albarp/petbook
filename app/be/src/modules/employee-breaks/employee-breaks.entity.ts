import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Employee } from '../employee/employee.entity';

@Entity('employee_breaks')
export class EmployeeBreaks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'integer', nullable: true })
  day_of_week: number | null;

  @Column({ type: 'text', nullable: true })
  break_date: string | null;

  @Column({ type: 'text' })
  start_time: string;

  @Column({ type: 'text' })
  end_time: string;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @ManyToOne(() => Employee, { onDelete: 'CASCADE' })
  employee: Employee;
}
