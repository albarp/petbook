import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SalonHolidays } from './salon-holidays.entity';
import { CreateSalonHolidaysDto } from './dto/create-salon-holidays.dto';
import { Salon } from '../salon/salon.entity';

@Injectable()
export class SalonHolidaysService {
  constructor(
    @InjectRepository(SalonHolidays)
    private readonly salonHolidaysRepository: Repository<SalonHolidays>,
    @InjectRepository(Salon)
    private readonly salonRepository: Repository<Salon>,
  ) {}

  findAll(): Promise<SalonHolidays[]> {
    return this.salonHolidaysRepository.find({ relations: ['salon'] });
  }

  async create(dto: CreateSalonHolidaysDto): Promise<SalonHolidays> {
    const salon = await this.salonRepository.findOneByOrFail({
      id: dto.salonId,
    });
    const holidays = this.salonHolidaysRepository.create({
      start_date: dto.start_date,
      end_date: dto.end_date,
      description: dto.description ?? null,
      salon,
    });
    return this.salonHolidaysRepository.save(holidays);
  }
}
