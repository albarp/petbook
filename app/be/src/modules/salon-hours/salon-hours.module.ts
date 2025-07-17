import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalonHours } from './salon-hours.entity';
import { Salon } from '../salon/salon.entity';
import { SalonHoursService } from './salon-hours.service';
import { SalonHoursController } from './salon-hours.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SalonHours, Salon])],
  providers: [SalonHoursService],
  controllers: [SalonHoursController],
})
export class SalonHoursModule {}
