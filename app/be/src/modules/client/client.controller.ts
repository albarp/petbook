import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClientService } from './client.service';
import { Client } from './client.entity';
import { CreateClientDto } from './dto/create-client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  findAll(): Promise<Client[]> {
    return this.clientService.findAll();
  }

  @Post()
  create(@Body() data: CreateClientDto): Promise<Client> {
    return this.clientService.create(data);
  }
}
