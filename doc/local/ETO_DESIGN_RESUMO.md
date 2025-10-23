# 🌗 **Thothia — Documento de Consciência Hierárquico**

**Protocolo:** Orion ETO **Fase Atual:** ETO🌗 Design **Autor:** Bruno
**Mentoria:** Sistema Orion **Data de Início:** 23/10/2025 **Natureza:**
Registro progressivo de raciocínio técnico e conceitual (_não rastreado pelo
Git_)

---

## 🩶 FASE 1 — ETO🚀 Setup (Fundação)

**Período:** 20–23/10/2025 **Identificador:** `ETO-1` **Status:** ✅ Concluído

---

### 🪶 1. Propósito (Bloco 1)

Construir a **fundação filosófica, técnica e estrutural** do Projeto Thothia. O
foco desta fase foi **pensar, ordenar e documentar**, criando o terreno sobre o
qual o Design e o desenvolvimento poderiam evoluir com coerência.

> “O Setup deu forma ao pensamento. O Design lhe dará um corpo.”

---

### 🧭 2. Contexto de Criação

- Nascimento do **Projeto Thothia**, inspirado em **Thoth**, deus egípcio da
  sabedoria e da escrita.
- Propósito: **criar um catálogo digital da fauna e flora local**, unindo
  fotografia, taxonomia e tecnologia.
- Missão: transformar observação e pesquisa em um **registro vivo e educativo da
  biodiversidade** — respeitando ética ecológica e ciência aberta.

> “Thothia é a escrita da natureza em linguagem humana.”

---

### ⚙️ 3. Estruturação Técnica

| Elemento                     | Conteúdo Definido                                                                     |
| ---------------------------- | ------------------------------------------------------------------------------------- |
| **Protocolo**                | Orion ETO (Engineering-Through-Orion)                                                 |
| **Stack Técnica**            | React + TypeScript + Vite, TailwindCSS, Node.js + Express, Prisma + PostgreSQL/SQLite |
| **Documentação Viva**        | `/doc` estruturado em subpastas: vision, governance, architecture, sprint             |
| **Controle de Versão**       | Git + Fluxo Orion (`main → develop → feature`)                                        |
| **Ética e Sustentabilidade** | Dados verificáveis, não invasivos, ciência aberta                                     |

---

### 🧩 4. Documentos Criados

| Diretório           | Documento                              | Descrição                                                 |
| ------------------- | -------------------------------------- | --------------------------------------------------------- |
| `/doc/vision`       | `INIT.md`                              | manifesto e propósito filosófico                          |
| `/doc/vision`       | `SCOPE_FAUNA_FLORA.md`                 | delimitação e classificação inicial do catálogo           |
| `/doc/vision`       | `FIELD_PROTOCOL.md`                    | protocolo ético e técnico de observação e registro        |
| `/doc/governance`   | `TECH_STACK.md`                        | tecnologias, princípios de arquitetura e governança       |
| `/doc/architecture` | `DATA_MODEL.md`                        | modelo relacional (espécies, registros, mídia, taxonomia) |
| `/doc/architecture` | `SYSTEM_FLOW.md`                       | fluxos lógicos de API, UI e banco                         |
| `/doc/architecture` | `TAXONOMIC_MAP.md`                     | mapa de reinos e hierarquia taxonômica                    |
| `/doc/sprint`       | `ETO_1_SETUP.md`                       | sprint de planejamento inicial                            |
| `/README.md`        | manifesto técnico e público do projeto |                                                           |

---

### 🧱 5. Estrutura Base Definida

```plaintext
thothia/
│
├── /doc
│   ├── /vision
│   ├── /governance
│   ├── /architecture
│   └── /sprint
│
├── README.md
└── (repositório inicial — sem código ainda)
```

---

### 🪐 6. Git & Commit Seed

**Fluxo definido:**

```txt
main → develop → feature/*
```

**Commit de gênese:**

```txt
🌍 Thothia v0.1 — ETO🚀 Setup Initialized (Seed Commit)
```

**Ações subsequentes:**

- Push inicial para GitHub
- Criação da branch `develop` e definição como padrão
- Proteção da branch `main`

---

### 📘 7. Resultado

- Documentação base concluída
- Filosofia e propósito consolidados
- Estrutura Orion aplicada integralmente
- Repositório preparado para ETO🌗 Design

---

### 💭 8. Reflexão de Encerramento

> “No Setup, Thothia encontrou seu nome e sua alma. No Design, encontrará seu
> corpo e sua voz.”

---

## 🌉 Transição Setup → Design

**Marco:** Conclusão do Setup e autorização para início do Design. **Símbolo:**
🌓 A Lua de Thoth ascende — da contemplação à criação.

> “Agora, o código se tornará o pergaminho onde a sabedoria de Thoth será
> inscrita.”

---

## 🌗 FASE 2 — ETO🌗 Design (Início)

**Data de Início:** 23/10/2025 **Status:** 🔄 Em Progresso

---

### 🧩 BLOCO 2.1 — Scaffold Base

**Identificador:** `ETO-2.1` **Status:** Planejado → Em Gênese

---

#### 🪶 1. Propósito (Bloco 2.1)

Estabelecer o **esqueleto técnico inicial** do projeto, traduzindo a
documentação teórica do Setup em **estrutura viva de código**. É o primeiro
passo tangível rumo ao MVP — o momento em que **o repositório torna-se
organismo**.

---

#### ⚙️ 2. Escopo Técnico

| Item                 | Descrição                               |
| -------------------- | --------------------------------------- |
| **Stack**            | Node.js + Express + Prisma + TypeScript |
| **Banco (dev)**      | SQLite (local e portátil)               |
| **ORM**              | Prisma (`Species`, `Record`, `Media`)   |
| **Frontend**         | React + Vite (adiado para 2.3)          |
| **Porta padrão API** | `4000`                                  |
| **Ambiente**         | PNPM + ESM modules                      |

---

#### 🧱 3. Estrutura Planejada

```plaintext
thothia/
│
├── /src
│   ├── /api                → rotas Express
│   ├── /modules            → entidades e lógica
│   ├── /utils              → middlewares e helpers
│   └── /frontend           → camada React (futura)
│
├── /data/prisma
│   ├── schema.prisma       → modelo inicial
│   └── seeds/              → dados taxonômicos base
│
└── /doc_local              → este documento
```

---

#### 🧩 4. Componentes a Gerar

1. `/data/prisma/schema.prisma`
2. `/src/api/server.ts`
3. `/src/modules/index.ts`
4. Preparação para scaffold React (`/frontend`)

---

#### 🧬 5. Modelo de Dados (síntese)

- **Species** — entidade central (nome comum, científico, status ecológico)
- **Record** — observações ligadas a uma espécie
- **Media** — arquivos vinculados a registros

Enums:

```bash
Category { FAUNA, FLORA }
EcologicalStatus { NATIVE, ENDEMIC, EXOTIC, INVASIVE, INTRODUCED, UNKNOWN }
```

---

#### 🔩 6. Roteiro de Execução

```bash
pnpm create vite@latest thothia --template react-ts
cd thothia
pnpm add express cors dotenv @prisma/client
pnpm dlx prisma init
pnpm add -D prisma typescript ts-node nodemon
npx tailwindcss init -p
```

---

#### 🪄 7. API Inicial

```bash
GET /health   → { status: "ok", project: "Thothia" }
GET /species  → lista espécies (mock/DB)
```

---

#### 🧭 8. Commit Planejado

| Tipo       | Descrição                                                                |
| ---------- | ------------------------------------------------------------------------ |
| **Branch** | `feature/ETO-2.1-scaffold-base`                                          |
| **Commit** | `🏗️ Thothia: ETO🌗 Design — Initialized scaffold base and Prisma schema` |

---
