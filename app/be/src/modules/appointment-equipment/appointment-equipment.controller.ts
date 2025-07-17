import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppointmentEquipmentService } from './appointment-equipment.service';
import { AppointmentEquipment } from './appointment-equipment.entity';
import { CreateAppointmentEquipmentDto } from './dto/create-appointment-equipment.dto';

@Controller('appointment-equipment')
export class AppointmentEquipmentController {
  constructor(
    private readonly appointmentEquipmentService: AppointmentEquipmentService,
  ) {}

  @Get()
  findAll(): Promise<AppointmentEquipment[]> {
    return this.appointmentEquipmentService.findAll();
  }

  @Post()
  create(
    @Body() data: CreateAppointmentEquipmentDto,
  ): Promise<AppointmentEquipment> {
    return this.appointmentEquipmentService.create(data);
  }
}
