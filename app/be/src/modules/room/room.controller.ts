import { Controller, Get, Post, Body } from '@nestjs/common';
import { RoomService } from './room.service';
import { Room } from './room.entity';
import { CreateRoomDto } from './dto/create-room.dto';

@Controller('room')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  findAll(): Promise<Room[]> {
    return this.roomService.findAll();
  }

  @Post()
  create(@Body() data: CreateRoomDto): Promise<Room> {
    return this.roomService.create(data);
  }
}
