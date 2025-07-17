import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pet } from './pet.entity';
import { CreatePetDto } from './dto/create-pet.dto';
import { Client } from '../client/client.entity';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet)
    private readonly petRepository: Repository<Pet>,
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}

  findAll(): Promise<Pet[]> {
    return this.petRepository.find({ relations: ['client'] });
  }

  async create(dto: CreatePetDto): Promise<Pet> {
    const client = await this.clientRepository.findOneByOrFail({
      id: dto.clientId,
    });
    const pet = this.petRepository.create({
      name: dto.name,
      breed: dto.breed ?? null,
      age: dto.age ?? null,
      notes: dto.notes ?? null,
      client,
    });
    return this.petRepository.save(pet);
  }
}
