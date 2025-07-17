import { Controller, Get, Post, Body } from '@nestjs/common';
import { SalonHolidaysService } from './salon-holidays.service';
import { SalonHolidays } from './salon-holidays.entity';
import { CreateSalonHolidaysDto } from './dto/create-salon-holidays.dto';

@Controller('salon-holidays')
export class SalonHolidaysController {
  constructor(private readonly salonHolidaysService: SalonHolidaysService) {}

  @Get()
  findAll(): Promise<SalonHolidays[]> {
    return this.salonHolidaysService.findAll();
  }

  @Post()
  create(@Body() data: CreateSalonHolidaysDto): Promise<SalonHolidays> {
    return this.salonHolidaysService.create(data);
  }
}
