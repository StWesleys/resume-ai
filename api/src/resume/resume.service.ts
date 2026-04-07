import { Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';
import { AiService } from 'src/ai/ai.service';

@Injectable()
export class ResumeService {
  constructor(
    private readonly aiService: AiService
  ){}

  async improveResume(data: CreateResumeDto){
    const [improvedSummary, improvedExperience] = await Promise.all([
      this.aiService.improveText(data.summary),
      this.aiService.improveText(data.experience),
    ]);

    return {
      original: data,
      improved: {
        summary: improvedSummary,
        experience: improvedExperience,
      }
    }
  }
}
