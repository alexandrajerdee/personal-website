const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

console.log(__dirname);

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', './views')
  .get('/', (req, res) => res.render('pages/form'))
  .get('/blog', (req, res) => res.render('pages/blog'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
