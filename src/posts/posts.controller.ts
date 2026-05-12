/* eslint-disable prettier/prettier */
import { Body, Controller,Param,ParseIntPipe,Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post(':id/comments')
  createComment(@Param('id', ParseIntPipe)postId: number, @Body() dto: CreateCommentDto) {
    return this.postsService.createComment(postId, dto);
  }
}
