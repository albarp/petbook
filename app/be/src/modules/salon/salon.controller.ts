import { Controller, Get, Post, Body } from '@nestjs/common';
import { SalonService } from './salon.service';
import { Salon } from './salon.entity';
import { CreateSalonDto } from './dto/create-salon.dto';

@Controller('salon')
export class SalonController {
  constructor(private readonly salonService: SalonService) {}

  @Get()
  findAll(): Promise<Salon[]> {
    return this.salonService.findAll();
  }

  @Post()
  create(@Body() data: CreateSalonDto): Promise<Salon> {
    return this.salonService.create(data);
  }
}
