# 🚀 Resume AI - Gerador de Currículos Inteligente

O **Resume AI** é uma aplicação fullstack desenvolvida para ajudar profissionais a criarem currículos otimizados utilizando Inteligência Artificial. O sistema permite o gerenciamento de dados profissionais e utiliza IA para sugerir melhorias no resumo e nas experiências.

## 🛠️ Tecnologias Utilizadas

- **Frontend Web:** Next.js 15 (App Router), Tailwind CSS, TypeScript.
- **Backend API:** NestJS (Node.js framework).
- **Banco de Dados:** PostgreSQL via Supabase.
- **ORM:** Prisma.
- **IA:** Integração com APIs de modelos de linguagem (LLMs).

## 📂 Estrutura do Projeto

O projeto é organizado como um monorepo:
- `/api`: Servidor NestJS responsável pela lógica de negócio e integração com IA (**Porta 3333**).
- `/web`: Interface **Frontend Web** em Next.js para interação do usuário (**Porta 3000**).

## 🚀 Como Rodar o Projeto

### Pré-requisitos
- Node.js (v20 ou superior)
- pnpm, npm ou yarn
- Uma conta no Supabase (PostgreSQL)

### 1️⃣ Backend (API)
```bash
cd api
npx prisma db push
npm run start:dev

### 2️⃣ Frontend Web
```bash
cd web
npm run dev