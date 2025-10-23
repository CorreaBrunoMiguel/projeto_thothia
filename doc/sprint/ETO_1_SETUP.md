# 🚀 Projeto Thothia — Sprint ETO_1_SETUP

**Protocolo:** Orion ETO  
**Fase:** Setup  
**Autor:** Bruno  
**Data:** 2025-10-23

> Esta sprint marca o início operacional do Projeto Thothia, consolidando a base
> documental e a estrutura técnica mínima para iniciar o repositório e os
> módulos.

---

## 🎯 Objetivo

Consolidar o _núcleo conceitual e técnico_ de Thothia, definindo documentação,
stack, arquitetura e rituais de versionamento para iniciar o desenvolvimento
prático (Fase ETO🌗 Design).

---

## ✅ Entregas Concluídas

| Bloco        | Documento              | Status |
| ------------ | ---------------------- | ------ |
| Vision       | `INIT.md`              | ✅     |
| Vision       | `SCOPE_FAUNA_FLORA.md` | ✅     |
| Vision       | `FIELD_PROTOCOL.md`    | ✅     |
| Governance   | `TECH_STACK.md`        | ✅     |
| Architecture | `DATA_MODEL.md`        | ✅     |
| Architecture | `SYSTEM_FLOW.md`       | ✅     |
| Architecture | `TAXONOMIC_MAP.md`     | ✅     |

---

## 🧭 Próximas Ações (Setup → Design)

1. **Iniciar repositório Thothia**:
   - `main` → commit inicial (`🚀 Thothia v0.1 Initialized`)
   - criar branch `develop` (default)

2. **Gerar scaffold do projeto**:

   ```bash
   pnpm create vite thothia --template react-ts
   cd thothia
   pnpm add tailwindcss @prisma/client express
   npx prisma init
   ```

3. **Criar pastas de arquitetura Orion**

   ```tree
   /src/modules
   /src/api
   /data/prisma
   /doc
   ```

4. **Gerar schema inicial do Prisma**:
   - Tabelas: `Species`, `Record`, `Media`, `TaxonNode`, `TaxonRank`
   - Enum: `Category`, `EcologicalStatus`

5. **Configurar rota base**:
   - `GET /health` → retorna `{status:"ok"}`
   - preparar base `/species` e `/records`

6. **Criar layout inicial React**:
   - página `/catalog` → lista mock de espécies
   - página `/record/new` → form de registro

7. **Commits**:
   - `🏗️ Thothia: ETO🌗 Design — Initialized React+Node scaffold`
   - `🌿 Thothia: ETO🌗 Design — Added Prisma schema (Species+Record)`
   - `🌾 Thothia: ETO🌗 Design — Created base catalog UI`

---

## 🧩 Critérios de Conclusão

- [x] Documentação `/doc` completa e versionada
- [x] Estrutura do repositório Orion criada
- [x] Stack técnica instalada
- [ ] Schema Prisma e migrations gerados
- [ ] Servidor e frontend integrados (Hello World via API)
