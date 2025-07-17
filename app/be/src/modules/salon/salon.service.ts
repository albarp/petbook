import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Salon } from './salon.entity';
import { CreateSalonDto } from './dto/create-salon.dto';

function createSalonFromDto(dto: CreateSalonDto): Partial<Salon> {
  return {
    name: dto.name,
    address: dto.address ?? null,
    phone: dto.phone ?? null,
  };
}

@Injectable()
export class SalonService {
  constructor(
    @InjectRepository(Salon)
    private readonly salonRepository: Repository<Salon>,
  ) {}

  findAll(): Promise<Salon[]> {
    return this.salonRepository.find();
  }

  create(data: CreateSalonDto): Promise<Salon> {
    const salon = this.salonRepository.create(createSalonFromDto(data));
    return this.salonRepository.save(salon);
  }
}
