# Portfólio — Andrey Luigi

Site de portfólio front-end com projetos carregados automaticamente do GitHub, formulário de
contato, dashboard protegido para o dono e tema claro/escuro. Projeto CP3 (Stack e Harness
Engineering) — FIAP.

- **Site publicado:** https://portifolio-kappa-three-47.vercel.app/
- **Vídeo de apresentação:** [COLAR LINK NÃO LISTADO DO YOUTUBE]

## Tecnologias

| Área          | Tecnologia                                       |
| ------------- | ------------------------------------------------ |
| Base          | React 19, TypeScript, Vite                       |
| Rotas         | React Router                                     |
| Dados e cache | TanStack Query (API do GitHub)                   |
| Estilo        | Tailwind CSS                                     |
| Formulário    | React Hook Form + Zod                            |
| Backend       | Supabase (login, mensagens, destaques)           |
| E-mail        | EmailJS                                          |
| 3D            | React Three Fiber (carregado sob demanda)        |
| Testes        | Vitest + Testing Library                         |
| Qualidade     | ESLint, Prettier, Husky, lint-staged, commitlint |
| CI/CD         | GitHub Actions (verificação) e Vercel (deploy)   |

As justificativas de cada escolha estão em [`docs/decisoes-da-stack.md`](docs/decisoes-da-stack.md).

## Como rodar

Pré-requisitos: Node.js 22+ e npm.

```bash
git clone [URL DO REPOSITÓRIO]
cd portfolio
npm install
cp .env.example .env   # preencha as variáveis
npm run dev
```

### Variáveis de ambiente

Veja `.env.example`. O arquivo `.env` nunca é versionado.

### Scripts

| Comando              | O que faz                                 |
| -------------------- | ----------------------------------------- |
| `npm run dev`        | Servidor de desenvolvimento               |
| `npm run build`      | Verifica tipos e gera a build de produção |
| `npm run preview`    | Serve a build localmente                  |
| `npm run lint`       | ESLint                                    |
| `npm run format`     | Formata com Prettier                      |
| `npm run typecheck`  | Verificação de tipos                      |
| `npm test`           | Executa os testes uma vez                 |
| `npm run test:watch` | Testes em modo observação                 |

## Arquitetura

```
src/
  components/   apresentação (ui, layout, projects, contact, dashboard, three)
  pages/        uma página por rota
  routes/       roteador e rota protegida
  hooks/        lógica e acesso a dados (TanStack Query)
  services/     chamadas a APIs externas (GitHub, Supabase, EmailJS)
  contexts/     estado global (tema, autenticação)
  schemas/      validação com Zod
  lib/          utilitários e clientes configurados
  types/        tipos compartilhados
```

Fluxo de dados: `service` (chamada à API) → `hook` (cache e estados) → `page` → `component` (apenas props).

## Padrões do projeto

Os mesmos padrões estão em [`AGENTS.md`](AGENTS.md), que a IA lê antes de gerar código.

### Nomenclatura

- Componentes e tipos: `PascalCase`; arquivos de componente: `PascalCase.tsx`
- Hooks: `camelCase` começando com `use` (`useProjects.ts`)
- Services: `camelCase` terminando em `Service` (`githubService.ts`)
- Constantes: `UPPER_SNAKE_CASE`; pastas em minúsculas; testes ao lado do arquivo (`.test.ts(x)`)

### Commits

[Conventional Commits](https://www.conventionalcommits.org/pt-br/), em português e no presente:

```
feat: adiciona validação do formulário de contato
fix(dashboard): corrige redirecionamento sem login
test: cobre bloqueio do dashboard sem autenticação
```

Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`.
O hook `commit-msg` (commitlint) bloqueia mensagens fora do padrão.

### Branches (GitHub Flow)

- `main`: sempre publicável; cada push gera deploy automático na Vercel
- `feature/<nome>`, `fix/<nome>`, `chore/<nome>`, `docs/<nome>`, `test/<nome>`
- Uma funcionalidade por branch, integrada por Pull Request

### Qualidade automática

- **Antes de cada commit** (Husky + lint-staged): ESLint e Prettier nos arquivos alterados
- **Mensagem do commit** (commitlint): valida o padrão
- **A cada push/PR** (GitHub Actions): lint, formatação, tipos, testes e build

## Harness de IA

Ver [`docs/harness-de-ia.md`](docs/harness-de-ia.md).

## Deploy

Publicado na Vercel com deploy automático a cada push na `main`. O arquivo `vercel.json`
redireciona todas as rotas para `index.html`, permitindo abrir ou atualizar qualquer link
direto (ex.: `/projetos/meu-app`).
