module.exports = app => {
    
    const loginController = require('../controllers/login.controller');
    
    app.route('/api/logon')
         .post(loginController.login);
}
