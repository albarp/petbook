import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Appointment } from './appointment.entity';
import { Salon } from '../salon/salon.entity';
import { Pet } from '../pet/pet.entity';
import { Service } from '../service/service.entity';
import { Employee } from '../employee/employee.entity';
import { Room } from '../room/room.entity';
import { AppointmentService } from './appointment.service';
import { AppointmentController } from './appointment.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Appointment,
      Salon,
      Pet,
      Service,
      Employee,
      Room,
    ]),
  ],
  providers: [AppointmentService],
  controllers: [AppointmentController],
})
export class AppointmentModule {}
