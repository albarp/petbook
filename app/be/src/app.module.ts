import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { EmployeeModule } from './modules/employee/employee.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Salon } from './modules/salon/salon.entity';
import { SalonModule } from './modules/salon/salon.module';
import { Client } from './modules/client/client.entity';
import { ClientModule } from './modules/client/client.module';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'petsalon.sqlite',
      synchronize: true,
      entities: [Salon, Client],
    }),
    EmployeeModule,
    SalonModule,
    ClientModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
