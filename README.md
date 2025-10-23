# 🪶 Projeto Thothia

> _“A sabedoria de Thoth se manifesta na Terra pela observação da vida.”_

---

## 🌍 Visão Geral

**Thothia** é uma enciclopédia viva da **fauna e flora regional**, nascida com o
propósito de **documentar, compreender e celebrar a biodiversidade** do
território de **Governador Celso Ramos / Palmas – SC**.

O projeto une **fotografia autoral, pesquisa biológica e tecnologia** para
registrar espécies animais e vegetais, classificando-as segundo princípios
científicos e ecológicos — distinguindo entre **nativas, endêmicas, exóticas,
introduzidas e invasoras**.

Desenvolvido sob o **Protocolo Orion ETO (Engineering-Through-Orion)**, Thothia
é tanto um projeto técnico quanto uma obra viva, unindo **ciência, filosofia e
arte**.

---

## 🏺 Origem do Nome

O nome **Thothia** deriva de **Thoth**, o deus egípcio da sabedoria, escrita e
medição da natureza. Assim como Thoth registrava os eventos do cosmos, o projeto
Thothia busca **registrar a biodiversidade da Terra**, traduzindo-a em dados,
imagens e conhecimento acessível.

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

O sistema foi projetado segundo os **princípios de arquitetura viva** do Orion:

1. **Modularidade orgânica:** cada entidade é um organismo independente e
   interconectado.
2. **Documentação viva:** código e `/doc` crescem juntos.
3. **Sustentabilidade técnica:** tecnologias leves, duráveis e de baixo impacto.
4. **Transparência ecológica:** dados verificáveis, éticos e acessíveis.

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

**Licença:** MIT **Direitos de imagem:** Fotografias originais de Bruno, uso
livre para fins educativos e científicos. **Princípios éticos:**

- Não interferir em habitats naturais.
- Não divulgar coordenadas exatas de espécies sensíveis.
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

### 📜 Versão

Thothia v0.1 — ETO🚀 Setup Initialized

---
