/* eslint-disable prettier/prettier */
import { Body, Controller,Param,ParseIntPipe,Post, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { ApiKeyGuard } from 'src/auth/api-key.guard';

@Controller('posts')
@UseGuards(ApiKeyGuard)
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post(':id/comments')
  createComment(@Param('id', ParseIntPipe)postId: number, @Body() dto: CreateCommentDto) {
    return this.postsService.createComment(postId, dto);
  }
}
