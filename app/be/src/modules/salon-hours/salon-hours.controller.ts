import { Controller, Get, Post, Body } from '@nestjs/common';
import { SalonHoursService } from './salon-hours.service';
import { SalonHours } from './salon-hours.entity';
import { CreateSalonHoursDto } from './dto/create-salon-hours.dto';

@Controller('salon-hours')
export class SalonHoursController {
  constructor(private readonly salonHoursService: SalonHoursService) {}

  @Get()
  findAll(): Promise<SalonHours[]> {
    return this.salonHoursService.findAll();
  }

  @Post()
  create(@Body() data: CreateSalonHoursDto): Promise<SalonHours> {
    return this.salonHoursService.create(data);
  }
}
