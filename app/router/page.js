module.exports = app =>{
	app.get('/', app.controller.home.index);
	app.get('/about', app.controller.home.about);
}