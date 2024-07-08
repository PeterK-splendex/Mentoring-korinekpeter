import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { UpdateUserDto, CreateUserDto } from './user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  async findAll(
    @Query('sortBy') sortBy?: string,
    @Query('sortOrder') sortOrder: 'ASC' | 'DESC' = 'ASC',
    @Query('role') role?: string,
  ) {
    return this.usersService.findAll(sortBy, sortOrder, role);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
