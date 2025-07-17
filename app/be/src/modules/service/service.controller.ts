import { Controller, Get, Post, Body } from '@nestjs/common';
import { ServiceService } from './service.service';
import { Service } from './service.entity';
import { CreateServiceDto } from './dto/create-service.dto';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  @Get()
  findAll(): Promise<Service[]> {
    return this.serviceService.findAll();
  }

  @Post()
  create(@Body() data: CreateServiceDto): Promise<Service> {
    return this.serviceService.create(data);
  }
}
