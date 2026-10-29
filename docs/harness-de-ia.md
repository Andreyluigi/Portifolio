# Harness de IA

Harness é o conjunto que **guia e limita** a IA para que ela produza código no padrão do
projeto. Preencha as partes entre colchetes com o que você realmente usou.

## Ferramenta e modelo

- **Ferramenta:** [ex.: Claude (chat, plano gratuito) como planejador e gerador de código]
- **Modelo:** [ex.: Claude Sonnet]
- **Por quê:** [critério: custo zero, qualidade de código, janela de contexto, ...]
- **O que aceitei perder:** [ex.: a IA não executa comandos nem lê o repositório sozinha; eu rodo e trago os erros]

## Instruções do projeto (versionadas)

| Arquivo                           | Função                                                                              |
| --------------------------------- | ----------------------------------------------------------------------------------- |
| `AGENTS.md`                       | Fonte única de verdade: arquitetura, nomenclatura, commits, branches e verificações |
| `CLAUDE.md`                       | Aponta para o `AGENTS.md` (ferramentas da Anthropic leem este arquivo)              |
| `.github/copilot-instructions.md` | Aponta para o `AGENTS.md` (GitHub Copilot lê este arquivo)                          |
| `docs/prompts.md`                 | Modelos de prompt reutilizáveis (nova funcionalidade, componente, revisão)          |

Por que um arquivo só e dois apontadores: cada ferramenta lê um nome diferente, mas as regras
ficam em um lugar só e não divergem.

## Skills, conectores/MCPs e agentes

[Descreva o que usou. Se não usou, diga por quê. Exemplo de resposta honesta:
"Não configurei MCPs nem agentes porque trabalhei no plano gratuito, sem acesso ao repositório.
Em troca, usei prompts reutilizáveis em `docs/prompts.md`, que cumprem o papel de skills simples."]

## Como o conjunto força os padrões

Instruções **pedem**; automação **obriga**. O harness usa as duas camadas:

| Padrão          | Instrução (a IA lê)                | Verificação automática (obriga)              |
| --------------- | ---------------------------------- | -------------------------------------------- |
| Arquitetura     | Seção "Arquitetura" do `AGENTS.md` | Revisão no PR (checklist do template)        |
| Código          | Regras de código do `AGENTS.md`    | ESLint + Prettier via Husky/lint-staged e CI |
| Commits         | Seção "Commits" do `AGENTS.md`     | commitlint no hook `commit-msg`              |
| Branches        | Seção "Branches" do `AGENTS.md`    | Proteção da `main` e Pull Requests           |
| Qualidade geral | "Antes de concluir" do `AGENTS.md` | GitHub Actions (lint, tipos, testes, build)  |

Se a IA gerar algo fora do padrão, o hook ou o CI rejeita: o padrão não depende só de a IA
"lembrar" da instrução.

## Como conduzi a IA

[Conte 2 ou 3 exemplos reais: um prompt que funcionou, um erro da IA que você corrigiu,
uma decisão em que você discordou dela.]
