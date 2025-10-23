import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Health Check
app.get('/health', (_, res) => {
  res.json({
    status: 'ok',
    project: 'Thothia',
    db: process.env.DATABASE_URL?.split('@')[1].split('?')[0],
  });
});

// Listar espécies
app.get('/species', async (_, res) => {
  try {
    const species = await prisma.species.findMany();
    res.json(species);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Falha ao buscar espécies.' });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () =>
  console.log(`🌿 Thothia API em execução → http://localhost:${PORT}`)
);
