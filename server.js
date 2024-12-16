const express = require('express')
const path = require('path');
const app = express()

//const bcrypt = require('bcrypt')

app.use(express.static('.'));
app.use(express.json())


// Définir la route pour l'index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
  });


  // Définir la route pour l'indexTodo.html
app.get('/todo', (req, res) => {
  res.sendFile(path.join(__dirname, 'indexTodo.html'));
});


app.listen(3001)