const conexao = require('../infraestrutura/conexao')
const moment  = require('moment')
class Curso {
  adiciona(curso){
    const dtcadastro = moment().format('YYYY-MM-DD HH:MM:SS')
    const dtconclusao = moment(curso.dtconclusao, 'DD/MM/YYYY HH:MM:SS').format('YYYY-MM-DD HH:MM:SS')
    const cursoDatado = {...curso, dtconclusao, dtcadastro}
    const sql = 'INSERT INTO cursos SET ?';
    
    conexao.query(sql, cursoDatado, (erro, resultados) => {
      if(erro){
        console.log(erro)
      }
      else{
        console.log(resultados)
      }
    });
  }
}

module.exports = new Curso