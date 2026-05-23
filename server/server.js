const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
} else {
  console.warn('MONGODB_URI not provided. Skipping database connection.');
}

// Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const contactRoutes = require('./routes/contactRoutes');
const resumeRoute = require('./routes/resumeRoute');
const projectRoutes = require('./routes/projectRoutes');

app.use('/api/contact', contactRoutes);
app.use('/api/resume', resumeRoute);
app.use('/api/projects', projectRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
