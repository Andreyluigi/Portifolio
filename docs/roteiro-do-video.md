# Roteiro do vídeo (até 8 minutos)

Você é o candidato e a banca é o entrevistador. Fale em primeira pessoa, mostre a tela e
mantenha o rosto visível o tempo todo (OBS Studio ou gravação do Teams/Meet com câmera ligada).

| Tempo     | Parte                      | O que mostrar e dizer                                                                                                                                                                                                            |
| --------- | -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0:00–0:30 | Abertura                   | Quem é você, o que é o portfólio, o site publicado rodando                                                                                                                                                                       |
| 0:30–3:00 | **1. Stack e arquitetura** | Diagrama das pastas e do fluxo `service → hook → page → component`; critério para dividir componentes; caminho de uma alteração: branch `feature/...` → commits (hook bloqueando) → PR → CI → merge na `main` → deploy na Vercel |
| 3:00–5:00 | **2. Justificativas**      | Para 5–6 escolhas principais da tabela de `docs/decisoes-da-stack.md`: opções comparadas, critério, o que aceitou perder                                                                                                         |
| 5:00–7:30 | **3. Harness de IA**       | Ferramenta e modelo e por quê; abrir `AGENTS.md`, `CLAUDE.md`, `docs/prompts.md` no repositório; mostrar um commit bloqueado pelo commitlint e o CI do GitHub; contar um erro real da IA que você corrigiu                       |
| 7:30–8:00 | Fechamento                 | O que aprendeu e o que faria diferente                                                                                                                                                                                           |

## Dicas

- Ensaie uma vez cronometrando: passar de 8 minutos é pontuar menos.
- Prepare as abas antes: site, repositório, `AGENTS.md`, diagrama, GitHub Actions, Vercel.
- Não leia slides: explique com as suas palavras. Você precisa saber explicar tudo do código.
- Suba como **Não listado** e teste o link em aba anônima.
