module.exports = app => {
  class User extends app.Service {
    * login(username,password){
      const user  = yield app.mysql.select('user',
       { where:{
           name:`${username}`,
           password:`${password}`
         }
      })
      return user;
    }
    * register(username,password){
      const user =  yield app.mysql.insert('user',{
          name:`${username}`,
          password:`${password}`
      })
        return user;
    }
    * find(uid) {
      const user = yield app.mysql.query(`select id,name,username,email,job,city,home,header_img from user where id = ${uid}`);
     /* const user = yield app.mysql.get('user', {
          id: `${uid}`,
      });*/
      return user;
    }
    * update(row){
        const result = yield app.mysql.update('user',{
            id:row.id,
            name:row.name,
            username:row.username,
            email:row.email,
            job:row.job,
            city:row.city,
            home:row.home
        });
        return result;
    }
    * updateHeaderImg(row){
        const result = yield app.mysql.update('user',{
            id:row.id,
            header_img:row.header_img
        })
        return result;
    }
    * updateClassMatesId(row){
        const result = yield app.mysql.update('user',{
            id:row.id,
            classmates_id:row.classmates_id
        })
    }
    * all(){
      const users = yield app.mysql.query(`select * from user`)
      return users;
    }
  }
  return User;
};
