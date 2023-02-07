const express = require('express')
const hbs = require('hbs');
require('dotenv').config()


const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

// servir contenido estatico
app.use( express.static('public'));


//controlador
app.get('/', (req, res) => {
  res.render('home',{
    nombre : "Erik barberon",
    titulo : "Curso de node"

  })
})


app.get('/generic', (req, res) => {
  res.render('generic',{
    nombre : "Erik barberon",
    titulo : "Curso de node"

  })
})

app.get('/elements', (req, res) => {
  res.render('elements',{
    nombre : "Erik barberon",
    titulo : "Curso de node"

  })
})

app.get('*', (req, res) => {
    res.send('404 page not found')
  })

app.listen(port,() =>{
  console.log(`Example app listening at http://localhost:${port}`)

})