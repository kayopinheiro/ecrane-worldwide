# Design System — E-CRANE Totem de Autoatendimento

> Documento de referência completo para o desenvolvimento da interface touch do totem interativo E-Crane. Baseado nas diretrizes do Material Design adaptadas para hardware de quiosque e interação sem mouse.

---

## 1. Princípios de Design para Totem

| Princípio | Diretriz |
|-----------|---------|
| **Legibilidade à distância** | Texto mínimo 16px, idealmente 18px+. Leitores a 60cm–1,5m de distância. |
| **Touch-first** | Área de toque mínima 64px, ideal 72–96px. Sem hover, apenas :active. |
| **Sem cursor** | `cursor: none` no body. O usuário usa o dedo, não o mouse. |
| **Velocidade de resposta** | Feedback visual em < 100ms. Transições de tela < 300ms. |
| **Reset automático** | 90s de inatividade → retorno para tela inicial. |
| **Hierarquia clara** | A tela deve ser compreendida em até 3 segundos. |
| **Fluxo curto** | Máximo 3 níveis de navegação. Máximo 3–5 passos por fluxo. |

---

## 2. Color System

### 2.1 Escala Neutra

#### ☀️ Light Mode (padrão do totem)

| Token CSS | HEX | Uso principal |
|-----------|-----|---------------|
| `--neutral-0` | `#FFFFFF` | Cards, superfícies elevadas, navbar |
| `--neutral-50` | `#FAFAFA` | Background global das telas |
| `--neutral-100` | `#F5F5F5` | Background alternativo, campos |
| `--neutral-200` | `#E5E5E5` | Bordas de cards e divisores |
| `--neutral-300` | `#D4D4D4` | Separadores, bordas de input |
| `--neutral-400` | `#A3A3A3` | Ícones desabilitados, placeholders |
| `--neutral-500` | `#737373` | Texto secundário, breadcrumb, legenda |
| `--neutral-600` | `#525252` | Texto de suporte |
| `--neutral-700` | `#404040` | Texto de destaque secundário |
| `--neutral-800` | `#262626` | Texto principal do corpo |
| `--neutral-900` | `#171717` | Títulos, fundo botão primário |
| `--neutral-950` | `#0A0A0A` | Máximo contraste, overlays |

#### 🌙 Dark Mode (reserva — não implementar por padrão)

| Token CSS | HEX |
|-----------|-----|
| `--dark-0` | `#000000` |
| `--dark-100` | `#171717` |
| `--dark-200` | `#262626` |
| `--dark-300` | `#373737` |
| `--dark-400` | `#525252` |
| `--dark-500` | `#8A8A8A` |
| `--dark-700` | `#D4D4D4` |
| `--dark-900` | `#F5F5F5` |

### 2.2 Tokens Semânticos

```css
:root {
  /* Backgrounds */
  --color-bg:              #FAFAFA;   /* background global */
  --color-surface:         #FFFFFF;   /* cards, navbar, modais */
  --color-surface-hover:   #F5F5F5;  /* não usar em totem */

  /* Bordas */
  --color-border:          #E5E5E5;
  --color-border-strong:   #D4D4D4;

  /* Texto */
  --color-text-primary:    #171717;
  --color-text-secondary:  #737373;
  --color-text-muted:      #A3A3A3;
  --color-text-inverse:    #FFFFFF;

  /* Botão primário (CTA) */
  --color-btn-bg:          #171717;
  --color-btn-text:        #FFFFFF;
  --color-btn-active:      #262626;   /* estado :active */

  /* Hero overlay */
  --color-overlay:         rgba(0, 0, 0, 0.45);

  /* Feedback touch */
  --color-ripple:          rgba(0, 0, 0, 0.08);
}
```

### 2.3 Uso por contexto

| Elemento | Token |
|---------|-------|
| Background de tela | `--color-bg` |
| Navbar | `--color-surface` |
| Cards de navegação | `--color-surface` |
| Título de tela | `--color-text-primary` |
| Descrição de card | `--color-text-secondary` |
| Breadcrumb | `--color-text-secondary` |
| Botão CTA | `--color-btn-bg` + `--color-btn-text` |
| Hero com imagem | imagem + `--color-overlay` |
| Separador/divider | `--color-border` |

---

## 3. Tipografia

### 3.1 Font Family

```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
```

Import via Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

### 3.2 Escala Tipográfica Completa

```css
:root {
  /* Display — títulos grandes de hero */
  --text-display-lg:   72px;  /* peso 700, line-height 110% */
  --text-display-md:   56px;  /* peso 700, line-height 115% */
  --text-display-sm:   44px;  /* peso 600, line-height 120% */

  /* Headings — títulos de tela e seção */
  --text-heading-lg:   36px;  /* peso 600, line-height 120% */
  --text-heading-md:   28px;  /* peso 500, line-height 130% */
  --text-heading-sm:   24px;  /* peso 500, line-height 130% */

  /* Titles — cards e labels */
  --text-title-lg:     22px;  /* peso 500, line-height 140% */
  --text-title-md:     18px;  /* peso 500, line-height 140% */
  --text-title-sm:     16px;  /* peso 500, line-height 140% */

  /* Body — texto corrido */
  --text-body-lg:      18px;  /* peso 400, line-height 160% */
  --text-body-md:      16px;  /* peso 400, line-height 160% */
  --text-body-sm:      14px;  /* peso 400, line-height 150% — mínimo absoluto */
}
```

### 3.3 Aplicação por elemento de UI

| Elemento | Tamanho | Peso |
|---------|---------|------|
| Título da tela Boas-Vindas | 44–56px | 700 |
| Título de tela de conteúdo | 36px | 600 |
| Título de hero com imagem | 36–44px | 700 |
| Título de card | 18–22px | 500 |
| Descrição de card | 16px | 400 |
| Texto de botão CTA | 18–20px | 500 |
| Corpo de conteúdo | 18px | 400 |
| Breadcrumb | 14–16px | 400 |
| Footer | 14px | 400 |

### 3.4 Regras obrigatórias

- Nunca usar abaixo de **16px** em elementos interativos
- Nunca usar abaixo de **14px** em qualquer elemento
- `letter-spacing: -0.02em` em títulos ≥ 36px
- `line-height` mínimo de **120%** em títulos, **150%** em corpo
- Não misturar pesos além de 400, 500, 600 e 700

---

## 4. Espaçamento e Layout

### 4.1 Escala de Espaçamento

```css
:root {
  --space-1:    4px;
  --space-2:    8px;   /* gap interno mínimo */
  --space-3:    12px;
  --space-4:    16px;  /* gap padrão entre elementos */
  --space-5:    20px;
  --space-6:    24px;  /* padding de cards */
  --space-8:    32px;
  --space-10:   40px;  /* seções internas */
  --space-12:   48px;
  --space-16:   64px;  /* entre seções */
  --space-20:   80px;  /* safe area, padding de tela */
}
```

### 4.2 Safe Area

- Margem mínima em todos os lados: **80px**
- Container de conteúdo: `max-width: 960px` centralizado
- Padding do container: `0 80px`

### 4.3 Grid de Cards

```css
/* Home — 3 colunas */
.cards-grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

/* Submenus — 2 colunas */
.cards-grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
```

---

## 5. Componentes

### 5.1 Navbar

```
┌─────────────────────────────────────────────┐
│  🇧🇷 Português ▾    E-CRANE    🕐 10:32  🏠  │
└─────────────────────────────────────────────┘
```

- Height: `64px`
- Background: `#FFFFFF`
- Border-bottom: `1px solid #E5E5E5`
- Logo: centralizado, `height: 28px`
- Seletor de idioma: esquerda — flag SVG + texto + chevron
- Relógio: direita, `color: #737373`, `font-size: 16px`
- Botão home: direita, `background: #171717`, `color: #FFFFFF`, `border-radius: 8px`, `padding: 10px`, ícone SVG `20px`

### 5.2 Card de Navegação

```
┌────────────────────────┐
│ [ícone]         ↗      │
│                        │
│ Título do Card         │
│ Descrição curta do     │
│ conteúdo desta seção.  │
└────────────────────────┘
```

```css
.card {
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 16px;
  padding: 24px;
  min-height: 160px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04);
  position: relative;
  cursor: none; /* totem */
  transition: transform 150ms ease, box-shadow 150ms ease;
}

.card:active {
  transform: scale(0.97);
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
}

.card__icon {
  width: 24px;
  height: 24px;
  color: #171717;
  margin-bottom: 16px;
}

.card__arrow {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  color: #A3A3A3;
}

.card__title {
  font-size: 18px;
  font-weight: 500;
  color: #171717;
  margin-bottom: 8px;
}

.card__description {
  font-size: 14px;
  font-weight: 400;
  color: #737373;
  line-height: 150%;
}
```

### 5.3 Botão Primário (CTA)

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #171717;
  color: #FFFFFF;
  font-family: 'Inter', sans-serif;
  font-size: 18px;
  font-weight: 500;
  padding: 0 32px;
  height: 72px;
  border-radius: 12px;
  border: none;
  cursor: none;
  transition: transform 150ms ease, background 150ms ease;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.btn-primary:active {
  transform: scale(0.97);
  background: #262626;
}
```

### 5.4 Botão Secundário (Voltar)

```css
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #171717;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 500;
  padding: 0 24px;
  height: 64px;
  border-radius: 12px;
  border: none;
  cursor: none;
  transition: transform 150ms ease;
  user-select: none;
}

.btn-secondary:active {
  transform: scale(0.97);
}

/* Posição fixa: canto inferior direito */
.btn-voltar {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 100;
}
```

### 5.5 Hero com Imagem

```css
.hero {
  width: 100%;
  height: 280px;
  position: relative;
  overflow: hidden;
}

.hero__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
}

.hero__content {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 32px 80px;
}

.hero__label {
  font-size: 14px;
  font-weight: 400;
  color: rgba(255,255,255,0.7);
  margin-bottom: 8px;
}

.hero__title {
  font-size: 36px;
  font-weight: 700;
  color: #FFFFFF;
  letter-spacing: -0.02em;
  line-height: 120%;
}

.hero__subtitle {
  font-size: 16px;
  font-weight: 400;
  color: rgba(255,255,255,0.85);
  margin-top: 8px;
  line-height: 150%;
}
```

### 5.6 Hero da Boas-Vindas (welcome card centralizado)

```css
.welcome-screen {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.welcome-screen__bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.welcome-card {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #FFFFFF;
  border-radius: 20px;
  padding: 48px 56px;
  text-align: center;
  min-width: 480px;
  max-width: 560px;
  box-shadow: 0 8px 40px rgba(0,0,0,0.18);
}

.welcome-card__icon {
  width: 56px;
  height: 56px;
  color: #171717;
  margin: 0 auto 24px;
}

.welcome-card__title {
  font-size: 36px;
  font-weight: 700;
  color: #171717;
  margin-bottom: 12px;
  letter-spacing: -0.02em;
}

.welcome-card__subtitle {
  font-size: 16px;
  font-weight: 400;
  color: #737373;
  line-height: 160%;
  margin-bottom: 32px;
}
```

### 5.7 Breadcrumb

```css
.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 80px;
  font-size: 14px;
  color: #737373;
}

.breadcrumb__separator {
  width: 16px;
  height: 16px;
  color: #A3A3A3;
}

.breadcrumb__current {
  color: #171717;
  font-weight: 500;
}
```

### 5.8 Accordion (FAQ)

```css
.accordion {
  background: #FFFFFF;
  border: 1px solid #E5E5E5;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 8px;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  font-size: 18px;
  font-weight: 500;
  color: #171717;
  cursor: none;
  min-height: 72px;
  user-select: none;
  transition: background 150ms;
}

.accordion__trigger:active {
  background: #F5F5F5;
}

.accordion__icon {
  width: 24px;
  height: 24px;
  background: #171717;
  border-radius: 6px;
  padding: 4px;
  color: #FFFFFF;
  flex-shrink: 0;
}

.accordion__content {
  padding: 0 24px 24px;
  font-size: 16px;
  font-weight: 400;
  color: #525252;
  line-height: 160%;
  border-top: 1px solid #E5E5E5;
}
```

### 5.9 Footer

```css
.footer {
  padding: 20px 80px;
  border-top: 1px solid #E5E5E5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #737373;
}

.footer__mukutu {
  font-weight: 600;
  color: #171717;
}
```

---

## 6. Animações e Transições

### 6.1 Efeito ripple (feedback touch)

```css
.touchable {
  position: relative;
  overflow: hidden;
}

.touchable::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.08);
  opacity: 0;
  transition: opacity 100ms ease;
  border-radius: inherit;
}

.touchable:active::after {
  opacity: 1;
}
```

### 6.2 Transição entre telas

```css
/* Fade in ao carregar */
body {
  animation: fadeIn 200ms ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
```

### 6.3 Botão pulsante (Boas-Vindas)

```css
.btn-pulse {
  animation: pulse 2.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(23, 23, 23, 0.25); }
  50%       { box-shadow: 0 0 0 12px rgba(23, 23, 23, 0); }
}
```

### 6.4 Regras absolutas de animação

- Animar **apenas** `transform` e `opacity`
- **Nunca** usar `transition-all`
- **Nunca** animar `box-shadow` em loop (pesado)
- Duration máxima para transições de tela: `300ms`
- Easing padrão: `ease` ou `cubic-bezier(0.4, 0, 0.2, 1)`

---

## 7. Timeout e Reset

```javascript
// Gerenciamento de inatividade
const TIMEOUT_MS = 90_000; // 90 segundos
let resetTimer;

function resetTimeout() {
  clearTimeout(resetTimer);
  resetTimer = setTimeout(() => {
    window.location.href = 'index.html'; // volta para Boas-Vindas
  }, TIMEOUT_MS);
}

// Reiniciar timer em qualquer interação
['touchstart', 'touchend', 'click', 'keydown'].forEach(event => {
  document.addEventListener(event, resetTimeout, { passive: true });
});

// Iniciar ao carregar
resetTimeout();
```

---

## 8. CSS Custom Properties — Arquivo tokens.css

```css
/* tokens.css — importar em todas as páginas */
:root {
  /* Neutros */
  --neutral-0:   #FFFFFF;
  --neutral-50:  #FAFAFA;
  --neutral-100: #F5F5F5;
  --neutral-200: #E5E5E5;
  --neutral-300: #D4D4D4;
  --neutral-400: #A3A3A3;
  --neutral-500: #737373;
  --neutral-600: #525252;
  --neutral-700: #404040;
  --neutral-800: #262626;
  --neutral-900: #171717;
  --neutral-950: #0A0A0A;

  /* Semânticos */
  --color-bg:               var(--neutral-50);
  --color-surface:          var(--neutral-0);
  --color-border:           var(--neutral-200);
  --color-border-strong:    var(--neutral-300);
  --color-text-primary:     var(--neutral-900);
  --color-text-secondary:   var(--neutral-500);
  --color-text-muted:       var(--neutral-400);
  --color-text-inverse:     var(--neutral-0);
  --color-btn-bg:           var(--neutral-900);
  --color-btn-text:         var(--neutral-0);
  --color-btn-active:       var(--neutral-800);
  --color-overlay:          rgba(0, 0, 0, 0.45);
  --color-ripple:           rgba(0, 0, 0, 0.08);

  /* Tipografia */
  --font-family:            'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --text-display-lg:        72px;
  --text-display-md:        56px;
  --text-display-sm:        44px;
  --text-heading-lg:        36px;
  --text-heading-md:        28px;
  --text-heading-sm:        24px;
  --text-title-lg:          22px;
  --text-title-md:          18px;
  --text-title-sm:          16px;
  --text-body-lg:           18px;
  --text-body-md:           16px;
  --text-body-sm:           14px;

  /* Espaçamento */
  --space-1:   4px;
  --space-2:   8px;
  --space-3:   12px;
  --space-4:   16px;
  --space-5:   20px;
  --space-6:   24px;
  --space-8:   32px;
  --space-10:  40px;
  --space-12:  48px;
  --space-16:  64px;
  --space-20:  80px;

  /* Componentes */
  --radius-sm:    8px;
  --radius-md:    12px;
  --radius-lg:    16px;
  --radius-xl:    20px;
  --btn-height:   72px;
  --navbar-height: 64px;
  --safe-area:    80px;
  --container:    960px;

  /* Sombras */
  --shadow-card:   0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04);
  --shadow-welcome: 0 8px 40px rgba(0,0,0,0.18);
  --shadow-btn:    0 2px 8px rgba(0,0,0,0.12);
}

/* Reset base para totem */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  font-family: var(--font-family);
  background: var(--color-bg);
  color: var(--color-text-primary);
  cursor: none; /* nunca exibir cursor */
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  overflow-x: hidden;
}

/* Scrollbar invisível (totem não usa scrollbar) */
::-webkit-scrollbar { display: none; }
* { scrollbar-width: none; }
```

---

## 9. Checklist de QA por Tela

Antes de marcar uma tela como pronta, verificar:

- [ ] Cursor não aparece ao mover o mouse
- [ ] Todos os elementos touch têm min-height de 64px
- [ ] Botão "← Voltar" aparece em posição fixa no canto inferior direito
- [ ] Breadcrumb exibe a navegação correta
- [ ] Timeout de 90s retorna para index.html
- [ ] Nenhum texto abaixo de 16px (exceto footer 14px)
- [ ] Nenhum estado hover — apenas :active
- [ ] Transições < 300ms
- [ ] Todos os textos vêm de copy.md
- [ ] Nenhuma cor inventada fora dos tokens
- [ ] Screenshot comparado com referência do Figma

---

## 10. Diretriz Final

O totem da E-Crane deve comunicar **precisão, confiabilidade e sofisticação** — os mesmos valores dos equipamentos que a empresa fabrica. Interface limpa, hierarquia clara, resposta imediata ao toque. Menos é mais. Cada tela deve ser entendida em até 3 segundos por um visitante sem contexto.
