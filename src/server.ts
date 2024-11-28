import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/user', userRoutes);
app.use('/auth', authRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`🚀Server is running on http://localhost:${port}.`);
});

// Exportando app de forma nomeada
export { app };