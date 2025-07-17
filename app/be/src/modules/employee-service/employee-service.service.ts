import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeService } from './employee-service.entity';
import { CreateEmployeeServiceDto } from './dto/create-employee-service.dto';
import { Employee } from '../employee/employee.entity';
import { Service } from '../service/service.entity';

@Injectable()
export class EmployeeServiceService {
  constructor(
    @InjectRepository(EmployeeService)
    private readonly employeeServiceRepository: Repository<EmployeeService>,
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  findAll(): Promise<EmployeeService[]> {
    return this.employeeServiceRepository.find({
      relations: ['employee', 'service'],
    });
  }

  async create(dto: CreateEmployeeServiceDto): Promise<EmployeeService> {
    const employee = await this.employeeRepository.findOneByOrFail({
      id: dto.employeeId,
    });
    const service = await this.serviceRepository.findOneByOrFail({
      id: dto.serviceId,
    });
    const employeeService = this.employeeServiceRepository.create({
      employee,
      service,
    });
    return this.employeeServiceRepository.save(employeeService);
  }
}
