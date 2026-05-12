import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Post } from 'src/posts/entities/post.entity';
import { PostsModule } from 'src/posts/posts.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [AuthModule, TypeOrmModule.forFeature([User, Post]), PostsModule],
})
export class UsersModule {}
