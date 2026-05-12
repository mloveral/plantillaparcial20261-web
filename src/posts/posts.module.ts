import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { AuthModule } from 'src/auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { Comment } from './entities/comment.entity';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [AuthModule, TypeOrmModule.forFeature([Post, Comment])],
  exports: [PostsService],
})
export class PostsModule {}
