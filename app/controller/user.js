'use strict';
module.exports = app => {
  class UserController extends app.Controller {
      * getRedis() {
          const { ctx, app } = this;
          // set
          //yield app.redis.set('foo', 'bar');
          // get
          //ctx.body = yield app.redis.get('runoob');
          ctx.body={
            name:'hong'
          }
      }
    * login(ctx){
      const username = ctx.request.body.username;
      const password = ctx.request.body.password;
      const userInfo = yield ctx.service.user.login(username,password)
      if(userInfo.length ==1){
        ctx.body = {
          data:{
              id:userInfo[0].id,
              name:userInfo[0].name
          },
          success:true
        }
      }else{
         ctx.body = {
          success:false
        }
      }
     // ctx.body = userInfo;
    }
    * register(ctx){
        const username = ctx.request.body.username;
        const password = ctx.request.body.password;
        const userInfo = yield ctx.service.user.login(username,password);

        if(userInfo.length ==0){
            const registerUserInfo = yield ctx.service.user.register(username,password);
            ctx.body = app.getResult(registerUserInfo,true)
        }else{
            ctx.body = app.getResult([],false,'用户已存在，请重新注册');
        }
    }
     * getUserById(ctx) {
		  const userId = ctx.request.body.id;
		  const userInfo = yield ctx.service.user.find(userId);
		  ctx.body = userInfo[0];
		}
    * update(){
        const { ctx, service } = this;
        const row = ctx.request.body;
        const result = yield service.user.update(row);
        ctx.body = result;
    }
    * updateHeaderImg(){
        const { ctx, service } = this;
        const row = ctx.request.body;
        const result = yield service.user.updateHeaderImg(row);
        ctx.body = result;
    }
    * updateClassMatesId(){
        const { ctx, service } = this;
        const row = ctx.request.body;
        const result = yield service.user.updateClassMatesId(row);
        ctx.body = result;

    }
    *all(ctx){
      const userList = yield ctx.service.user.all();
      ctx.body = userList
    }
  }
  return UserController;
};
