# 🚀 Resume AI - Gerador de Currículos Inteligente

O **Resume AI** é uma aplicação fullstack desenvolvida para ajudar profissionais a criarem currículos otimizados utilizando Inteligência Artificial. O sistema permite o gerenciamento de dados profissionais e utiliza IA para sugerir melhorias no resumo e nas experiências.

## 🛠️ Tecnologias Utilizadas

- **Frontend:** Next.js 15 (App Router), Tailwind CSS, TypeScript.
- **Backend:** NestJS (Node.js framework).
- **Banco de Dados:** PostgreSQL via Supabase.
- **ORM:** Prisma.
- **IA:** Integração com APIs de modelos de linguagem (LLMs).

## 📂 Estrutura do Projeto

O projeto é organizado como um monorepo:
- `/api`: Servidor NestJS responsável pela lógica de negócio e integração com IA.
- `/web`: Interface web em Next.js para interação do usuário.

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js (v20 ou superior)
- pnpm, npm ou yarn
- Uma conta no Supabase (PostgreSQL)

### 1. Configuração do Banco (API)
Acesse a pasta da API:
```bash
cd api