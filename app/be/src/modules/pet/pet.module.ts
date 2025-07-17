import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pet } from './pet.entity';
import { Client } from '../client/client.entity';
import { PetService } from './pet.service';
import { PetController } from './pet.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Pet, Client])],
  providers: [PetService],
  controllers: [PetController],
})
export class PetModule {}
