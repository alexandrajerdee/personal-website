const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const router = express.Router();

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'pug')
  .get('/', (req, res) => res.render('pages/form'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
