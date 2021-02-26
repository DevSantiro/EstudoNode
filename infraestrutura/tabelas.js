class Tabelas {
  init(conexao){
    this.conexao = conexao;
    this.criarCursos();
  }

  criarCursos(){
    const sql = 'CREATE TABLE IF NOT EXISTS cursos ' 
                + '('
                + 'ID INT NOT NULL AUTO_INCREMENT,'
                + 'NOME VARCHAR(250) NOT NULL, '
                + 'PLATAFORMA VARCHAR(150),'
                + 'DESCRICAO TEXT,'
                + 'DTCADASTRO DATETIME,'
                + 'DTCONCLUSAO DATETIME,'
                + 'PRIMARY KEY (ID)'
                +')'; 
    this.conexao.query(sql, erro => {
      if(erro){
        console.log(erro);
      }
      else{
        console.log('Tabela Cursos criada com sucesso!');
      }
    });
  }
}

module.exports = new Tabelas;