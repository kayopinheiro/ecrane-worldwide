# COPY.MD — E-CRANE TOTEM DE AUTO-ATENDIMENTO
> Arquivo de referência de conteúdo para desenvolvimento do totem interativo E-Crane.
> Todo texto foi extraído e adaptado do Company Profile oficial (2026) para o formato de tela de auto-atendimento.
> Cada seção corresponde a uma tela ou estado da aplicação.

---

## CONVENÇÕES DESTE ARQUIVO

- `[TÍTULO]` → texto de destaque principal da tela (geralmente grande)
- `[SUBTÍTULO]` → texto secundário ou descritivo
- `[CORPO]` → parágrafo principal de conteúdo
- `[LABEL]` → texto de card, botão ou item de menu
- `[DETALHE]` → texto menor, complementar
- `[FAQ-P]` → pergunta de FAQ
- `[FAQ-R]` → resposta de FAQ

---

## TELA 0 — BOAS-VINDAS (Welcome / Idle Screen)

> Tela inicial exibida quando o totem está em repouso. Deve ser simples, convidativa e de fácil leitura à distância.

```
[ÍCONE] → ícone de usuário / pessoa
[TÍTULO] → Seja bem-vindo!
[SUBTÍTULO] → Explore nossos produtos, tecnologia e soluções globais de movimentação de materiais.
[BOTÃO] → Toque para iniciar →
[RODAPÉ ESQUERDO] → © 2026 E-CRANE – Todos os direitos reservados
[RODAPÉ DIREITO] → Site desenvolvido por Mukutu
```

---

## TELA 1 — HOME (Menu Principal)

> Tela hub com slider de destaque e cards de navegação para as 5 grandes seções.

### Hero Slider

```
[SLIDE 1]
[LABEL-TOPO] → Bem-vindo
[TÍTULO] → Seu parceiro em desempenho
[SUBTÍTULO] → Soluções turnkey para granéis sólidos, reciclagem de metais e dragagem.

[SLIDE 2]
[TÍTULO] → Equilíbrio Inteligente, Eficiência Energética, Impacto Superior.
[SUBTÍTULO] → O E-Crane reduz em até 75% o consumo de potência instalada.

[SLIDE 3]
[TÍTULO] → Mais de 35 anos movendo o mundo.
[SUBTÍTULO] → Presença global com centros de serviço na Europa, Américas e Ásia.
```

### Cards de Navegação (5 seções)

```
[CARD 1]
[LABEL] → Institucional e Cultura
[DETALHE] → Conheça nossa história, valores e a família por trás da E-Crane.

[CARD 2]
[LABEL] → Diferenciais e Tecnologia
[DETALHE] → O conceito de equilíbrio que revolucionou a movimentação de materiais.

[CARD 3]
[LABEL] → Portfólio de Produtos
[DETALHE] → Sete séries de equipamentos, bases e implementos customizados.

[CARD 4]
[LABEL] → Setores de Atuação
[DETALHE] → Reciclagem, dragagem, granéis sólidos e logística portuária.

[CARD 5]
[LABEL] → Suporte e Contato
[DETALHE] → Rede global de suporte, FAQ e contatos diretos.
```

---

## SEÇÃO 1 — INSTITUCIONAL E CULTURA

> Tela de submenu com 4 cards de navegação.

```
[HERO-IMAGEM] → foto da família Bauwens na fábrica
[LABEL-TOPO] → Bem-vindo
[TÍTULO] → Institucional e Cultura
[SUBTÍTULO] → Referência global em soluções turnkey para granéis, reciclagem e dragagem.

[CARD 1] → Introdução
[DETALHE] → Referência global em soluções turnkey para granéis, reciclagem e dragagem.

[CARD 2] → Histórico e Expansão
[DETALHE] → Trajetória desde 1990, com marcos na Europa, Américas e Ásia.

[CARD 3] → Empresa Familiar
[DETALHE] → Valores da família Bauwens e foco em parcerias duradouras.

[CARD 4] → Equipe e Talentos
[DETALHE] → Foco em "pessoas extraordinárias" por trás dos produtos.

[BOTÃO] → ← Voltar
```

---

### 1.1 — INTRODUÇÃO

> Tela de conteúdo com texto e imagem. Máximo 3 blocos de texto.

```
[TÍTULO] → Introdução

[CORPO 1]
A E-Crane Worldwide é uma referência global no fornecimento de soluções turnkey para movimentação de granéis sólidos, reciclagem de metais e operações de dragagem. Fundada em 1990 por engenheiros especializados em equipamentos de grande porte, a empresa construiu uma sólida trajetória baseada em inovação contínua.

[CORPO 2]
Há mais de 35 anos, a E-Crane vem aperfeiçoando o EQUILIBRIUM CRANE — reconhecido internacionalmente como E-Crane® —, o guindaste tipo grab mais eficiente e confiável de sua categoria. Cada unidade contempla engenharia própria completa, fabricação, montagem, testes rigorosos e desenvolvimento integral da documentação técnica.

[CORPO 3]
Com centros de serviços estrategicamente posicionados e uma rede global de distribuidores em constante expansão na Europa, Ásia e Américas, a E-Crane assegura elevada disponibilidade de peças de reposição e respostas técnicas ágeis. Guiada por um compromisso permanente com qualidade, eficiência e inovação, a E-Crane estabelece parcerias duradouras com clientes em todo o mundo.

[IMAGEM] → Mapa-múndi com presença global destacada:
Bélgica (HQ) | Holanda | Polônia | EUA (Ohio e Louisiana) | Brasil | Argentina | Singapura | Bangladesh | Indonésia

[BOTÃO] → ← Voltar
```

---

### 1.2 — HISTÓRICO E EXPANSÃO

> Tela com linha do tempo interativa (scroll ou cards).

```
[TÍTULO] → Histórico e Expansão

[INTRO]
Mais de três décadas de crescimento contínuo, inovação e expansão global.

[TIMELINE]

[ANO] → 1990
[LABEL] → Nossa Origem
[DETALHE] → O início de uma pequena empresa de engenharia em Eeklo, Bélgica.

[ANO] → 1996
[LABEL] → O Primeiro E-Crane
[DETALHE] → O primeiro E-Crane foi vendido à CCB, integrante do Italcementi Group.

[ANO] → 1998
[LABEL] → Primeira Venda nos EUA
[DETALHE] → Essa venda emblemática marcou a abertura de um novo mercado.

[ANO] → 2000
[LABEL] → Fundação da E-Crane EUA
[DETALHE] → Expansão das operações para as Américas.

[ANO] → 2001
[LABEL] → Nova Sede Corporativa
[DETALHE] → Transferência para Adegem, Bélgica.

[ANO] → 2009
[LABEL] → Marco Histórico
[DETALHE] → O maior guindaste hidráulico já construído, com peso superior a 1.200 toneladas.

[ANO] → 2012
[LABEL] → Aquisição da E-Towers Famaba
[DETALHE] → Centro de produção de estruturas metálicas para guindastes e torres.

[ANO] → 2016
[LABEL] → Fundação da E-Crane Asia
[DETALHE] → Abertura dos escritórios em Singapura.

[ANO] → 2018
[LABEL] → Fundação da E-Crane Indonésia
[DETALHE] → Inauguração do centro de serviços para o Sudeste Asiático.

[ANO] → 2022
[LABEL] → Expansão em Adegem
[DETALHE] → Novos escritórios, armazém ampliado e áreas de convivência.

[ANO] → 2023
[LABEL] → Expansão da E-Crane EUA
[DETALHE] → Inauguração do centro de serviços para a Costa do Golfo dos EUA.

[ANO] → 2024
[LABEL] → Fundação da E-Crane Bangladesh
[DETALHE] → Expansão das operações em Bangladesh.

[ANO] → 2024
[LABEL] → Expansão na Polônia
[DETALHE] → Inauguração da nova unidade de produção em Bydgoszcz.

[ANO] → 2025
[LABEL] → Fundação da E-Crane Brasil
[DETALHE] → Inauguração do centro de serviços e coordenação em Santos, SP.

[ANO] → 2025
[LABEL] → Expansão na Indonésia
[DETALHE] → Duplicação da capacidade operacional com ampliação dos escritórios, oficina e armazém.

[ANO] → 2026
[LABEL] → Expansão em Bangladesh
[DETALHE] → Inauguração de um centro de serviços e armazém.

[BOTÃO] → ← Voltar
```

---

### 1.3 — EMPRESA FAMILIAR

> Tela de conteúdo com foto da família e texto institucional.

```
[TÍTULO] → Empresa Familiar

[CORPO 1]
Na E-Crane Worldwide, acreditamos ser mais do que uma empresa — somos uma família. Desde sua fundação, a organização foi construída sobre sólidos valores familiares, aliados a uma genuína paixão pela inovação. Nossa trajetória atravessa gerações, e esperamos em breve contar com você como parte da nossa família.

[CORPO 2]
A família Bauwens permanece ativamente envolvida na liderança da empresa. O que começou como uma iniciativa local, impulsionada por valores familiares, transformou-se em uma companhia global, especializada no fornecimento de soluções eficientes e confiáveis para movimentação de granéis sólidos.

[CORPO 3]
Essa cultura centrada nas pessoas assegura que cada cliente, parceiro, representante e colaborador faça parte integrante da nossa história. Juntos, cultivamos uma tradição de excelência que gera valor duradouro. Convidamos você a fazer parte da família E-Crane e, juntos, construirmos um futuro extraordinário.

[IMAGEM] → Foto da família Bauwens na fábrica de Adegem

[BOTÃO] → ← Voltar
```

---

### 1.4 — EQUIPE E TALENTOS

> Tela de conteúdo com foco nas pessoas da empresa.

```
[TÍTULO] → Equipe e Talentos

[DESTAQUE]
Produtos extraordinários, desenvolvidos por pessoas extraordinárias.

[CORPO 1]
A E-Crane Worldwide entrega produtos extraordinários, projetados, fabricados e suportados por pessoas igualmente extraordinárias. Nossa equipe combina expertise técnica, inovação e compromisso com a excelência, garantindo soluções de alto desempenho, confiabilidade e resultados consistentes para nossos clientes em todo o mundo.

[CORPO 2]
O comprometimento, a excelência técnica e a mentalidade orientada à solução de desafios são essenciais para o sucesso da E-Crane. São essas pessoas — engenheiros, técnicos de campo, especialistas em suporte — que transformam equipamentos em soluções extraordinárias.

[IMAGEM] → Fotos da equipe técnica trabalhando na fábrica

[BOTÃO] → ← Voltar
```

---

## SEÇÃO 2 — DIFERENCIAIS E TECNOLOGIA

> Tela de submenu com 4 cards de navegação.

```
[HERO-IMAGEM] → Foto de E-Crane em operação portuária
[LABEL-TOPO] → Tecnologia
[TÍTULO] → Diferenciais e Tecnologia

[CARD 1] → Nossos Valores
[DETALHE] → Qualidade premium, soluções sob medida, investimento de longo prazo e serviço excepcional.

[CARD 2] → Design Equilibrado
[DETALHE] → O conceito de equilíbrio estrutural que reduz em até 75% o consumo de energia.

[CARD 3] → Sustentabilidade
[DETALHE] → Economia circular, baixas emissões de CO₂ e vida útil superior a 20 anos.

[CARD 4] → E-Care
[DETALHE] → Plataforma em nuvem para monitoramento e análise de performance em tempo real.

[BOTÃO] → ← Voltar
```

---

### 2.1 — NOSSOS VALORES

> Tela com 4 blocos de valores.

```
[TÍTULO] → Nossos Valores

[INTRO]
Nossos valores definem quem somos e como atuamos. A E-Crane Worldwide está comprometida em oferecer qualidade premium, geração de valor no longo prazo, soluções sob medida e um nível excepcional de atendimento. Ao escolher a E-Crane, você escolhe:

[VALOR 1]
[LABEL] → Qualidade Premium
[CORPO] → Entregamos engenharia de excelência. Cada guindaste é projetado com o máximo rigor técnico e precisão, atendendo aos mais elevados padrões de desempenho e confiabilidade.

[VALOR 2]
[LABEL] → Soluções sob Medida
[CORPO] → Trabalhamos em estreita parceria com nossos clientes para adaptar cada E-Crane às suas necessidades operacionais. Cada projeto é desenvolvido considerando integralmente os requisitos específicos da operação.

[VALOR 3]
[LABEL] → Investimento de Longo Prazo
[CORPO] → Um E-Crane representa um investimento inteligente, concebido para durabilidade e sustentabilidade. Nossos equipamentos são energeticamente eficientes e oferecem soluções confiáveis para operações de longo prazo.

[VALOR 4]
[LABEL] → Serviço Excepcional
[CORPO] → Nosso compromisso vai além do comissionamento do equipamento. O que nos diferencia é o suporte contínuo ao cliente, baseado em uma abordagem "do início ao fim do ciclo de vida", refletida em relações duradouras com nossos parceiros em todo o mundo.

[BOTÃO] → ← Voltar
```

---

### 2.2 — DESIGN EQUILIBRADO

> Tela técnica sobre o conceito central da tecnologia E-Crane.

```
[TÍTULO] → Design Equilibrado
[SUBTÍTULO] → O Coração da Tecnologia E-Crane

[DESTAQUE]
Equilíbrio inteligente, eficiência energética, impacto superior.

[CORPO 1 — Por que o Design Equilibrado é melhor?]
O equilíbrio é um dos fatores mais importantes para qualquer guindaste industrial. Sem o balanceamento adequado, a estabilidade operacional é comprometida. Na maioria dos guindastes convencionais, isso é resolvido com contrapesos fixos. No E-Crane, o contrapeso é mecanicamente conectado ao movimento do braço, compensando automaticamente metade da carga içada em qualquer alcance operacional.

[CORPO 2 — O Verdadeiro Equilíbrio]
O conceito de guindaste equilibrado proporciona um sistema intrinsecamente seguro, garantindo que o equipamento permaneça sempre em equilíbrio. A ligação entre o braço e o contrapeso forma um mecanismo de quatro barras, que equilibra continuamente o peso da estrutura metálica juntamente com metade da carga operacional.

[CORPO 3 — Eficiência Energética]
Ao permitir que a gravidade trabalhe a favor da operação — e não contra ela — o E-Crane reduz significativamente a potência instalada e o consumo energético, podendo alcançar reduções de até 75% comparado a equipamentos convencionais.

[BENEFÍCIOS — A Experiência E-CRANE]
• Menor necessidade de manutenção e maior vida útil dos componentes
• Menor consumo de potência, resultando em menor custo por tonelada movimentada
• Conexão rígida entre o grab e a estrutura, permitindo elevada pressão descendente mesmo no alcance máximo
• Excelente capacidade de elevação em toda a área operacional
• Operação mais suave e eficiente

[BOTÃO] → ← Voltar
```

---

### 2.3 — SUSTENTABILIDADE

> Tela sobre compromissos ambientais e economia circular.

```
[TÍTULO] → Sustentabilidade

[DESTAQUE]
Elevando os padrões de sustentabilidade.

[CORPO 1]
Na E-Crane Worldwide, buscamos continuamente aprimorar nossos produtos e serviços para apoiar a economia circular e reduzir emissões. Os inovadores E-Cranes são projetados com foco em eficiência energética. Nosso conceito de equilíbrio estrutural resulta em emissões de CO₂ significativamente menores quando comparadas aos equipamentos convencionais.

[CORPO 2]
Acreditamos que práticas empresariais responsáveis são fundamentais para a construção de um futuro mais sustentável para todos. Juntos com nossos clientes, pavimentamos o caminho para uma indústria mais eficiente, responsável e sustentável.

[COMPROMISSOS — A Experiência E-CRANE]
• O design equilibrado reduz drasticamente a necessidade de potência instalada
• Equipamentos projetados para longa vida útil — com manutenção adequada, os E-Cranes operam por mais de 20 anos e ultrapassam 100.000 horas de trabalho
• Suporte técnico contínuo e serviços especializados que auxiliam nossos clientes no alcance de suas metas de sustentabilidade

[BOTÃO] → ← Voltar
```

---

### 2.4 — E-CARE

> Tela sobre a plataforma digital de monitoramento.

```
[TÍTULO] → E-Care

[DESTAQUE]
Visão aprimorada, decisões precisas.

[CORPO 1]
Todo dia é uma oportunidade de extrair o máximo de suas operações. Nossa plataforma E-Care, baseada em nuvem, oferece um banco de dados centralizado com acesso em tempo real às informações essenciais — dados da máquina com um único objetivo: aumentar a performance.

[CORPO 2]
Simples. Rápido. Sem concessões. E, acima de tudo, intuitivo. O E-Care disponibiliza monitoramento operacional e análises de desempenho em tempo real, permitindo que operadores e gestores tomem decisões mais precisas e reduzam o tempo de parada.

[BENEFÍCIOS]
• Monitoramento remoto em tempo real
• Banco de dados centralizado na nuvem
• Análise de performance e histórico de operação
• Suporte técnico integrado à plataforma
• Acesso disponível 24 horas, 7 dias por semana

[BOTÃO] → ← Voltar
```

---

## SEÇÃO 3 — PORTFÓLIO DE PRODUTOS

> Tela de submenu com 4 cards de navegação.

```
[HERO-IMAGEM] → Foto de E-Crane em operação com grab
[LABEL-TOPO] → Produtos
[TÍTULO] → Portfólio de Produtos

[CARD 1] → Superiores (Uppers)
[DETALHE] → Sete séries de equipamentos (700B a 4000C) baseadas em capacidade e alcance.

[CARD 2] → Bases (Lowers)
[DETALHE] → Opções fixas (pedestal), móveis (trilhos ou esteiras) e flutuantes.

[CARD 3] → Grabs e Implementos
[DETALHE] → Soluções customizadas com sistemas de engate rápido e acessórios diversos.

[CARD 4] → Tabela Técnica
[DETALHE] → Especificações detalhadas de capacidade e alcance por série e modelo.

[BOTÃO] → ← Voltar
```

---

### 3.1 — SUPERIORES (UPPERS)

```
[TÍTULO] → Superiores (Uppers)

[CORPO 1]
O conceito de design modular da E-Crane Worldwide permite que nossos engenheiros desenvolvam soluções personalizadas com base em componentes centrais já comprovados. São oferecidas sete séries de equipamentos, definidas conforme a capacidade operacional: 700B, 1000C, 1500C, 1800C, 2000C, 3000C e 4000C.

[CORPO 2]
Dentro de cada série, estão disponíveis quatro modelos com diferentes configurações de lança e braço, permitindo atender a variados alcances operacionais. As séries 700B a 2000C são classificadas como E-Handler, enquanto as séries 3000C e 4000C são classificadas como Superlift, para as operações de maior porte.

[SÉRIES]
• 700B → Capacidade de grab até 6,4 ton | Alcance até 31,7 m
• 1000C → Capacidade de grab até 10 ton | Alcance até 38,2 m
• 1500C → Capacidade de grab até 15 ton | Alcance até 38,2 m
• 1800C → Capacidade de grab até 20 ton | Alcance até 42,1 m
• 2000C → Capacidade de grab até 24 ton | Alcance até 42,1 m
• 3000C → Capacidade de grab até 34 ton | Alcance até 45 m [SUPERLIFT]
• 4000C → Capacidade de grab até 47 ton | Alcance até 47,8 m [SUPERLIFT]

[BOTÃO] → ← Voltar
```

---

### 3.2 — BASES (LOWERS)

```
[TÍTULO] → Bases (Lowers)

[CORPO 1]
Cada E-Crane é projetado sob medida para atender necessidades específicas de operação. Nossos engenheiros trabalham em conjunto com o usuário final para desenvolver soluções que maximizem a eficiência operacional.

[CORPO 2]
As bases fixas tipo pedestal ocupam área mínima de instalação, enquanto as opções autoportantes reduzem a necessidade de obras civis. As versões móveis incluem sistemas sobre trilhos com acionamento hidráulico, bem como esteiras (crawler) com alimentação elétrica (plug-in) e/ou grupo gerador a diesel.

[CORPO 3]
O design equilibrado torna o E-Crane igualmente ideal para aplicações flutuantes, como barcaças e embarcações — uma vantagem única em relação aos guindastes convencionais.

[TIPOS DE BASE]
• Pedestal fixo → área mínima, instalação permanente
• Autoportante → sem necessidade de obras civis
• Sobre trilhos → mobilidade com acionamento hidráulico
• Esteiras (crawler) → deslocamento elétrico ou a diesel
• Flutuante → barcaças e embarcações

[BOTÃO] → ← Voltar
```

---

### 3.3 — GRABS E IMPLEMENTOS

```
[TÍTULO] → Grabs e Implementos

[CORPO 1]
Oferecemos soluções turnkey, incluindo implementos e grabs projetados sob medida, totalmente compatíveis com o rotador E-Crane e com sistemas de engate rápido mecânico ou hidráulico.

[CORPO 2]
Toda a linha é compatível com implementos de qualquer fabricante, e grabs existentes podem ser facilmente adaptados ao padrão de engate rápido twist-lock. Os sistemas de troca rápida permitem substituições seguras e eficientes entre diferentes implementos operacionais.

[ACESSÓRIOS DISPONÍVEIS]
• Grabs tipo clamshell (concha)
• Grabs tipo orange peel (casca de laranja)
• Ganchos simples e especiais
• Spreaders semi-automáticos
• Ímãs industriais
• Implementos especializados sob medida

[BOTÃO] → ← Voltar
```

---

### 3.4 — TABELA TÉCNICA

> Tela com tabela de capacidades por série e modelo.

```
[TÍTULO] → Tabela Técnica
[SUBTÍTULO] → Capacidade de Içamento (SWL) por Série e Modelo

[INSTRUÇÃO] → Deslize para ver todas as séries

[TABELA — CAPACIDADE DE IÇAMENTO (SWL) EM TONELADAS]

SÉRIE 700B (E-Handler)
| Modelo | Alcance Máx. (m) | Grab Máx. (ton) | Grab Mín. (ton) | Içamento Máx. (ton) | E-Handler Máx. (ton) |
|--------|-----------------|-----------------|-----------------|--------------------|--------------------|
| 4248   | 24,8            | 6,4             | 4               | 7,7                | 13,6               |
| 4264   | 26,4            | 6,2             | 4               | 7,5                | 13,6               |
| 4290   | 29              | 5,8             | 4               | 7                  | 11,9               |
| 4317   | 31,7            | 5,6             | 4               | 6,7                | 11,9               |

SÉRIE 1000C (E-Handler)
| Modelo | Alcance Máx. (m) | Grab Máx. (ton) | Grab Mín. (ton) | Içamento Máx. (ton) | E-Handler Máx. (ton) |
|--------|-----------------|-----------------|-----------------|--------------------|--------------------|
| 7290   | 29              | 10              | 7               | 12,5               | 20,3               |
| 7317   | 31,7            | 10              | 7               | 12                 | 20,3               |
| 7359   | 35,9            | 9               | 7               | 11                 | 17,3               |
| 7382   | 38,2            | 9               | 7               | 10,5               | 17                 |

SÉRIE 1500C (E-Handler)
| Modelo | Alcance Máx. (m) | Grab Máx. (ton) | Grab Mín. (ton) | Içamento Máx. (ton) | E-Handler Máx. (ton) |
|--------|-----------------|-----------------|-----------------|--------------------|--------------------|
| 10290  | 29              | 15              | 10              | 18,5               | 29,9               |
| 9317   | 31,7            | 15              | 9               | 18                 | 29,9               |
| 9359   | 35,9            | 13              | 9               | 16                 | 25,8               |
| 9382   | 38,2            | 12,5            | 9               | 15                 | 23,9               |

SÉRIE 1800C (E-Handler)
| Modelo | Alcance Máx. (m) | Grab Máx. (ton) | Grab Mín. (ton) | Içamento Máx. (ton) | E-Handler Máx. (ton) |
|--------|-----------------|-----------------|-----------------|--------------------|--------------------|
| 14317  | 31,7            | 20              | 14              | 25                 | 44,4               |
| 13359  | 35,9            | 18              | 13              | 22                 | 37                 |
| 12382  | 38,2            | 17              | 12              | 21                 | 36,2               |
| 12421  | 42,1            | 16              | 12              | 19                 | 31,4               |

SÉRIE 2000C (E-Handler)
| Modelo | Alcance Máx. (m) | Grab Máx. (ton) | Grab Mín. (ton) | Içamento Máx. (ton) | E-Handler Máx. (ton) |
|--------|-----------------|-----------------|-----------------|--------------------|--------------------|
| 15317  | 31,7            | 24              | 15              | 29                 | 52,1               |
| 14359  | 35,9            | 21              | 14              | 25                 | 43,5               |
| 13382  | 38,2            | 20              | 13              | 24                 | 42,5               |
| 13421  | 42,1            | 18,5            | 13              | 20                 | 36,9               |

SÉRIE 3000C (Superlift)
| Modelo | Alcance Máx. (m) | Grab Máx. (ton) | Grab Mín. (ton) | Içamento Máx. (ton) | Superlift Máx. (ton) |
|--------|-----------------|-----------------|-----------------|--------------------|--------------------|
| 23359  | 35,9            | 34              | 23              | 42                 | 72                 |
| 21382  | 38,2            | 32              | 21              | 39                 | 70,5               |
| 19421  | 42,1            | 30              | 19              | 36                 | 60                 |
| 18450  | 45              | 29              | 18              | 35                 | 60                 |

SÉRIE 4000C (Superlift)
| Modelo | Alcance Máx. (m) | Grab Máx. (ton) | Grab Mín. (ton) | Içamento Máx. (ton) | Superlift Máx. (ton) |
|--------|-----------------|-----------------|-----------------|--------------------|--------------------|
| 30382  | 38,2            | 47              | 30              | 58                 | 96,9               |
| 28421  | 42,1            | 43              | 28              | 52                 | 84,2               |
| 27450  | 45              | 41              | 27              | 50                 | 83,8               |
| 26478  | 47,8            | 39              | 26              | 47                 | 74,4               |

[NOTA] → SWL = Safe Working Load (Carga de Trabalho Segura)
[NOTA] → Para especificações completas, consulte nossa equipe técnica.

[BOTÃO] → ← Voltar
```

---

## SEÇÃO 4 — SETORES DE ATUAÇÃO

> Tela de submenu com 4 cards de navegação.

```
[HERO-IMAGEM] → Foto de E-Crane em porto com granéis
[LABEL-TOPO] → Setores
[TÍTULO] → Setores de Atuação

[CARD 1] → Reciclagem de Metais (Sucata)
[DETALHE] → Alimentação de trituradores e descarregamento de barcaças em siderúrgicas e centros de reciclagem.

[CARD 2] → Dragagem
[DETALHE] → Operações subaquáticas de precisão com o E-Dredger.

[CARD 3] → Granéis Sólidos
[DETALHE] → Movimentação de minérios, grãos, carvão, cimento e biomassa.

[CARD 4] → Granel em Contêineres (CBH)
[DETALHE] → Logística otimizada para exportação de granéis em contêineres.

[BOTÃO] → ← Voltar
```

---

### 4.1 — RECICLAGEM DE METAIS (SUCATA)

```
[TÍTULO] → Reciclagem de Metais

[DESTAQUE]
Movimentação de sucata.

[CORPO 1 — Descrição do Setor]
O setor de manuseio de sucata metálica abrange uma ampla variedade de metais. Entre os mais reciclados estão: aço, ferro, chumbo, alumínio, cobre, aço inoxidável e zinco. Os metais podem ser divididos em duas categorias principais: ferrosos e não ferrosos.

A E-Crane Worldwide desenvolve soluções de última geração para o manuseio de sucata, projetadas tanto para siderúrgicas quanto para centros de reciclagem — tendo como produto central o E-Crane, ideal para operações pesadas de manuseio de sucata.

[CORPO 2 — Vantagens do E-Crane]
O versátil E-Crane lida com qualquer operação de sucata que você colocar sob sua lança: descarregamento de navios e barcaças, recebimento de trens e caminhões — todos são descarregados com facilidade.

O E-Crane também se destaca em tarefas específicas, como alimentação de trituradores, preenchimento de tesouras e enfardadeiras e carregamento de cestos de carga.

[CORPO 3]
Nossos engenheiros trabalharam com centenas de siderúrgicas, terminais e instalações de processamento de sucata em todo o mundo, acumulando décadas de experiência no setor. Com esse know-how, nenhum desafio de içamento, clima ou logística é impossível para o E-Crane — projetado e construído para fornecer a solução ideal de manuseio de sucata.

[BOTÃO] → ← Voltar
```

---

### 4.2 — DRAGAGEM

```
[TÍTULO] → Dragagem

[DESTAQUE]
Desempenho em que você pode confiar.

[CORPO 1 — Descrição do Setor]
Dragagem envolve escavação subaquática. A draga é uma máquina que retira sedimentos do fundo de cursos d'água ou é utilizada na extração de materiais submersos.

O "E-Dredger" incorpora o princípio de equilíbrio superbalanceado do E-Crane, proporcionando operações suaves, eficientes e energeticamente econômicas em dragagem e aplicações correlatas.

[CORPO 2 — Aplicações Típicas]
• Manutenção de canais e vias navegáveis
• Salvamento de embarcações
• Construção de diques e molhes
• Recuperação de áreas de terra
• Proteção de praias e aterros

[CORPO 3 — Vantagens do E-Crane]
O design equilibrado do guindaste minimiza o risco de tombamento, mesmo com carga máxima. Esse equilíbrio superior permite que o guindaste seja instalado em praticamente qualquer tipo de barcaça, com ou sem estacas de apoio (spud poles).

O uso de grab hidráulico garante maior força de fechamento, resultando em desempenho superior na escavação. A conexão fixa com o grab torna o E-Crane ideal para operações subaquáticas com precisão milimétrica.

[BOTÃO] → ← Voltar
```

---

### 4.3 — GRANÉIS SÓLIDOS

```
[TÍTULO] → Granéis Sólidos

[DESTAQUE]
Movimentação de materiais a granel.

[CORPO 1 — Descrição do Setor]
No manuseio de materiais a granel, a E-Crane Worldwide foca em materiais secos a granel. Os E-Cranes são utilizados em toda a cadeia de suprimentos de materiais a granel, desde a mineração até o transporte e processamento.

[MATERIAIS TIPICAMENTE MANUSEADOS]
• Bauxita e minerais a granel (areia, cascalho, cobre, calcário, sal)
• Cimento e produtos químicos (fertilizantes, grânulos plásticos)
• Carvão e biomassa
• Produtos alimentícios secos (farinha, amendoim, açúcar, sementes)
• Grãos (trigo, milho, arroz, cevada, aveia, centeio, soja)
• Ferro e ferro-ligas, ferro-gusa, sucata metálica
• Cavacos de madeira

[CORPO 2 — Vantagens do E-Crane]
A linha E-Crane oferece flexibilidade e versatilidade excepcionais. As bases (lowers) estão disponíveis em pedestais fixos ou autoportantes, bem como em modelos sobre trilhos ou esteiras, com portais altos ou baixos.

Os E-Cranes são projetados para operações contínuas e apresentam excelente taxa de preenchimento do grab, mesmo ao manusear materiais de difícil movimentação, devido à força de empurrar para baixo. A ausência de cabos, aliada à conexão mecânica entre grab e lança, permite operar com precisão sob as bordas de escotilhas.

[BOTÃO] → ← Voltar
```

---

### 4.4 — GRANEL EM CONTÊINERES (CBH)

```
[TÍTULO] → Manuseio de Granel em Contêineres

[DESTAQUE]
Containerized Bulk Handling (CBH)

[CORPO 1 — Descrição do Setor]
A tecnologia Containerized Bulk Handling (CBH) é aplicada em portos especializados em exportação de granel. Com essa solução, o material a granel pode ser transportado por contêineres de minas ou unidades de produção remotas, armazenado temporariamente no terminal de exportação sem necessidade de descarregar o contêiner, e então transferido diretamente para o cais para carregamento em navios.

[CORPO 2 — Benefícios Principais]
Esse conceito permite otimizar toda a cadeia logística, desde a extração até o embarque, usando tecnologia padronizada de contêineres e minimizando o manuseio (re-handling) dos contêineres.

Principais benefícios da tecnologia CBH:
• Redução significativa de custos operacionais do terminal
• Aumento geral da performance do terminal — estudos indicam economias de 20 a 50% em equipamentos e mão de obra
• Sustentável e ecológico (baixas emissões de poeira e sem empilhamento a céu aberto)
• Evita perdas de carga: elimina 100% da perda de material

[CORPO 3 — Vantagens do E-Crane]
O E-Crane recolhe os contêineres diretamente do trailer usando um spreader giratório. Todo o conteúdo do contêiner é despejado no porão do navio por meio da rotação controlada do contêiner. Os contêineres são abaixados suavemente no porão — processo conhecido como "soft loading" — e rapidamente recolocados no trilho sem necessidade de outro equipamento no cais.

[BOTÃO] → ← Voltar
```

---

## SEÇÃO 5 — SUPORTE E CONTATO

> Tela de submenu com FAQ em accordion e informações de contato.

```
[TÍTULO] → Suporte e Contato

[INTRO]
Estamos sempre atentos às necessidades dos nossos clientes. Dedicação sem limites — essa é a promessa que fazemos.
```

### FAQ (Perguntas Frequentes)

> Exibição em accordion (expandir/recolher). Máximo 5 perguntas na tela inicial.

```
[FAQ-P 1] → O que é o E-Crane e como ele funciona?
[FAQ-R 1]
O E-Crane é um guindaste tipo grab com design de equilíbrio único, reconhecido internacionalmente como EQUILIBRIUM CRANE®. Seu sistema de contrapeso móvel, conectado mecanicamente ao braço por um mecanismo de quatro barras, compensa automaticamente metade da carga içada em qualquer alcance operacional — resultando em até 75% menos consumo de energia que equipamentos convencionais.

[FAQ-P 2] → Quais tipos de materiais o E-Crane pode movimentar?
[FAQ-R 2]
O E-Crane é projetado para movimentar uma ampla gama de materiais: sucata metálica (aço, ferro, alumínio, cobre), granéis sólidos (minérios, grãos, carvão, cimento, biomassa), materiais de dragagem subaquática e granéis em contêineres (CBH). Cada aplicação pode ser configurada com o grab e a base mais adequados.

[FAQ-P 3] → Qual é a vida útil esperada de um E-Crane?
[FAQ-R 3]
Com manutenção adequada, os E-Cranes são projetados para operar por mais de 20 anos e ultrapassar 100.000 horas de trabalho. O design equilibrado reduz o desgaste dos componentes e amplia os intervalos de manutenção, diminuindo os custos ao longo de toda a vida útil do equipamento.

[FAQ-P 4] → A E-Crane oferece suporte técnico no Brasil?
[FAQ-R 4]
Sim. Em 2025, inauguramos o centro de serviços E-Crane Brasil, localizado em Santos - SP. Nossa equipe local oferece suporte técnico especializado, manutenção preventiva, fornecimento de peças de reposição e treinamento de operadores. Para contato: southamerica@e-crane.com | +55 (11) 99665 8001

[FAQ-P 5] → O que é a plataforma E-Care?
[FAQ-R 5]
O E-Care é nossa plataforma de monitoramento baseada em nuvem, que oferece acesso em tempo real aos dados de operação do guindaste. Com um banco de dados centralizado, o E-Care permite análise de performance, monitoramento remoto e suporte técnico integrado — 24 horas por dia, 7 dias por semana.
```

### Rede Global de Contatos

```
[SUBTÍTULO] → Nossa Rede Global

[ESCRITÓRIO 1]
[LABEL] → E-Crane Worldwide (HQ)
[ENDEREÇO] → Koekoeklaan 53, 9991 Adegem, Belgium
[EMAIL] → info@e-crane.com
[TELEFONE] → +32 9 378 04 44

[ESCRITÓRIO 2]
[LABEL] → E-Crane International Europa
[ENDEREÇO] → Argon 15G, 4751XC Oud Gastel, The Netherlands
[EMAIL] → europe@e-crane.com
[TELEFONE] → +31 165 320100

[ESCRITÓRIO 3]
[LABEL] → E-Crane América do Norte e Central
[ENDEREÇO] → 1332 Freese Works Place, Galion, OH 44833, USA
[EMAIL] → usa@e-crane.com
[TELEFONE] → +1 419 468 0090

[ESCRITÓRIO 4]
[LABEL] → E-Crane International Ásia
[ENDEREÇO] → 3 Pickering Street, Nankin Row #02-38, Singapore 048660
[EMAIL] → asia@e-crane.com
[TELEFONE] → +65 690 953 95

[ESCRITÓRIO 5]
[LABEL] → E-Crane International América do Sul
[ENDEREÇO] → Rua Cypriano Barata, 80 — Santos, SP — Brasil
[EMAIL] → southamerica@e-crane.com
[TELEFONE] → +55 (11) 99665 8001

[SITE] → www.e-crane.com

[BOTÃO] → ← Voltar
```

---

## NOTAS PARA O DESENVOLVEDOR (CLAUDE.md)

> Estas anotações devem ser incorporadas ao CLAUDE.md para orientar o desenvolvimento.

```
### SOBRE O COPY.MD
- Este arquivo é a fonte única de verdade para todos os textos do totem.
- Sempre consultar copy.md antes de usar qualquer placeholder (Lorem ipsum).
- Os textos estão adaptados para leitura em totem: parágrafos curtos, linguagem direta.

### HIERARQUIA DE NAVEGAÇÃO
Tela 0 (Boas-vindas) → Tela 1 (Home) → Seção (1-5) → Subseção → Conteúdo

### PADRÃO DE TELAS
- Telas de conteúdo: máximo 3 parágrafos principais + lista de bullets quando aplicável
- Cards de submenu: label + detalhe curto (1 linha)
- FAQ: accordion com pergunta + resposta expandível
- Tabela técnica: scroll horizontal habilitado

### IDIOMA
- Padrão: Português (PT-BR)
- Termos técnicos em inglês quando houver convenção internacional (E-Handler, Superlift, CBH, grab, crawler, etc.)

### DADOS DE CONTATO (usar exatamente estes)
- Brasil: southamerica@e-crane.com | +55 (11) 99665 8001 | Santos, SP
- HQ Bélgica: info@e-crane.com | +32 9 378 04 44
- Ásia: asia@e-crane.com | +65 690 953 95
- EUA: usa@e-crane.com | +1 419 468 0090
- Europa: europe@e-crane.com | +31 165 320100

### SITE OFICIAL
- www.e-crane.com

### COPYRIGHT
- © 2026 E-CRANE – Todos os direitos reservados
- Site desenvolvido por Mukutu
```
