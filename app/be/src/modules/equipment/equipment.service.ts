import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipment } from './equipment.entity';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { Salon } from '../salon/salon.entity';
import { Room } from '../room/room.entity';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectRepository(Equipment)
    private readonly equipmentRepository: Repository<Equipment>,
    @InjectRepository(Salon)
    private readonly salonRepository: Repository<Salon>,
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
  ) {}

  findAll(): Promise<Equipment[]> {
    return this.equipmentRepository.find({ relations: ['salon', 'room'] });
  }

  async create(dto: CreateEquipmentDto): Promise<Equipment> {
    const salon = await this.salonRepository.findOneByOrFail({
      id: dto.salonId,
    });
    let room: Room | null = null;
    if (dto.roomId) {
      room = await this.roomRepository.findOneByOrFail({ id: dto.roomId });
    }
    const equipment = this.equipmentRepository.create({
      name: dto.name,
      salon,
      room,
    });
    return this.equipmentRepository.save(equipment);
  }
}
