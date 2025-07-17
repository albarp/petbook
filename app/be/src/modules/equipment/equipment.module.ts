import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Equipment } from './equipment.entity';
import { Salon } from '../salon/salon.entity';
import { Room } from '../room/room.entity';
import { EquipmentService } from './equipment.service';
import { EquipmentController } from './equipment.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Equipment, Salon, Room])],
  providers: [EquipmentService],
  controllers: [EquipmentController],
})
export class EquipmentModule {}
