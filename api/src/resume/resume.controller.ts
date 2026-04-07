import { Body, Controller, Post } from '@nestjs/common';
import { ResumeService } from './resume.service';
import { CreateResumeDto } from './dto/create-resume.dto';

@Controller('resume')
export class ResumeController {
  constructor(
    private readonly resumeService: ResumeService
  ){}

  @Post('improve')
  async improve(@Body() body: CreateResumeDto){
    return this.resumeService.improveResume(body);
  }
}
