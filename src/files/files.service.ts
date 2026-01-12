import { Injectable } from '@nestjs/common';

type CandidateFile = {
  id: number;
  candidateId: number;
  originalName: string;
  filename: string;
};

@Injectable()
export class FilesService {
  private files: CandidateFile[] = [];

  saveFile(file: any, candidateId: number) {
    const fileRecord = {
      id: this.files.length + 1,
      candidateId,
      originalName: file.originalname,
      filename: file.filename,
    };

    this.files.push(fileRecord);
    return fileRecord;
  }

  findByCandidate(candidateId: number) {
    return this.files.filter(
      (file) => file.candidateId === candidateId,
    );
  }
}
