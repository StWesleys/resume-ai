import { Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { AiService } from 'src/ai/ai.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ResumeService {
  constructor(
    private readonly aiService: AiService,
    private readonly prisma: PrismaService
  ){}

  async improveResume(data: CreateResumeDto){
    const [improvedSummary, improvedExperience] = await Promise.all([
      this.aiService.improveText(data.summary),
      this.aiService.improveText(data.experience),
    ]);

    const saved = await this.prisma.resume.create({
      data: {
        name: data.name,
        email: data.email,
        summary: data.summary,
        experience: data.experience,
        education: data.education,
        skills: data.skills,
        improvedSummary,
        improvedExperience
      }
    })

    return {
      id: saved.id,
      original: data,
      improved: {
        summary: improvedSummary,
        experience: improvedExperience
      },
      formatted: {
        name: data.name,
        email: data.email,
        summary: improvedSummary,
        experience: improvedExperience,
        education: data.education,
        skills: data.skills.split(',').map(s => s.trim())
      }
    }
  }
}
