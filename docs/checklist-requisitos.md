# Checklist de requisitos (CP3)

Marque cada item só depois de **testar**. Itens em negrito são os que mais derrubam nota.

## 1. Rotas

- [ ] `/projetos/:nome` abre um projeto individual
- [ ] 404 amigável para rota inexistente
- [ ] Página amigável para falha ao carregar a API
- [ ] Atualizar o navegador em `/projetos/algo` na Vercel **não** dá 404 (`vercel.json`)

## 2. Estados de carregamento

- [ ] Skeleton nos cards enquanto carrega
- [ ] Estado de erro e de lista vazia
- [ ] **Botão de enviar bloqueado durante o envio** (sem mensagens duplicadas) + spinner

## 3. GitHub

- [ ] Projetos vêm da API do GitHub (sem cadastro manual)
- [ ] Card com descrição, linguagem e data da última atualização
- [ ] Tratamento do limite de requisições (mensagem clara quando bloquear)

## 4. Formulário de contato

- [ ] Mensagem de erro específica por campo (nome, e-mail inválido, mínimo 20 caracteres)
- [ ] E-mail enviado ao dono (EmailJS)
- [ ] Mensagem salva no Supabase e visível no dashboard
- [ ] Feedback de sucesso e de erro

## 5. Dashboard

- [ ] Login obrigatório; quem não está logado é redirecionado
- [ ] Lista de mensagens com "marcar como respondida"
- [ ] Seleção de projetos em destaque na home

## 6. Tema

- [ ] Claro/escuro persistido no `localStorage` e aplicado **antes** da renderização (sem piscar)

## 7. Interface

- [ ] Testado em celular e desktop
- [ ] Mesmo Button e mesmo Card em todas as páginas
- [ ] Identidade visual própria e elemento 3D interativo

## 8. Performance

- [ ] **Lighthouse mobile >= 80** (rodar na URL publicada, aba anônima)
- [ ] Imagens em WebP, com tamanho definido e `loading="lazy"`
- [ ] Dashboard e cena 3D com `React.lazy` (fora do bundle inicial)
- [ ] Sem salto de layout (CLS baixo)
- [ ] Sem requisições repetidas ao GitHub ao navegar (cache do TanStack Query; conferir na aba Network)

## 9. Testes

- [ ] Validação do formulário (schema Zod e mensagens)
- [ ] Bloqueio do dashboard sem login

## 10. Deploy

- [ ] URL pública
- [ ] Deploy automático a cada push na `main`

## 11. Versionamento

- [ ] Conventional Commits em todo o histórico
- [ ] Uma branch por funcionalidade, integrada por PR
- [ ] Padrões descritos no README e no `AGENTS.md`

## 12. Arquitetura e padronização

- [ ] Estrutura de pastas com responsabilidades claras
- [ ] Lógica separada da apresentação
- [ ] Convenções no README e no `AGENTS.md`
- [ ] Lint e formatação automáticos antes de cada commit

## Repositório

- [ ] Público, com commits distribuídos entre os dias
- [ ] `.env` fora do repositório e `.env.example` completo
- [ ] README com projeto, tecnologias e instruções

## Vídeo

- [ ] Até 8 minutos, rosto e tela visíveis o tempo todo, **não listado** no YouTube
- [ ] Três partes: stack e arquitetura, justificativas, harness de IA
- [ ] Arquivos do harness (`AGENTS.md` etc.) mostrados no repositório
