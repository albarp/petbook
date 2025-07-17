import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from './room.entity';
import { CreateRoomDto } from './dto/create-room.dto';
import { Salon } from '../salon/salon.entity';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
    @InjectRepository(Salon)
    private readonly salonRepository: Repository<Salon>,
  ) {}

  findAll(): Promise<Room[]> {
    return this.roomRepository.find({ relations: ['salon'] });
  }

  async create(dto: CreateRoomDto): Promise<Room> {
    const salon = await this.salonRepository.findOneByOrFail({
      id: dto.salonId,
    });
    const room = this.roomRepository.create({
      name: dto.name,
      capacity: dto.capacity ?? null,
      salon,
    });
    return this.roomRepository.save(room);
  }
}
