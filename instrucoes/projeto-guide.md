# E-CRANE — Totem de Autoatendimento

## Sobre o projeto
Totem interativo de autoatendimento para o evento E-Crane Worldwide. Interface touch-first para apresentação institucional da empresa, seus produtos, tecnologia e contato — operado por visitantes sem assistência.

## Skill obrigatória
**Sempre invocar a skill `frontend-design` antes de implementar qualquer página ou componente visual.**

---

## Figma
URL base do design: `https://www.figma.com/design/2EyDJOa1Fszt3JGOgDHULl/E-CRANE`

### Links por tela
| Tela | URL |
|------|-----|
| Boas-Vindas (idle) | https://www.figma.com/design/2EyDJOa1Fszt3JGOgDHULl/E-CRANE?node-id=4034-2232 |
| Início (home) | https://www.figma.com/design/2EyDJOa1Fszt3JGOgDHULl/E-CRANE?node-id=4034-2406 |
| Início / Suporte e Contato | https://www.figma.com/design/2EyDJOa1Fszt3JGOgDHULl/E-CRANE?node-id=4041-879 |
| Institucional e Cultural | https://www.figma.com/design/2EyDJOa1Fszt3JGOgDHULl/E-CRANE?node-id=4034-3194 |
| Introdução | https://www.figma.com/design/2EyDJOa1Fszt3JGOgDHULl/E-CRANE?node-id=4034-3194 |
| Components / Style Guide | https://www.figma.com/design/2EyDJOa1Fszt3JGOgDHULl/E-CRANE?node-id=4026-1231 |

### Comandos para Figma MCP (se conectado)
- Checar conexão: `Check Figma status`
- Extrair tokens: `Get design variables from this Figma file: https://www.figma.com/design/2EyDJOa1Fszt3JGOgDHULl/E-CRANE`
- Extrair componente: `Get the Button component from: https://www.figma.com/design/2EyDJOa1Fszt3JGOgDHULl/E-CRANE?node-id=4026-1231`

---

## Estrutura de arquivos

```
ecrane-worldwide/
├── instrucoes/
│   └── projeto-guide.md        ← este arquivo
├── assets/
│   ├── logos/
│   │   ├── Logo E-Crane.svg    ← logo principal
│   │   └── logo-ecrane-black.svg
│   ├── icons/                  ← todos os SVGs de ícone
│   └── images/                 ← fotos da empresa (102–339)
├── screenshots/                ← prints de cada tela do Figma
│   ├── 01. Boas-Vindas.png
│   ├── 02. Início.png
│   ├── 02.1. Suporte e Contato.png
│   ├── 03. Institucional e Cultural.png
│   └── 04. Introducao.png
├── base-style-guide.md         ← style guide expandido
├── copy.md                     ← fonte única de verdade para textos
├── CLAUDE.md                   ← importa este guia automaticamente
└── [páginas HTML do projeto]
```

---

## Fonte de verdade

| O quê | Onde buscar |
|-------|-------------|
| Layout, espaçamentos, hierarquia | Figma → links acima + screenshots/ |
| Cores (hex exatos) | Seção Design System abaixo |
| Tipografia (tamanhos, pesos, line-heights) | Seção Design System abaixo |
| Logos | assets/logos/ |
| Ícones | assets/icons/ (SVGs prontos) |
| Imagens | assets/images/ (JPG/PNG numerados) |
| Todos os textos | copy.md (nunca usar Lorem ipsum) |
| Referência visual por tela | screenshots/ |

---

## Design System

### Paleta de Cores

#### Neutros (base do sistema)

| Token | HEX | Uso |
|-------|-----|-----|
| `--neutral-0` | `#FFFFFF` | Fundo de cards, superfícies elevadas |
| `--neutral-50` | `#FAFAFA` | Background de páginas (light mode) |
| `--neutral-100` | `#F5F5F5` | Background alternativo, inputs |
| `--neutral-200` | `#E5E5E5` | Bordas sutis, divisores |
| `--neutral-300` | `#D4D4D4` | Bordas de cards, separadores |
| `--neutral-400` | `#A3A3A3` | Ícones desabilitados |
| `--neutral-500` | `#737373` | Texto secundário, labels |
| `--neutral-600` | `#525252` | Texto de suporte |
| `--neutral-700` | `#404040` | Texto de destaque secundário |
| `--neutral-800` | `#262626` | Texto principal |
| `--neutral-900` | `#171717` | Títulos, botão primário |
| `--neutral-950` | `#0A0A0A` | Fundo dark máximo |

#### Cores semânticas (mapeadas dos neutros)

| Token semântico | Valor | Uso |
|----------------|-------|-----|
| `--color-bg` | `#FAFAFA` | Background global do totem |
| `--color-surface` | `#FFFFFF` | Cards, modais, navbar |
| `--color-border` | `#E5E5E5` | Bordas de cards e inputs |
| `--color-text-primary` | `#171717` | Títulos, texto principal |
| `--color-text-secondary` | `#737373` | Descrições, legendas |
| `--color-text-muted` | `#A3A3A3` | Texto desabilitado |
| `--color-btn-primary-bg` | `#171717` | Fundo botão primário (CTA) |
| `--color-btn-primary-text` | `#FFFFFF` | Texto botão primário |
| `--color-btn-active-bg` | `#262626` | Estado :active do botão |
| `--color-hero-overlay` | `rgba(0,0,0,0.45)` | Overlay do hero com imagem |
| `--color-breadcrumb` | `#737373` | Texto do breadcrumb |

---

### Tipografia

**Família:** `Inter` — carregar via Google Fonts
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

#### Escala tipográfica

| Token | Tamanho | Peso | Line-height | Uso |
|-------|---------|------|------------|-----|
| `--text-display-lg` | `72px` | `700` | `110%` | Título principal (Boas-Vindas) |
| `--text-display-md` | `56px` | `700` | `115%` | Títulos de seção grandes |
| `--text-display-sm` | `44px` | `600` | `120%` | Subtítulos hero |
| `--text-heading-lg` | `36px` | `600` | `120%` | Título de tela/página |
| `--text-heading-md` | `28px` | `500` | `130%` | Seções internas |
| `--text-heading-sm` | `24px` | `500` | `130%` | Labels importantes |
| `--text-title-lg` | `22px` | `500` | `140%` | Título de cards |
| `--text-title-md` | `18px` | `500` | `140%` | Texto de botão, labels |
| `--text-body-lg` | `18px` | `400` | `160%` | Texto principal de conteúdo |
| `--text-body-md` | `16px` | `400` | `160%` | Descrições, corpo secundário |
| `--text-body-sm` | `14px` | `400` | `150%` | Texto auxiliar (mínimo absoluto) |

> **Regra:** Nunca usar abaixo de 16px, exceto casos isolados de label técnico.

---

### Layout e Grid

#### Resolução alvo do totem
- **Orientação:** Portrait (vertical) — `1080 × 1920px` OU Landscape (horizontal) — `1920 × 1080px`
- Confirmar resolução real com o hardware antes de finalizar

#### Safe area
- Margem mínima nas bordas: `80px` em todos os lados
- Container de conteúdo: `max-width: 920px` centralizado (em landscape)

#### Espaçamentos

| Token | Valor | Uso |
|-------|-------|-----|
| `--space-xs` | `8px` | Gaps internos mínimos |
| `--space-sm` | `16px` | Gap entre elementos |
| `--space-md` | `24px` | Padding de cards, gap padrão |
| `--space-lg` | `40px` | Seções internas |
| `--space-xl` | `64px` | Entre seções principais |
| `--space-2xl` | `80px` | Safe area, padding de tela |

#### Cards
- `border-radius: 16px`
- `padding: 24px`
- `border: 1px solid #E5E5E5`
- `background: #FFFFFF`
- `box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)`

#### Navbar
- `height: 64px`
- `background: #FFFFFF`
- `border-bottom: 1px solid #E5E5E5`
- Logo E-CRANE: centralizado
- Seletor de idioma: esquerda (SVG bandeira + texto)
- Relógio + botão home: direita

#### Botões touch
- Altura mínima: `72px` (ideal `80px`)
- Padding horizontal: `32px`
- `border-radius: 12px`
- Nunca usar `hover` — usar `:active` com `transform: scale(0.97)` + `transition: 150ms`
- Área de toque: `min-height: 72px; min-width: 120px`

---

### Componentes mapeados

| Componente | Arquivo de ícone | Notas |
|-----------|-----------------|-------|
| Ícone usuário (boas-vindas) | `assets/icons/account_circle.svg` | Centro do card welcome |
| Seta de navegação (cards) | `assets/icons/north_east.svg` | Canto superior direito dos cards |
| Botão home | `assets/icons/home.svg` | Navbar direita, fundo `#171717` |
| Seta forward | `assets/icons/arrow_forward.svg` | Botão CTA |
| Chevron | `assets/icons/chevron_forward.svg` | Breadcrumb separador |
| Voltar | `assets/icons/subdirectory_arrow_left.svg` | Botão "← Voltar" |
| Accordion aberto | `assets/icons/arrow_drop_up.svg` | FAQ expandido |
| Accordion fechado | `assets/icons/arrow_drop_down.svg` | FAQ recolhido |
| Bandeira BR | `assets/icons/Brazil Icon.svg` | Seletor de idioma |
| Bandeira US | `assets/icons/Estados Unidos.svg` | Seletor de idioma (EN) |

---

## Navegação e fluxo de telas

```
[IDLE] Boas-Vindas
    → Toque para iniciar
        → [HOME] Início (menu principal)
            → Institucional e Cultura
                → Introdução
                → Histórico e Expansão
                → Empresa Familiar
                → Equipe e Talentos
            → Diferenciais e Tecnologia
                → Nossos Valores
                → Design Equilibrado
                → Sustentabilidade
                → E-Care
            → Portfólio de Produtos
                → Superiores (Uppers)
                → Bases (Lowers)
                → Grabs e Implementos
                → Tabela Técnica
            → Setores de Atuação
                → Reciclagem de Metais
                → Dragagem
                → Granéis Sólidos
                → Granel em Contêineres
            → Suporte e Contato
                → FAQ (accordion)
                → Rede Global de Contatos
```

**Máximo 3 níveis de profundidade.** Botão "Início" sempre visível na navbar. Botão "← Voltar" fixo no canto inferior direito em todas as subpáginas.

---

## Regras de comportamento — Totem

### Interação touch
- `cursor: none` no body — **nunca** exibir cursor
- Feedback visual imediato: efeito ripple ou highlight em `:active`
- Nenhum estado `hover` — apenas `active`
- Transições entre telas: `< 300ms` (preferir `200ms`)

### Timeout e reset
- Reset automático após **90 segundos** de inatividade
- Retorna para a tela Boas-Vindas
- Limpa qualquer dado de sessão

### Performance
- Evitar `transition-all` — animar apenas `transform` e `opacity`
- Sem vídeos em autoplay pesados
- Sem animações CSS que envolvam `box-shadow` dinâmico em loop
- Preferir SVG a PNG para ícones
- Imagens hero com `loading="eager"` pré-carregadas

### Privacidade
- Nenhum dado persistido no `localStorage` ou `sessionStorage`
- Reset total ao retornar para idle

---

## Páginas e status de desenvolvimento

| Arquivo | Tela | Status |
|---------|------|--------|
| `style-guide.html` | Style Guide / Componentes | ⬜ Pendente |
| `index.html` | Boas-Vindas (idle) | ⬜ Pendente |
| `home.html` | Início (menu principal) | ⬜ Pendente |
| `institucional.html` | Institucional e Cultura (submenu) | ⬜ Pendente |
| `institucional-intro.html` | Introdução | ⬜ Pendente |
| `institucional-historico.html` | Histórico e Expansão | ⬜ Pendente |
| `institucional-familia.html` | Empresa Familiar | ⬜ Pendente |
| `institucional-equipe.html` | Equipe e Talentos | ⬜ Pendente |
| `diferenciais.html` | Diferenciais e Tecnologia (submenu) | ⬜ Pendente |
| `diferenciais-valores.html` | Nossos Valores | ⬜ Pendente |
| `diferenciais-design.html` | Design Equilibrado | ⬜ Pendente |
| `diferenciais-sustentabilidade.html` | Sustentabilidade | ⬜ Pendente |
| `diferenciais-ecare.html` | E-Care | ⬜ Pendente |
| `portfolio.html` | Portfólio de Produtos (submenu) | ⬜ Pendente |
| `portfolio-uppers.html` | Superiores (Uppers) | ⬜ Pendente |
| `portfolio-lowers.html` | Bases (Lowers) | ⬜ Pendente |
| `portfolio-grabs.html` | Grabs e Implementos | ⬜ Pendente |
| `portfolio-tabela.html` | Tabela Técnica | ⬜ Pendente |
| `setores.html` | Setores de Atuação (submenu) | ⬜ Pendente |
| `setores-reciclagem.html` | Reciclagem de Metais | ⬜ Pendente |
| `setores-dragagem.html` | Dragagem | ⬜ Pendente |
| `setores-graneis.html` | Granéis Sólidos | ⬜ Pendente |
| `setores-cbh.html` | Granel em Contêineres (CBH) | ⬜ Pendente |
| `suporte.html` | Suporte e Contato (FAQ + contatos) | ⬜ Pendente |

> **Ordem de desenvolvimento:** sempre começar pelo `style-guide.html` para validar os tokens antes de construir as páginas.

---

## Assets disponíveis

### Logos
- `assets/logos/Logo E-Crane.svg` — logo principal (usar na navbar)
- `assets/logos/logo-ecrane-black.svg` — variante preta

### Ícones (SVG — pasta `assets/icons/`)
Todos os ícones necessários já estão disponíveis. Ver tabela de componentes acima.

### Imagens (pasta `assets/images/` e `assets/229.png`)
Imagens numeradas de alta resolução. Definir correspondência por tela durante o desenvolvimento conforme o Figma.

---

## Dados de contato (usar exatamente estes)

| Escritório | Email | Telefone | Endereço |
|-----------|-------|----------|---------|
| HQ — Bélgica | info@e-crane.com | +32 9 378 04 44 | Koekoeklaan 53, 9991 Adegem, Belgium |
| Europa — Holanda | europe@e-crane.com | +31 165 320100 | Argon 15G, 4751XC Oud Gastel, NL |
| América do Norte e Central | usa@e-crane.com | +1 419 468 0090 | 1332 Freese Works Place, Galion, OH 44833, USA |
| Ásia — Singapura | asia@e-crane.com | +65 690 953 95 | 3 Pickering Street, #02-38, Singapore 048660 |
| América do Sul — Brasil | southamerica@e-crane.com | +55 (11) 99665 8001 | Rua Cypriano Barata, 80 — Santos, SP |

**Site oficial:** www.e-crane.com  
**Copyright:** © 2026 E-CRANE – Todos os direitos reservados  
**Crédito:** Site desenvolvido por Mukutu

---

## Regras absolutas de desenvolvimento

1. **Nunca inventar cores** — usar exclusivamente os tokens definidos acima
2. **Nunca usar fonte diferente de Inter**
3. **Nunca usar Lorem ipsum** — todos os textos vêm de `copy.md`
4. **Nunca exibir cursor** — `cursor: none` no body
5. **Nunca usar `hover`** — apenas `:active` para feedback touch
6. **Nunca usar `transition-all`** — animar apenas `transform` e `opacity`
7. **Nunca persistir dados** — sem localStorage, sem sessionStorage
8. **Nunca adicionar seções** que não existam no Figma/screenshots
9. **Nunca "melhorar" o design** — reproduzir com fidelidade
10. **Sempre** verificar screenshot após cada seção implementada

---

## Fluxo de desenvolvimento por página

1. Invocar a skill `frontend-design`
2. Abrir screenshot da tela como referência visual
3. **Apresentar plano de ação** — listar todas as seções, ordem e componentes. **Aguardar aprovação** antes de escrever código
4. Após aprovação: criar a página (começar pelo `style-guide.html`)
5. Servir via `npx serve . -p 3000` e tirar screenshot de `http://localhost:3000`
6. Comparar screenshot com referência — descrever diferenças específicas
7. Corrigir e tirar novo screenshot. Mínimo 2 rodadas de comparação
8. Avançar para a próxima página apenas após validação
