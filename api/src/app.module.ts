import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ResumeModule } from './resume/resume.module';
import { AiModule } from './ai/ai.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ResumeModule, AiModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
