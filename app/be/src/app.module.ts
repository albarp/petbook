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

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'petsalon.sqlite',
      synchronize: true,
      entities: [Salon, Client, Pet, ServiceEntity, Employee, Room, Equipment],
    }),
    EmployeeModule,
    SalonModule,
    ClientModule,
    PetModule,
    ServiceModule,
    RoomModule,
    EquipmentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
