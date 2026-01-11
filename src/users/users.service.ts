import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users = [
    {
      id: 1,
      name: 'Admin User',
      role: 'admin',
    },
    {
      id: 2,
      name: 'Recruiter User',
      role: 'recruiter',
    },
  ];

  findAll() {
    return this.users;
  }
}
