import { Injectable } from '@nestjs/common';
import axios from 'axios';
import 'dotenv/config';

@Injectable()
export class AiService {
  private readonly apiUrl = 'https://openrouter.ai/api/v1/chat/completions';

  async improveText(text: string): Promise<string> {
    const prompt = `
    Você é um especialista em recrutamento e escrita profissional.

    Melhore o texto abaixo sem inventar informações.

    Texto:
    "${text}"
    `;

    const response = await axios.post(
      this.apiUrl, {
        model: 'openrouter/free',
        messages: [{
          role: 'user',
          content: prompt
        }]
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": 'application/json',
          'HTTP-Referer': 'http://localhost:3333',
          'X-Title': 'Resume AI'                  
        }
      }
    )

    console.log('IA RESPONSE:', JSON.stringify(response.data, null, 2));
    return response.data?.choices?.[0]?.message?.content || '';
  }
}
