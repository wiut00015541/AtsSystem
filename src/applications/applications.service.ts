import { Injectable } from '@nestjs/common';

@Injectable()
export class ApplicationsService {
  private applications = [
    {
      id: 1,
      candidateId: 1,
      jobId: 1,
      stage: 'applied',
      status: 'active',
    },
    {
      id: 2,
      candidateId: 2,
      jobId: 2,
      stage: 'interview',
      status: 'active',
    },
  ];

  findAll() {
    return this.applications;
  }

  findByJob(jobId: number) {
    return this.applications.filter(
      (application) => application.jobId === jobId,
    );
  }
}
