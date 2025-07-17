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

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'petsalon.sqlite',
      synchronize: true,
      entities: [Salon, Client, Pet],
    }),
    EmployeeModule,
    SalonModule,
    ClientModule,
    PetModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
