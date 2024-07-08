import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateAuthorDto, UpdateAuthorDto } from './author.dto';
import { AuthorService } from './author.service';

@Controller('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorService) {}

  @Get()
  async findAll() {
    return this.authorsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.authorsService.findOne(id);
  }

  @Post()
  async create(@Body() createAuthorDto: CreateAuthorDto) {
    return this.authorsService.create(createAuthorDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateAuthorDto: UpdateAuthorDto) {
    return this.authorsService.update(id, updateAuthorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.authorsService.remove(id);
  }

  @Get(':id/events')
  async findEventsByAuthorId(@Param('id') id: number) {
    return this.authorsService.findEventsByAuthorId(id);
  }
}
