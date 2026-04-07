import { IsEmail, IsNotEmpty } from "class-validator";

export class CreateResumeDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  summary: string;

  @IsNotEmpty()
  experience: string;

  @IsNotEmpty()
  education: string;

  @IsNotEmpty()
  skills: string;
}