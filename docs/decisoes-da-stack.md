# Decisões da stack

Para cada escolha: o que comparei, o critério e o que aceitei perder. Use esta tabela como
base da parte 2 do vídeo. **Edite com a sua experiência real**: a banca quer ouvir o seu critério.

| Decisão      | Opções comparadas                                     | Escolha                                 | Critério                                                                                                 | O que aceito perder                                                             |
| ------------ | ----------------------------------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Base         | Vite, Next.js, Create React App                       | **Vite**                                | Site de portfólio é uma SPA; build e dev server rápidos; deploy estático simples                         | Renderização no servidor (SSR) e SEO nativo do Next.js                          |
| Linguagem    | JavaScript, TypeScript                                | **TypeScript**                          | Tipar os contratos das APIs (GitHub, Supabase) evita erros e melhora o autocompletar                     | Curva de aprendizado e um pouco mais de código                                  |
| Rotas        | React Router, TanStack Router, wouter                 | **React Router**                        | Padrão de mercado, muita documentação, `lazy` por rota e `errorElement` para 404 e falhas                | Rotas tipadas de ponta a ponta do TanStack Router                               |
| Dados da API | `useEffect` + `useState`, SWR, TanStack Query         | **TanStack Query**                      | Cache, deduplicação e estados de loading/erro prontos; `staleTime` evita requisições repetidas ao GitHub | Uma dependência a mais no pacote                                                |
| Estilo       | CSS Modules, Tailwind, MUI/shadcn                     | **Tailwind CSS**                        | Rapidez, responsividade simples e só gera o CSS usado (bom para o Lighthouse)                            | Classes longas no JSX (mitigado com componentes reutilizáveis)                  |
| Formulário   | Validação manual, Formik + Yup, React Hook Form + Zod | **React Hook Form + Zod**               | Menos re-renderizações; o schema Zod é testável sem renderizar nada                                      | Mais conceitos para aprender                                                    |
| Backend      | Firebase, Supabase, Node próprio, PocketBase          | **Supabase**                            | Banco Postgres (já conheço SQL), autenticação pronta, regras de acesso por linha (RLS), plano gratuito   | Dependência de um serviço externo; projeto gratuito pode pausar por inatividade |
| E-mail       | EmailJS, Formspree, backend próprio                   | **EmailJS**                             | Envia sem servidor próprio e tem plano gratuito                                                          | Chave pública exposta no front e limite mensal de envios                        |
| 3D           | Three.js puro, React Three Fiber, Spline              | **React Three Fiber**                   | API declarativa em React; carrega sob demanda com `React.lazy`                                           | Peso do pacote 3D (isolado fora do bundle inicial)                              |
| Tema         | Context + localStorage, Zustand, biblioteca           | **Context + localStorage**              | Sem dependência nova; o estado é simples                                                                 | Não escalaria bem para estado global grande                                     |
| Testes       | Jest, Vitest, Playwright                              | **Vitest + Testing Library**            | Mesma configuração do Vite, rápido, testa o que o usuário vê                                             | Teste ponta a ponta em navegador real (Playwright)                              |
| Qualidade    | ESLint + Prettier, Biome                              | **ESLint + Prettier**                   | Ecossistema e plugin de hooks do React                                                                   | Velocidade do Biome                                                             |
| Git          | GitHub Flow, Git Flow, trunk-based                    | **GitHub Flow**                         | Projeto individual com deploy contínuo                                                                   | Sem branch de release (não é necessária aqui)                                   |
| Deploy       | Vercel, Netlify, hospedagem tradicional               | **Vercel**                              | Integração direta com GitHub, deploy a cada push, preview de PR, plano gratuito                          | Menos controle do servidor                                                      |
| Pastas       | Por tipo, por funcionalidade, atomic design           | **Por tipo, com subpastas por domínio** | Fácil de explicar e navegar para o tamanho do projeto                                                    | Em projetos muito grandes, por funcionalidade escalaria melhor                  |

## Critério para dividir componentes

1. **Responsabilidade única:** cada componente faz uma coisa.
2. **Apresentação x lógica:** componente recebe props; dados vêm de hooks e services.
3. **Reuso:** se aparece em duas páginas, vai para `components/ui` ou `components/layout`.
4. **Tamanho:** passou de ~120 linhas ou de uma responsabilidade, divide.
