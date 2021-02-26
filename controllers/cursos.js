const Curso = require('../models/curso')
module.exports = app => {
  app.get('/cursos', (req, res) => res.send('Servidor OK!'));
  
  app.post('/cursos', (req, res) => {
    const curso = req.body;
    Curso.adiciona(curso);
    res.send('Enviando Dados')
  })

}