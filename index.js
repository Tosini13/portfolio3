const express = require('express');
const bodyParser = require('body-parser');

const app = express();

//MIDDLEWARES:
app.use(bodyParser.json());

app.use('/api', require('./routes/api'));

app.use((err, req, res, next) => {
    res.status(422).send({ error: err.message });
})

app.listen(1300, () => {
    console.log('listen 1300')
})