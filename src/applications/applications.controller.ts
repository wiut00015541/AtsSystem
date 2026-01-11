import { Controller, Get, Param } from '@nestjs/common';
import { ApplicationsService } from './applications.service';

@Controller('applications')
export class ApplicationsController {
  constructor(
    private readonly applicationsService: ApplicationsService,
  ) {}

  @Get()
  getAllApplications() {
    return this.applicationsService.findAll();
  }

  @Get('job/:jobId')
  getApplicationsByJob(@Param('jobId') jobId: string) {
    return this.applicationsService.findByJob(Number(jobId));
  }
}
