module.exports = app =>{
	app.post('/user/getUserById', 'user.getUserById');
	app.get('/user/all', 'user.all');
	app.post('/user/login','user.login');
	app.post('/user/register','user.register');
	app.post('/user/update','user.update');
    app.post('/user/updateHeaderImg','user.updateHeaderImg');
    app.post('/user/updateClassMatesId','user.updateClassMatesId');
    app.get('/user/getRedis','user.getRedis');

}