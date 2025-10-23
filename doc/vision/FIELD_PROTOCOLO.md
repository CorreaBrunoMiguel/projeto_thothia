# 📸 Projeto Thothia — Protocolo de Campo e Registro

**Protocolo:** Orion ETO  
**Documento:** FIELD_PROTOCOL  
**Autor:** Bruno  
**Fase:** ETO🚀 Setup

---

## I. Princípios Gerais

O Protocolo de Campo define as diretrizes para **observação, registro e
documentação de espécies** de forma ética, precisa e respeitosa.

> “Observar é participar da vida sem perturbá-la.” — Princípio de Thothia

---

## II. Preparação

1. **Equipamento básico:** câmera fotográfica ou celular com boa resolução;
2. **Registro contextual:** anotar local, data, clima, comportamento e ambiente;
3. **Conduta ecológica:** não remover espécimes, não interferir, evitar
   aproximação excessiva;
4. **Pesquisa posterior:** identificar a espécie por fontes científicas
   confiáveis (livros, bases online, instituições).

---

## III. Metadados de Registro

Cada foto ou observação deverá conter:

- Data e hora exata;
- Localização (latitude/longitude aproximada);
- Ambiente (costeiro, urbano, floresta, campo, etc.);
- Condições do clima (sol, nublado, chuva, vento);
- Equipamento utilizado;
- Observações complementares (som, comportamento, flora associada).

---

## IV. Padrão de Nomeação de Arquivos

```code
[YYYY-MM-DD][local][nome-comum]\_[status].jpg
```

Exemplo:

2025-10-25_palmas_bem-te-vi_nativo.jpg

---

## V. Banco de Dados de Campo

Os registros serão posteriormente importados para o **banco Thothia**, com
campos padronizados: | Campo | Tipo | Descrição | |--------|------|------------|
| id | UUID | Identificador único | | nome_comum | texto | Nome popular | |
nome_cientifico | texto | Nome científico | | categoria | enum | Fauna / Flora |
| status_ecologico | enum | nativa, invasora, etc. | | data_registro | datetime
| Data da observação | | local | texto | Local do registro | | imagem | path/url
| Caminho da foto | | observacoes | texto | Notas do autor |

---

## VI. Ética de Campo

- Não manipular ou capturar espécies.
- Evitar publicar locais exatos de espécies sensíveis.
- Respeitar a privacidade ecológica (não divulgar ninhos, refúgios ou áreas
  frágeis).

---

## VII. Continuidade

O Protocolo será revisado periodicamente conforme o crescimento do projeto e
integração com sistemas automatizados.

> “Registrar é cuidar. Fotografar é compreender.”
