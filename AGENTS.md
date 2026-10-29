# Instruções do projeto para a IA

Este arquivo é a **fonte única de verdade** dos padrões do projeto. Toda IA que gerar ou
alterar código aqui deve ler e seguir estas regras. As mesmas regras estão no README para
humanos. Parte delas é verificada automaticamente (lint, commitlint, CI): se a IA errar,
o commit ou o PR é bloqueado.

## Contexto

Portfólio pessoal de desenvolvimento front-end (projeto CP3 da FIAP). Visitantes veem
projetos carregados da API do GitHub, alternam tema claro/escuro e enviam mensagens de
contato. O dono faz login em um dashboard para ver mensagens e escolher projetos em destaque.

## Stack (não troque sem pedir)

React 19 + TypeScript + Vite, React Router, TanStack Query, Tailwind CSS,
React Hook Form + Zod, Supabase (auth e banco), EmailJS, React Three Fiber (cena 3D),
Vitest + Testing Library, ESLint + Prettier, Husky + lint-staged + commitlint, Vercel.

## Arquitetura

```
src/
  components/   Apresentação. Recebem props e renderizam. NÃO chamam API.
    ui/           Peças genéricas reutilizáveis (Button, Card, Skeleton, Input)
    layout/       Header, Footer, Container, ThemeToggle
    projects/     Componentes do domínio de projetos (ProjectCard, ProjectList)
    contact/      Componentes do formulário de contato
    dashboard/    Componentes do dashboard
    three/        Cena 3D (sempre carregada com React.lazy)
  pages/        Uma página por rota. Compõem componentes e hooks. Sem lógica pesada.
  routes/       Configuração do roteador e ProtectedRoute
  hooks/        Lógica reutilizável e acesso a dados (useProjects, useContactForm...)
  services/     Funções puras que falam com APIs externas (GitHub, Supabase, EmailJS)
  contexts/     Estado global pequeno (ThemeContext, AuthContext)
  schemas/      Schemas Zod de validação
  lib/          Utilitários e clientes configurados (supabase, queryClient, formatDate)
  types/        Tipos e interfaces compartilhados
  test/         Setup global dos testes
```

Regras de arquitetura:

1. **Lógica fora da apresentação.** Componente visual não faz `fetch`. O fluxo é:
   `service` (chamada à API) → `hook` (TanStack Query) → `page` → `component` (só props).
2. Componentes pequenos: um propósito por componente. Passou de ~120 linhas, divida.
3. Reutilize `components/ui` (mesmo botão e mesmo card em todas as páginas). Não duplique estilos.
4. Toda chamada de rede exibe **carregando, erro e lista vazia**.
5. Tudo que é pesado (dashboard, cena 3D) entra com `React.lazy` + `Suspense`.
6. Imports internos usam o alias `@/` (ex.: `import { Button } from '@/components/ui/Button'`).

## Nomenclatura

| O quê                | Padrão                              | Exemplo                        |
| -------------------- | ----------------------------------- | ------------------------------ |
| Componente (arquivo) | PascalCase.tsx, export nomeado      | `ProjectCard.tsx`              |
| Props                | `NomeDoComponenteProps` (interface) | `ProjectCardProps`             |
| Hook                 | camelCase começando com `use`       | `useProjects.ts`               |
| Service              | camelCase terminando em `Service`   | `githubService.ts`             |
| Schema Zod           | camelCase terminando em `Schema`    | `contactSchema.ts`             |
| Tipos                | PascalCase, sem prefixo `I`         | `Repository`, `ContactMessage` |
| Constantes           | UPPER_SNAKE_CASE                    | `GITHUB_API_URL`               |
| Pastas               | minúsculas                          | `components/projects`          |
| Testes               | ao lado do arquivo, `.test.ts(x)`   | `contactSchema.test.ts`        |

## Código

- TypeScript estrito. Proibido `any`; use `unknown` e estreite o tipo.
- Use `import type` para tipos.
- Sem `console.log` (permitido só `console.warn` e `console.error`).
- Sem segredos no código. Variáveis vêm de `import.meta.env.VITE_*` e estão em `.env.example`.
- Textos da interface em português do Brasil. Acessibilidade: `alt` em imagens, `label`
  em campos, botões com `type`, foco visível.
- Imagens: WebP, com `width` e `height` definidos (evita salto de layout) e `loading="lazy"`
  (exceto a imagem principal da home).
- Prefira simplicidade. Não adicione biblioteca nova sem justificar no PR.

## Commits (Conventional Commits, em português, no presente)

Formato: `tipo(escopo opcional): descrição curta em minúsculas`

Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`.

Exemplos:

- `feat: adiciona validação do formulário de contato`
- `fix(dashboard): corrige redirecionamento sem login`
- `test: cobre bloqueio do dashboard sem autenticação`

Um commit = uma mudança lógica. O hook `commit-msg` (commitlint) rejeita mensagens fora do padrão.

## Branches (GitHub Flow)

- `main` é sempre publicável e cada push nela faz deploy automático na Vercel.
- Nunca commitar direto na `main` depois da configuração inicial: use branch + Pull Request.
- Nome da branch: `feature/<nome>`, `fix/<nome>`, `chore/<nome>`, `docs/<nome>`, `test/<nome>`.
- Uma funcionalidade por branch. Integrar por Pull Request (merge commit, sem squash,
  para preservar o histórico de commits).

## Antes de dar uma tarefa como concluída

```bash
npm run lint && npm run typecheck && npm test && npm run build
```

Se algum falhar, corrija antes de entregar. Adicione ou atualize testes quando mudar
validação, rotas protegidas ou lógica de dados.

## Requisitos do projeto (resumo)

Rotas com 404 e erro de API, estados de carregamento, GitHub API, formulário validado
com e-mail e salvamento, dashboard protegido, tema persistido, UI responsiva e reutilizável,
Lighthouse mobile >= 80, testes (validação do form e bloqueio do dashboard), deploy
automático, commits e branches padronizados, arquitetura clara. Detalhes em `docs/checklist-requisitos.md`.
