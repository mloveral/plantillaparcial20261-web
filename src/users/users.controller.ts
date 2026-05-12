/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { PostsService } from 'src/posts/posts.service';
import { ApiKeyGuard } from 'src/auth/api-key.guard';
import { CreatePostDto } from 'src/posts/dto/create-post.dto';

@UseGuards(ApiKeyGuard)
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly postsService: PostsService
  ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id/posts')
  findUserPosts(@Param('id', ParseIntPipe) id: number) {
    return this.postsService.findAll(id);
  }

  @Post(':id/posts')
  createPost(@Param('id', ParseIntPipe) id: number, @Body() dto: CreatePostDto) {
    return this.postsService.createPost(id, dto);
  }
}
