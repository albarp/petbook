import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeAvailability } from './employee-availability.entity';
import { CreateEmployeeAvailabilityDto } from './dto/create-employee-availability.dto';
import { Employee } from '../employee/employee.entity';

@Injectable()
export class EmployeeAvailabilityService {
  constructor(
    @InjectRepository(EmployeeAvailability)
    private readonly employeeAvailabilityRepository: Repository<EmployeeAvailability>,
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  findAll(): Promise<EmployeeAvailability[]> {
    return this.employeeAvailabilityRepository.find({
      relations: ['employee'],
    });
  }

  async create(
    dto: CreateEmployeeAvailabilityDto,
  ): Promise<EmployeeAvailability> {
    const employee = await this.employeeRepository.findOneByOrFail({
      id: dto.employeeId,
    });
    const availability = this.employeeAvailabilityRepository.create({
      day_of_week: dto.day_of_week,
      start_time: dto.start_time,
      end_time: dto.end_time,
      employee,
    });
    return this.employeeAvailabilityRepository.save(availability);
  }
}
