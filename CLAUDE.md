@instrucoes/projeto-guide.md

# Regras de Desenvolvimento — E-CRANE Totem

## Sempre Fazer Primeiro
**Invocar a skill `frontend-design`** antes de escrever qualquer código frontend, toda sessão, sem exceções.

## Fonte de textos
Todos os textos vêm de `copy.md`. **Nunca usar Lorem ipsum.**

## Totem — Regras críticas de interface
- `cursor: none` no body — jamais exibir cursor
- Nenhum estado `hover` — apenas `:active`
- Timeout de 90s de inatividade → retornar para `index.html` (Boas-Vindas)
- Transições entre telas < 300ms
- Botões: `min-height: 72px`
- Texto mínimo: `16px`

## Servidor Local
- Sempre servir em localhost — nunca tirar screenshot de `file:///`
- Iniciar: `npx serve . -p 3000`
- URL de preview: `http://localhost:3000`

## Fluxo de Screenshot
1. Tirar screenshot via `http://localhost:3000`
2. Comparar pixel a pixel com o screenshot de referência em `screenshots/`
3. Descrever diferenças específicas (tamanho, cor hex, espaçamento em px)
4. Corrigir e tirar novo screenshot
5. Mínimo 2 rodadas antes de declarar a tela pronta

## Stack
- **HTML + CSS + JS vanilla** (sem frameworks)
- **Tailwind CSS** via CDN (utilitários de layout e spacing)
- Fonte **Inter** via Google Fonts
- Ícones: SVGs da pasta `assets/icons/` — não usar bibliotecas externas
- Imagens: `assets/images/` e `assets/logos/`

## Guardrails Anti-Genérico
- Cores: exclusivamente os tokens de `instrucoes/projeto-guide.md`
- Sombras: nunca flat — usar sombra em camadas com baixa opacidade
- Animações: apenas `transform` e `opacity` — nunca `transition-all`
- Touch target: nunca menor que `64px` (ideal `72–80px`)
- Todo botão/card clicável: estado `:active` obrigatório
- Espaçamento: usar tokens `--space-*` definidos no guide

## Regras Absolutas
- Não adicionar seções que não existam no Figma/screenshots
- Não "melhorar" o design — reproduzir com fidelidade
- Não inventar cores fora dos tokens
- Não usar `transition-all`
- Não usar `localStorage` ou `sessionStorage`
- HTML, CSS e JS sempre em arquivos separados
- Não parar após um único screenshot — sempre comparar e iterar

## Fluxo de Desenvolvimento por Página
1. Invocar a skill `frontend-design`
2. Abrir screenshot da tela em `screenshots/`
3. **Apresentar plano de ação** com lista de seções, ordem e componentes — aguardar aprovação
4. Após aprovação: codificar (começar sempre por `style-guide.html`)
5. Servir, screenshot, comparar, corrigir — mínimo 2 rodadas
6. Avançar para a próxima página
