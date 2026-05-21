const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())

const movies = [
  { id: 1, name: 'Batman' },
  { id: 2, name: 'Spiderman' },
  { id: 3, name: 'Avengers' },
  { id: 4, name: 'Superman' },
]

app.get('/movies', (req, res) => {

  const search = req.query.search || ''

  const filtered = movies.filter(movie =>
    movie.name.toLowerCase().includes(search.toLowerCase())
  )

  res.json(filtered)

})

app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor corriendo en puerto 3000')
})