const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

const markupService = require('./markerServise');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/microdata', (req, res) => {
  try {
    res.send(req.body);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});


app.listen(port, () => {
  console.log(`Server is running ${port}`);

});


app.use('/api', markupService);