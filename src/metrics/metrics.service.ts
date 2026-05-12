/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { EngagementQueryDto } from './dto/engagement-quey.dto';
import { CPMQueryDto } from './dto/cpm-query.dto';

@Injectable()
export class MetricsService {
  getEngagement(dto: EngagementQueryDto){
    const { likes, comments, followers } = dto;
    const rate = ((likes + comments) / followers) * 100;
    return { rate };
  }

  getCpm(dto: CPMQueryDto){
    const { cost, impressions } = dto;
    const cpm = (cost / impressions) * 1000;
    return { cpm };
  }
}
