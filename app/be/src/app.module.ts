import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salon } from './modules/salon/salon.entity';
import { SalonModule } from './modules/salon/salon.module';
import { Client } from './modules/client/client.entity';
import { ClientModule } from './modules/client/client.module';
import { Pet } from './modules/pet/pet.entity';
import { PetModule } from './modules/pet/pet.module';
import { Service as ServiceEntity } from './modules/service/service.entity';
import { ServiceModule } from './modules/service/service.module';
import { Employee } from './modules/employee/employee.entity';
import { Room } from './modules/room/room.entity';
import { RoomModule } from './modules/room/room.module';
import { Equipment } from './modules/equipment/equipment.entity';
import { EquipmentModule } from './modules/equipment/equipment.module';
import { Appointment } from './modules/appointment/appointment.entity';
import { AppointmentModule } from './modules/appointment/appointment.module';
import { SalonHours } from './modules/salon-hours/salon-hours.entity';
import { SalonHoursModule } from './modules/salon-hours/salon-hours.module';
import { EmployeeAvailability } from './modules/employee-availability/employee-availability.entity';
import { EmployeeAvailabilityModule } from './modules/employee-availability/employee-availability.module';
import { EmployeeBreaks } from './modules/employee-breaks/employee-breaks.entity';
import { EmployeeBreaksModule } from './modules/employee-breaks/employee-breaks.module';
import { EmployeeHolidays } from './modules/employee-holidays/employee-holidays.entity';
import { EmployeeHolidaysModule } from './modules/employee-holidays/employee-holidays.module';
import { SalonHolidays } from './modules/salon-holidays/salon-holidays.entity';
import { SalonHolidaysModule } from './modules/salon-holidays/salon-holidays.module';
import { EmployeeService as EmployeeServiceEntity } from './modules/employee-service/employee-service.entity';
import { EmployeeServiceModule } from './modules/employee-service/employee-service.module';
import { AppointmentEquipment } from './modules/appointment-equipment/appointment-equipment.entity';
import { AppointmentEquipmentModule } from './modules/appointment-equipment/appointment-equipment.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'petsalon.sqlite',
      synchronize: true,
      entities: [
        Salon,
        Client,
        Pet,
        ServiceEntity,
        Employee,
        Room,
        Equipment,
        Appointment,
        SalonHours,
        EmployeeAvailability,
        EmployeeBreaks,
        EmployeeHolidays,
        SalonHolidays,
        EmployeeServiceEntity,
        AppointmentEquipment,
      ],
    }),
    EmployeeModule,
    SalonModule,
    ClientModule,
    PetModule,
    ServiceModule,
    RoomModule,
    EquipmentModule,
    AppointmentModule,
    SalonHoursModule,
    EmployeeAvailabilityModule,
    EmployeeBreaksModule,
    EmployeeHolidaysModule,
    SalonHolidaysModule,
    EmployeeServiceModule,
    AppointmentEquipmentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
