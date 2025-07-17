import { Controller, Get, Post, Body } from '@nestjs/common';
import { PetService } from './pet.service';
import { Pet } from './pet.entity';
import { CreatePetDto } from './dto/create-pet.dto';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get()
  findAll(): Promise<Pet[]> {
    return this.petService.findAll();
  }

  @Post()
  create(@Body() data: CreatePetDto): Promise<Pet> {
    return this.petService.create(data);
  }
}
