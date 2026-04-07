import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResumeModule } from './resume/resume.module';
import { AiModule } from './ai/ai.module';

@Module({
  imports: [ResumeModule, AiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
