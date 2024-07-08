// src/reactions/reaction.controller.ts
import { Controller, Put, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ReactionService } from './reaction.service';

@Controller('reactions')
export class ReactionController {
  constructor(private readonly reactionService: ReactionService) {}

  @Put(':userId/like/:eventId')
  async like(
    @Param('eventId', ParseIntPipe) eventId: number,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.reactionService.like(userId, eventId);
  }

  @Put(':userId/dislike/:eventId')
  async dislike(
    @Param('eventId', ParseIntPipe) eventId: number,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.reactionService.dislike(userId, eventId);
  }

  @Get(':eventId/likes')
  async countLikes(@Param('eventId', ParseIntPipe) eventId: number) {
    return this.reactionService.countLikes(eventId);
  }

  @Get(':eventId/dislikes')
  async countDislikes(@Param('eventId', ParseIntPipe) eventId: number) {
    return this.reactionService.countDislikes(eventId);
  }

  @Get(':userId/status/:eventId')
  async getReactionStatus(
    @Param('eventId', ParseIntPipe) eventId: number,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.reactionService.getReactionStatus(userId, eventId);
  }
}
