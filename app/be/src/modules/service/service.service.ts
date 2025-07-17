import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Service } from './service.entity';
import { CreateServiceDto } from './dto/create-service.dto';
import { Salon } from '../salon/salon.entity';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
    @InjectRepository(Salon)
    private readonly salonRepository: Repository<Salon>,
  ) {}

  findAll(): Promise<Service[]> {
    return this.serviceRepository.find({ relations: ['salon'] });
  }

  async create(dto: CreateServiceDto): Promise<Service> {
    const salon = await this.salonRepository.findOneByOrFail({
      id: dto.salonId,
    });
    const service = this.serviceRepository.create({
      name: dto.name,
      description: dto.description ?? null,
      price: dto.price,
      duration_minutes: dto.duration_minutes,
      salon,
    });
    return this.serviceRepository.save(service);
  }
}
