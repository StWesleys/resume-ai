import { Injectable } from '@nestjs/common';
import { CreateResumeDto } from './dto/create-resume.dto';

@Injectable()
export class ResumeService {
  async improveResume(data: CreateResumeDto){
    // MOCK de IA (temporário)
    const improved = {
      summary: `Profissional qualificado: ${data.summary}`,
      experience: `Experiência destacada: ${data.experience}`,
    };

    return {
      original: data,
      improved
    }
  }
}
