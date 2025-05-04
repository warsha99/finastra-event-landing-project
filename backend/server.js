// server.js
const express = require('express');
const fs = require('fs').promises;
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const DATA_FILE = path.join(__dirname, 'registrations.json');

// Initialize empty array if file doesn't exist
async function initDataFile() {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, '[]');
  }
}

app.post('/api/register', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    
    // Basic validation
    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required' });
    }

    // Read existing data
    const data = JSON.parse(await fs.readFile(DATA_FILE));
    
    // Add new registration
    const newEntry = {
      id: Date.now(),
      name,
      email,
      message: message || '',
      date: new Date().toISOString()
    };
    
    data.push(newEntry);
    
    // Save back to file
    await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2));
    
    res.status(201).json(newEntry);
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Initialize and start server
initDataFile().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Registrations saved to: ${DATA_FILE}`);
  });
});