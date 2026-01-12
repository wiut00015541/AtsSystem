import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationsModule } from './applications/applications.module';
import { CandidatesModule } from './candidates/candidates.module';
import { FilesModule } from './files/files.module';


@Module({
  imports: [ApplicationsModule, CandidatesModule, FilesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
