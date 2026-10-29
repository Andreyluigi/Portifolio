# Prompts reutilizáveis

Modelos de prompt que uso para conduzir a IA com consistência. Sempre começo a conversa
colando o `AGENTS.md` (ou deixando a ferramenta lê-lo) e peço entregas pequenas e verificáveis.

## Nova funcionalidade

> Siga o AGENTS.md. Vou criar a funcionalidade **[nome]** na branch `feature/[nome]`.
> Requisito: [colar o requisito]. Entregue: (1) arquivos completos por camada
> (service, hook, componente, página); (2) testes quando aplicável; (3) as mensagens de
> commit sugeridas, uma por mudança lógica. Explique em 3 linhas as decisões que eu precisaria
> justificar numa entrevista.

## Novo componente

> Siga o AGENTS.md. Crie o componente **[Nome]** em `components/[pasta]`. Ele só recebe props
> (sem fetch), tem `NomeProps` tipado, reutiliza `components/ui` e funciona em tema claro e escuro
> e em tela de celular.

## Revisão antes do PR

> Revise este diff contra o AGENTS.md: arquitetura (lógica fora da apresentação), nomenclatura,
> estados de carregamento/erro/vazio, acessibilidade e impacto em performance. Liste problemas
> por prioridade, sem reescrever o que está certo.
