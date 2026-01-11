import { Injectable } from '@nestjs/common';

@Injectable()
export class CandidatesService {
  private candidates = [
    {
      id: 1,
      firstName: 'Anna',
      lastName: 'Ivanova',
      email: 'anna@example.com',
      phone: '+49123456789',
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '+12025550123',
    },
  ];

  findAll() {
    return this.candidates;
  }

  findOne(id: number) {
    return this.candidates.find((candidate) => candidate.id === id);
  }
}
