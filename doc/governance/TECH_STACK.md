# ⚙️ Projeto Thothia — Núcleo Técnico e Stack de Engenharia

**Protocolo:** Orion ETO (Engineering-Through-Orion) **Fase:** 🚀 ETO Setup
**Autor:** Bruno **Mentoria:** Sistema Orion **Data:** 23/10/2025

---

## 🌍 I. Propósito da Camada Técnica

O núcleo técnico de Thothia tem como objetivo fornecer uma base estável, moderna
e escalável para:

- o **registro e visualização da biodiversidade**,
- a **gestão de dados taxonômicos e ecológicos**,
- e a **expansão futura para ferramentas educativas e de IA ambiental**.

> _A tecnologia aqui não é um fim, mas o meio pelo qual a Terra ganha voz
> digital._

---

## 🧩 II. Princípios de Arquitetura Orion

| Princípio                    | Descrição                                                                                                  |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **Modularidade Viva**        | Cada entidade (espécie, registro, usuário, imagem) deve existir como módulo autônomo e expansível.         |
| **Documentação Integrada**   | O código sempre se explica: docstrings, diagramas e metadados em `/doc` refletem o estado real do sistema. |
| **Sustentabilidade Técnica** | Simplicidade, baixo consumo e foco em tecnologias leves e de longo ciclo.                                  |
| **Transparência de Dados**   | Toda informação registrada deve ter rastreabilidade e origem verificável.                                  |
| **Expansão Orgânica**        | A arquitetura deve crescer conforme o ecossistema, sem ruptura estrutural.                                 |

---

## ⚙️ III. Stack Tecnológica Inicial (MVP)

| Camada                       | Tecnologia                                           | Função                                              | Observações                                                 |
| ---------------------------- | ---------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------- |
| **Frontend**                 | **React + TypeScript + Vite**                        | Interface dinâmica, leve e reativa                  | Integrado com TailwindCSS e componentes shadcn              |
| **Estilo**                   | **TailwindCSS**                                      | Estilo orgânico e minimalista                       | Cores inspiradas em tons naturais (terra, folha, céu)       |
| **Backend**                  | **Node.js (Express)**                                | API REST modular e extensível                       | Estruturado por entidades (Species, Record, Image)          |
| **Banco de Dados**           | **PostgreSQL (produção)** / **SQLite (dev)**         | Persistência relacional e compatível com Prisma ORM | Taxonomia modelada em hierarquia                            |
| **ORM / Modelagem**          | **Prisma**                                           | Abstração de dados e migrações consistentes         | Adaptação futura para GraphQL                               |
| **Armazenamento de Imagens** | **Cloudinary / local upload**                        | Gerenciamento de imagens e metadados EXIF           | Integrável a reconhecimento de imagem no futuro             |
| **Controle de Versão**       | **Git + Orion Branching (main → develop → feature)** | Fluxo ETO padronizado                               | Commits semânticos e commits simbólicos (emoji + bloco ETO) |
| **Documentação Viva**        | **Orion /doc System + Markdown + Mermaid.js**        | Base integrada de conhecimento técnico e conceitual | Gera mapas e diagramas automatizados                        |
| **Deploy Inicial**           | **Vercel / Railway**                                 | Hospedagem frontend + backend de baixo custo        | Ideal para MVP rápido e estável                             |

---

## 🧠 IV. Estrutura Lógica de Entidades (pré-diagrama)

1. **Species** — representa uma espécie (fauna ou flora).
2. **Record** — observação individual (foto, data, local).
3. **Taxonomy** — estrutura hierárquica de classificação (Reino → Espécie).
4. **Media** — metadados da imagem (EXIF, autor, equipamento).
5. **User** — (opcional) perfil do observador.

> Cada módulo será representado em `/src/modules/{entidade}` e documentado em
> `/doc/architecture`.

---

## 🔐 V. Ética e Sustentabilidade Digital

- Evitar rastreamento invasivo e coleta desnecessária de dados.
- Garantir o uso responsável de imagens da natureza.
- Fomentar ciência aberta e dados acessíveis.
- Priorizar energia verde e hospedagem neutra em carbono quando possível.

> _A tecnologia de Thothia não domina o mundo natural — ela o escuta._
