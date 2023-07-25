const express = require('express');
const app = express();
const PORT = 3000; // You can change this to any available port you prefer

// Route to generate the multiplication table
app.get('/multiplication-table/:number', (req, res) => {
  const number = parseInt(req.params.number);
  if (isNaN(number)) {
    return res.status(400).send('Invalid number. Please provide a valid number.');
  }

  let table = '';
  for (let i = 1; i <= 10; i++) {
    const result = number * i;
    table += `${number} x ${i} = ${result}\n`;
  }

  res.send(`<pre>${table}</pre>`);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
