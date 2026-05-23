const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
  const file = path.join(__dirname, '../public/resume.pdf');
  res.download(file, 'Nishok_S_Resume.pdf', (err) => {
    if (err) {
      res.status(404).json({ error: 'Resume not found' });
    }
  });
});

module.exports = router;
