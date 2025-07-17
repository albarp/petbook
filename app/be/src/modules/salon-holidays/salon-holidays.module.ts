import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalonHolidays } from './salon-holidays.entity';
import { Salon } from '../salon/salon.entity';
import { SalonHolidaysService } from './salon-holidays.service';
import { SalonHolidaysController } from './salon-holidays.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SalonHolidays, Salon])],
  providers: [SalonHolidaysService],
  controllers: [SalonHolidaysController],
})
export class SalonHolidaysModule {}
