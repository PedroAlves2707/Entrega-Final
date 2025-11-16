import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const QUOTES = [
  {
    content: 'O sucesso é a soma de pequenos esforços repetidos dia após dia.',
    author: 'Robert Collier'
  },
  {
    content: 'A disciplina é a ponte entre metas e conquistas.',
    author: 'Jim Rohn'
  },
  {
    content: 'Comece onde você está. Use o que você tem. Faça o que você pode.',
    author: 'Arthur Ashe'
  }
];

app.get('/api/quote', (req, res) => {
  const random = QUOTES[Math.floor(Math.random() * QUOTES.length)];
  res.json(random);
});

app.get('/api/health', (req, res) => {
  res.json({ ok: true });
});

app.listen(PORT, () => {
  console.log(`API on :${PORT}`);
});
