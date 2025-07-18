import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { Appointment } from './appointment.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { Salon } from '../salon/salon.entity';
import { Pet } from '../pet/pet.entity';
import { Service } from '../service/service.entity';
import { Employee } from '../employee/employee.entity';
import { Room } from '../room/room.entity';

@Injectable()
export class AppointmentService {
  constructor(
    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
    @InjectRepository(Salon)
    private readonly salonRepository: Repository<Salon>,
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
  ) {}

  findAll(): Promise<Appointment[]> {
    return this.appointmentRepository.find({
      relations: ['salon', 'pet', 'service', 'employee', 'room'],
    });
  }

  async findByMonth(
    year: number,
    month: number,
    salonId: number,
  ): Promise<Appointment[]> {
    const start = new Date(Date.UTC(year, month - 1, 1, 0, 0, 0));
    const end = new Date(Date.UTC(year, month, 1, 0, 0, 0));
    return this.appointmentRepository.find({
      where: {
        start_time: Between(start.toISOString(), end.toISOString()),
        salon: { id: salonId },
      },
      relations: ['salon', 'pet', 'service', 'employee', 'room'],
    });
  }

  async create(dto: CreateAppointmentDto): Promise<Appointment> {
    const salon = await this.salonRepository.findOneByOrFail({
      id: dto.salonId,
    });
    const pet = await this.petRepository.findOneByOrFail({ id: dto.petId });
    const service = await this.serviceRepository.findOneByOrFail({
      id: dto.serviceId,
    });
    const employee = await this.employeeRepository.findOneByOrFail({
      id: dto.employeeId,
    });
    const room = await this.roomRepository.findOneByOrFail({ id: dto.roomId });
    const appointment = this.appointmentRepository.create({
      start_time: dto.start_time,
      end_time: dto.end_time,
      status: dto.status ?? null,
      notes: dto.notes ?? null,
      salon,
      pet,
      service,
      employee,
      room,
    });
    return this.appointmentRepository.save(appointment);
  }
}
