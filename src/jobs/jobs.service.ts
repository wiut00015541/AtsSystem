import { Injectable } from '@nestjs/common';

@Injectable()
export class JobsService {
  private jobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      status: 'open',
    },
    {
      id: 2,
      title: 'Backend Developer',
      department: 'Engineering',
      location: 'Berlin',
      status: 'draft',
    },
  ];

  findAll() {
    return this.jobs;
  }
}
