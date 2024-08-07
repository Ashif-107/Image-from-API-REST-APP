const express = require('express');
const path = require('path');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/navigate', (req, res) => {
  const value = req.query.value; 
  if (value) {
    res.redirect(`/${value}`); 
  } else {
    res.redirect('/');
  }
});

app.get('/:dynamicValue', async (req, res) => {
  const dynamicValue = req.params.dynamicValue;
  try {
    const apiKey = 'UJkjBUfFZ94SsLlS2UpR_Mvkmop7ZafEDOY_GWPiS4A';
    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      params: {
        client_id: apiKey,
        query: dynamicValue,
        per_page: 6,
      },
    });
    const urls = response.data.results;
    res.render('pic', { urls });
  } catch (error) {
    console.error(error);
    res.render('pic', { urls: [] });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
