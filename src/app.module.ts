import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationsModule } from './applications/applications.module';
import { CandidatesModule } from './candidates/candidates.module';
import { FilesModule } from './files/files.module';
import { ReviewsModule } from './reviews/reviews.module';
import { InterviewsModule } from './interviews/interviews.module';


@Module({
  imports: [ApplicationsModule, CandidatesModule, FilesModule, ReviewsModule, InterviewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
