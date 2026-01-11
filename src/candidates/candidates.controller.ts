import { Controller, Get, Param } from '@nestjs/common';
import { CandidatesService } from './candidates.service';
import { ApplicationsService } from '../applications/applications.service';


@Controller('candidates')
export class CandidatesController {
constructor(
  private readonly candidatesService: CandidatesService,
  private readonly applicationsService: ApplicationsService,
) {}

  @Get()
  getAllCandidates() {
    return this.candidatesService.findAll();
  }

  @Get(':id')
  getCandidateById(@Param('id') id: string) {
    return this.candidatesService.findOne(Number(id));
  }

  @Get(':id/applications')
getCandidateApplications(@Param('id') id: string) {
  return this.applicationsService.findByCandidate(Number(id));
}

}
