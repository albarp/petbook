import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Service } from './service.entity';
import { Salon } from '../salon/salon.entity';
import { ServiceService } from './service.service';
import { ServiceController } from './service.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Service, Salon])],
  providers: [ServiceService],
  controllers: [ServiceController],
})
export class ServiceModule {}
