import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SalonHours } from './salon-hours.entity';
import { CreateSalonHoursDto } from './dto/create-salon-hours.dto';
import { Salon } from '../salon/salon.entity';

@Injectable()
export class SalonHoursService {
  constructor(
    @InjectRepository(SalonHours)
    private readonly salonHoursRepository: Repository<SalonHours>,
    @InjectRepository(Salon)
    private readonly salonRepository: Repository<Salon>,
  ) {}

  findAll(): Promise<SalonHours[]> {
    return this.salonHoursRepository.find({ relations: ['salon'] });
  }

  async create(dto: CreateSalonHoursDto): Promise<SalonHours> {
    const salon = await this.salonRepository.findOneByOrFail({
      id: dto.salonId,
    });
    const salonHours = this.salonHoursRepository.create({
      day_of_week: dto.day_of_week,
      open_time: dto.open_time,
      close_time: dto.close_time,
      salon,
    });
    return this.salonHoursRepository.save(salonHours);
  }
}
