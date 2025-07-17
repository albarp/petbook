import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salon } from './salon.entity';
import { SalonService } from './salon.service';
import { SalonController } from './salon.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Salon])],
  providers: [SalonService],
  controllers: [SalonController],
})
export class SalonModule {}
