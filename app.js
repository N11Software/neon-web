const express = require('express');
const app = express();
const path = require('path');
const req = require('express/lib/request');
const res = require('express/lib/response');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.get('/', (req,res) => res.render('index'));

app.listen(8000, () => console.log('NEON Web client is running on port 8000'));
