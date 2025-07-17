import { Entity, PrimaryGeneratedColumn, ManyToOne, Unique } from 'typeorm';
import { Employee } from '../employee/employee.entity';
import { Service } from '../service/service.entity';

@Entity('employee_service')
@Unique(['employee', 'service'])
export class EmployeeService {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Employee, { onDelete: 'CASCADE' })
  employee: Employee;

  @ManyToOne(() => Service, { onDelete: 'CASCADE' })
  service: Service;
}
