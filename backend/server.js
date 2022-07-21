const express = require('express');
require('colors');
require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = 4000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) =>
  res.status(200).json({ message: 'Server running....' })
);

app.use('/api/task', require('./routes/taskRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

// Serve frontend

app.use(errorHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
