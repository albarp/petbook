import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentEquipment } from './appointment-equipment.entity';
import { Appointment } from '../appointment/appointment.entity';
import { Equipment } from '../equipment/equipment.entity';
import { AppointmentEquipmentService } from './appointment-equipment.service';
import { AppointmentEquipmentController } from './appointment-equipment.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([AppointmentEquipment, Appointment, Equipment]),
  ],
  providers: [AppointmentEquipmentService],
  controllers: [AppointmentEquipmentController],
})
export class AppointmentEquipmentModule {}
