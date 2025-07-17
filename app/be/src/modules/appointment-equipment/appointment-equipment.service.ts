import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AppointmentEquipment } from './appointment-equipment.entity';
import { CreateAppointmentEquipmentDto } from './dto/create-appointment-equipment.dto';
import { Appointment } from '../appointment/appointment.entity';
import { Equipment } from '../equipment/equipment.entity';

@Injectable()
export class AppointmentEquipmentService {
  constructor(
    @InjectRepository(AppointmentEquipment)
    private readonly appointmentEquipmentRepository: Repository<AppointmentEquipment>,
    @InjectRepository(Appointment)
    private readonly appointmentRepository: Repository<Appointment>,
    @InjectRepository(Equipment)
    private readonly equipmentRepository: Repository<Equipment>,
  ) {}

  findAll(): Promise<AppointmentEquipment[]> {
    return this.appointmentEquipmentRepository.find({
      relations: ['appointment', 'equipment'],
    });
  }

  async create(
    dto: CreateAppointmentEquipmentDto,
  ): Promise<AppointmentEquipment> {
    const appointment = await this.appointmentRepository.findOneByOrFail({
      id: dto.appointmentId,
    });
    const equipment = await this.equipmentRepository.findOneByOrFail({
      id: dto.equipmentId,
    });
    const appointmentEquipment = this.appointmentEquipmentRepository.create({
      appointment,
      equipment,
    });
    return this.appointmentEquipmentRepository.save(appointmentEquipment);
  }
}
