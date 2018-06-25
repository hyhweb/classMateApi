module.exports = app =>{
    app.post('/classmates/create','classmates.create');
    app.post('/classmates/select','classmates.select');
    app.post('/classmates/getClassMatesByUserId','classmates.getClassMatesByUserId');
    app.post('/classmates/getClassMatesByUserClassmatesId','classmates.getClassMatesByUserClassmatesId');
    app.post('/classmates/getUserByClassmatesId','classmates.getUserByClassmatesId');
    app.post('/classmates/insertUserClassmatesId','classmates.insertUserClassmatesId');
    app.post('/classmates/getUserClassMessageByUserId','classmates.getUserClassMessageByUserId');

    app.post('/classmates/getUserClassMessageByUCserId','classmates.getUserClassMessageByUCserId');

    app.post('/classmates/updateUserClassMates','classmates.updateUserClassMates');
    app.post('/classmates/updateUserClassMatesByUserClassId','classmates.updateUserClassMatesByUserClassId');







}