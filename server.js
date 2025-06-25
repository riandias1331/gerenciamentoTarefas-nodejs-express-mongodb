const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connectDB = require('./src/config/db.js');
const taskRoutes = require('./taskRoutes.js');
// const authRoutes = require('./authRoutes');

const port = process.env.PORT || 3333;

dotenv.config();
connectDB(app);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api/auth', authRoutes);
app.use(taskRoutes);

app.on("Database", () => {
  app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
  });
})
