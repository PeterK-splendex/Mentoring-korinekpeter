import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateEventDto, UpdateEventDto } from './event.dto';
import { EventService } from './event.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventService) {}

  @Get()
  async findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.eventsService.findOne(id);
  }

  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    return this.eventsService.create(createEventDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateEventDto: UpdateEventDto) {
    return this.eventsService.update(id, updateEventDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.eventsService.remove(id);
  }

  @Get(':id/authors')
  async findAuthorsByEventId(@Param('id') id: number) {
    return this.eventsService.findAuthorsByEventId(id);
  }
}
