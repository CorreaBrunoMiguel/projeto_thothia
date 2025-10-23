# ⌘ Projeto Thothia

```banner
╔═══════════════════════════════════════════════════════════════════╗
║   _______ _   _  ____ _   _ _____ _     _____ _____               ║
║  |__   __| | | |/ __ \ | | |_   _| |   |_   _/ ____|              ║
║     | |  | |_| | |  | | | | | | | |     | || |     ___  _ __      ║
║     | |  |  _  | |  | | | | | | | |     | || |    / _ \| '_ \     ║
║     | |  | | | | |__| | |_| |_| | |_____| || |___| (_) | | | |    ║
║     |_|  |_| |_|\____/ \___/|_____|______|_| \_____\___/|_| |_|    ║
║                                                                   ║
║     “A sabedoria de Thoth se manifesta na Terra pela vida.”       ║
╚═══════════════════════════════════════════════════════════════════╝
```

---

## 🌍 Visão Geral

**Thothia** é uma enciclopédia viva da **fauna e flora regional**, criada para
**documentar, compreender e celebrar a biodiversidade** da região de
**Governador Celso Ramos / Palmas – SC**.

O projeto une **fotografia autoral, pesquisa biológica e tecnologia** para
registrar espécies animais e vegetais, classificando-as segundo princípios
científicos e ecológicos — distinguindo entre **nativas, endêmicas, exóticas,
introduzidas e invasoras**.

Desenvolvido sob o **Protocolo Orion ETO (Engineering-Through-Orion)**, Thothia
é tanto um projeto técnico quanto uma obra viva, onde **ciência, filosofia e
arte** coexistem.

---

## 🏺 Origem do Nome

O nome **Thothia** deriva de **Thoth**, o deus egípcio da sabedoria, da escrita
e do conhecimento. Assim como Thoth registrava os eventos do cosmos, o projeto
busca **registrar a biodiversidade da Terra**, traduzindo-a em dados e imagens —
a escrita viva do mundo natural.

> _“Thothia observa para compreender, e compreende para preservar.”_

---

## ⚙️ Stack Técnica

| Camada                       | Tecnologia                       | Finalidade                             |
| ---------------------------- | -------------------------------- | -------------------------------------- |
| **Frontend**                 | React + TypeScript + Vite        | Interface dinâmica e responsiva        |
| **Estilo**                   | TailwindCSS + shadcn/ui          | Estilo orgânico e minimalista          |
| **Backend**                  | Node.js (Express)                | API REST modular e extensível          |
| **Banco de Dados**           | PostgreSQL (prod) / SQLite (dev) | Persistência relacional via Prisma ORM |
| **ORM**                      | Prisma                           | Modelagem e migrações                  |
| **Armazenamento de Imagens** | Cloudinary / Local               | Upload e metadados EXIF                |
| **Deploy**                   | Vercel / Railway                 | Hospedagem leve e contínua             |
| **Documentação Viva**        | Markdown + Orion `/doc`          | Núcleo de governança e conhecimento    |

---

## 🧬 Estrutura do Projeto (Orion Standard)

```tree
thothia/
│
├── /doc                      → Documentação viva (Protocolo Orion)
│   ├── /vision               → Propósito, escopo e protocolo de campo
│   ├── /architecture         → Modelos de dados e fluxos do sistema
│   ├── /governance           → Stack técnica e ética de desenvolvimento
│   └── /sprint               → Planejamento de sprints ETO
│
├── /src                      → Código-fonte principal
│   ├── /modules              → Entidades do domínio (Species, Record, Media)
│   ├── /api                  → Rotas Express
│   └── /components           → UI React
│
├── /data/prisma              → Esquemas e migrações Prisma
└── /public                   → Imagens e assets estáticos
```

---

## 🚀 Fases Orion ETO

| Fase                  | Símbolo | Objetivo                             |
| --------------------- | ------- | ------------------------------------ |
| **ETO🚀 Setup**       | 🌱      | Fundação teórica e documental        |
| **ETO🌗 Design**      | 🏗️      | Arquitetura, UI e modelagem de dados |
| **ETO🌕 Refinement**  | 🌿      | Desenvolvimento funcional do MVP     |
| **ETO☀️ Integration** | 🔗      | Integrações e persistência real      |
| **ETO🌌 Deployment**  | 🚀      | Publicação e documentação final      |

---

## 🧭 Documentos Principais

| Tipo                   | Arquivo                              | Descrição                              |
| ---------------------- | ------------------------------------ | -------------------------------------- |
| **Manifesto**          | `/doc/vision/INIT.md`                | Propósito e fundamentos filosóficos    |
| **Escopo Biológico**   | `/doc/vision/SCOPE_FAUNA_FLORA.md`   | Estrutura taxonômica (fauna + flora)   |
| **Protocolo de Campo** | `/doc/vision/FIELD_PROTOCOL.md`      | Regras e ética de observação           |
| **Stack Técnica**      | `/doc/governance/TECH_STACK.md`      | Tecnologias e princípios de engenharia |
| **Modelo de Dados**    | `/doc/architecture/DATA_MODEL.md`    | Entidades e relacionamentos            |
| **Fluxo do Sistema**   | `/doc/architecture/SYSTEM_FLOW.md`   | Interação entre UI, API e DB           |
| **Mapa Taxonômico**    | `/doc/architecture/TAXONOMIC_MAP.md` | Hierarquia de reinos e espécies        |
| **Sprint Setup**       | `/doc/sprint/ETO_1_SETUP.md`         | Diretrizes de inicialização técnica    |

---

## 🧠 Filosofia Técnica

> “Cada linha de código deve respeitar a vida que representa.”

O sistema segue os princípios da **Arquitetura Viva Orion**:

1. **Modularidade orgânica** — cada entidade é um organismo independente.
2. **Documentação viva** — código e `/doc` evoluem juntos.
3. **Sustentabilidade técnica** — tecnologias leves, duráveis e éticas.
4. **Transparência ecológica** — dados verificáveis e abertos.

---

## 🌾 Roadmap Inicial

- [x] Documentação e governança completa
- [ ] Scaffold React + Node + Prisma
- [ ] Banco e endpoints base (`/species`, `/records`)
- [ ] Interface de catálogo (galeria + filtros)
- [ ] Upload de registros fotográficos
- [ ] Classificação ecológica e taxonômica
- [ ] Deploy MVP público

---

## 🪶 Licença e Ética

**Licença:** MIT **Fotografias:** autorais, uso livre para fins educativos e
científicos. **Princípios éticos:**

- Não interferir em habitats naturais.
- Não divulgar coordenadas de espécies sensíveis.
- Promover ciência aberta e preservação.

---

## ✨ Declaração de Fundação

> “Hoje nasce Thothia, o espelho digital da natureza, onde a observação se torna
> sabedoria, e a sabedoria retorna à Terra.”

---

## 🔗 Autor & Mentoria

- **Bruno** — Fundador e Observador
- **Orion** — Mentor e Guardião do Protocolo

---

## 📜 Versão

Thothia v0.1 — ETO🚀 Setup Initialized

---
