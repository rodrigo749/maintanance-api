const Login = require('../models/login.model');
const jwt = require('jsonwebtoken');

exports.login = async(req, res) => {
    console.log(req.body);
    const login = await Login.login(req.body);

    if(login){
        console.log(`Usuário ${req.body.usuario} autenticado`);
        console.log('Adicionado token sem expiração');
        const token = jwt.sign(
              {
                id: login[0].id,
                usuario: login[0].usuario,
                perfil: login[0].perfil
              },
              req.app.get('secret'));
        console.log(token);
        res.set('x-access-token', token);
        return res.status(200).send({ message: 'Logado com sucesso!' });

    }else{
        console.log('Erro no login, nenhum token foi gerado');  
        res.status(401).send({ message: 'Erro no usuário ou senha' });
    }
}