import { Controller, Get, Post, Body } from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { Equipment } from './equipment.entity';
import { CreateEquipmentDto } from './dto/create-equipment.dto';

@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Get()
  findAll(): Promise<Equipment[]> {
    return this.equipmentService.findAll();
  }

  @Post()
  create(@Body() data: CreateEquipmentDto): Promise<Equipment> {
    return this.equipmentService.create(data);
  }
}
