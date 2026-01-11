import { Controller, Get, Param } from '@nestjs/common';
import { CandidatesService } from './candidates.service';

@Controller('candidates')
export class CandidatesController {
  constructor(
    private readonly candidatesService: CandidatesService,
  ) {}

  @Get()
  getAllCandidates() {
    return this.candidatesService.findAll();
  }

  @Get(':id')
  getCandidateById(@Param('id') id: string) {
    return this.candidatesService.findOne(Number(id));
  }
}
