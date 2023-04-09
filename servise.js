const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.PORT || 3000;

const markupService = require('./markerServise');

app.get("/",(reg,res)=>{
	res.end("hello")
})

app.use(bodyParser.json());

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