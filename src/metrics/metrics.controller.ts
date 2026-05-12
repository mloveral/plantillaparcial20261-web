/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Query } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { EngagementQueryDto } from './dto/engagement-quey.dto';
import { CPMQueryDto } from './dto/cpm-query.dto';

@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Post('engagement')
  getEngagement(@Query() dto: EngagementQueryDto) {
    return this.metricsService.getEngagement(dto);
  }

  @Post('cpm')
  getCpm(@Query() dto: CPMQueryDto) {
    return this.metricsService.getCpm(dto);
  }
}
