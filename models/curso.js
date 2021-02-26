const conexao = require('../infraestrutura/conexao')
const moment  = require('moment')
class Curso {
  adiciona(curso){
    const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
    const data = moment(curso.dtcadastro, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
    const cursoDatado = {...curso, dataCriacao, data}
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