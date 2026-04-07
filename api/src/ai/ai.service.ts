import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AiService {
  private readonly apiUrl = 'https://openrouter.ai/api/v1/chat/completions';

  async improveText(text: string): Promise<string> {

    const prompt = `
    Você é um redator de currículos técnico e rigoroso.
    
    TAREFA:
    Melhore o texto profissional abaixo, tornando-o mais elegante e impactante.
    
    REGRAS DE OURO (NÃO DESCUMPRA):
    1. PROIBIDO: Não adicione NENHUMA tecnologia, linguagem ou ferramenta que não esteja no texto original (ex: não adicione Python, Java ou SQL se não estiverem lá).
    2. PROIBIDO: Não invente responsabilidades que o usuário não mencionou.
    3. FOCO: Apenas melhore a escrita, gramática e o tom profissional do que foi enviado.
    4. SAÍDA: Retorne APENAS o texto final. Sem explicações, sem "Aqui está", sem introduções.
    5. Se o texto for curto, mantenha-o curto, mas com palavras mais profissionais.

    TEXTO ORIGINAL:
    "${text}"

    RESPOSTA (RETORNE APENAS O TEXTO):
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
