import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Salon } from '../salon/salon.entity';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    @InjectRepository(Salon)
    private readonly salonRepository: Repository<Salon>,
  ) {}

  findAll(): Promise<Employee[]> {
    return this.employeeRepository.find({ relations: ['salon'] });
  }

  async create(dto: CreateEmployeeDto): Promise<Employee> {
    const salon = await this.salonRepository.findOneByOrFail({
      id: dto.salonId,
    });
    const employee = this.employeeRepository.create({
      name: dto.name,
      email: dto.email ?? null,
      phone: dto.phone ?? null,
      salon,
      userId: dto.userId ?? null,
    });
    return this.employeeRepository.save(employee);
  }
}
