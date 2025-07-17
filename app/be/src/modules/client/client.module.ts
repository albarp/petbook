import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from './client.entity';
import { ClientService } from './client.service';
import { ClientController } from './client.controller';
import { Salon } from '../salon/salon.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Client, Salon])],
  providers: [ClientService],
  controllers: [ClientController],
})
export class ClientModule {}
