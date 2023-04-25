const { poolPromise } = require('../../config/database')
const md5 = require('md5');

//verifique o nome da sua tabela e os campos e altere se necessário no select

exports.login = async(dados) => {
	// console.log(dados);
// criptografa a senha para verificação
    senhaCript = md5(dados.senha)
    
    const pool = await poolPromise
    const rs = await pool
                .request()
                .query(`SELECT * FROM usuarios 
                		WHERE usuario = '${dados.usuario}' 
                		AND senha = '${senhaCript}'`);
    
    if(rs.recordset == ''){
        return null;
    }else{
        return rs.recordset;
    }
    
}
