import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salon } from './salon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Salon])],
  providers: [],
  controllers: [],
})
export class SalonModule {}
