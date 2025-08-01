require('dotenv').config();
const express = require('express');
const uploadRoutes = require('./routes/upload.routes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use('/api', uploadRoutes);

app.get('/', (req, res) => res.send('File Upload Service Running'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
