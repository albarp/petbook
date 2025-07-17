import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from './client.entity';
import { CreateClientDto } from './dto/create-client.dto';
import { Salon } from '../salon/salon.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    @InjectRepository(Salon)
    private readonly salonRepository: Repository<Salon>,
  ) {}

  findAll(): Promise<Client[]> {
    return this.clientRepository.find({ relations: ['salon'] });
  }

  async create(dto: CreateClientDto): Promise<Client> {
    const salon = await this.salonRepository.findOneByOrFail({
      id: dto.salonId,
    });
    const client = this.clientRepository.create({
      name: dto.name,
      address: dto.address ?? null,
      email: dto.email ?? null,
      phone: dto.phone ?? null,
      salon,
    });
    return this.clientRepository.save(client);
  }
}
