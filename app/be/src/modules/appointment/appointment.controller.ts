import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { AppointmentService } from './appointment.service';
import { Appointment } from './appointment.entity';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { SalonId } from '../../common/decorators/salon-id.decorator';
import { AuthGuard } from '../auth/auth.guard';

@Controller('appointment')
export class AppointmentController {
  constructor(private readonly appointmentService: AppointmentService) {}

  @Get()
  findAll(): Promise<Appointment[]> {
    return this.appointmentService.findAll();
  }

  @Get('month')
  @UseGuards(AuthGuard)
  findByMonth(
    @SalonId() salonId: number,
    @Query('year') year: string,
    @Query('month') month: string,
  ): Promise<Appointment[]> {
    return this.appointmentService.findByMonth(
      Number(year),
      Number(month),
      salonId,
    );
  }

  @Post()
  create(@Body() data: CreateAppointmentDto): Promise<Appointment> {
    return this.appointmentService.create(data);
  }
}
