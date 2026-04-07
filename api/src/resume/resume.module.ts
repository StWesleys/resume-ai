import { Module } from '@nestjs/common';
import { ResumeController } from './resume.controller';
import { ResumeService } from './resume.service';
import { AiModule } from 'src/ai/ai.module';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [AiModule, PrismaModule],
  controllers: [ResumeController],
  providers: [ResumeService]
})
export class ResumeModule {}
