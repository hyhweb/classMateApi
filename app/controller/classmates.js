module.exports = app =>{
    class classmatesController extends app.Controller {
        * create(){
            const { ctx, service } = this;
            const row = ctx.request.body;
            const result = yield service.classmates.create(row);
            ctx.body = result;
        }
        * select(){
            const { ctx, service } = this;
            const row = ctx.request.body;
            const result = yield service.classmates.select(row);
            ctx.body = result;
        }

        * getClassMatesByUserId(){
            const { ctx, service } = this;
            const row = ctx.request.body;
            const result = yield service.classmates.getClassMatesByUserId(row);
            ctx.body = result;
        }
        * getClassMatesByUserClassmatesId(){
            const { ctx, service } = this;
            const row = ctx.request.body;
            const result = yield service.classmates.getClassMatesByUserClassmatesId(row);
            ctx.body = result;
        }

        * getUserByClassmatesId(){
            const { ctx, service } = this;
            const row = ctx.request.body;
            const result = yield service.classmates.getUserByClassmatesId(row);
            ctx.body = result;
        }

        * getUserClassMessageByUserId(){
            const { ctx, service } = this;
            const row = ctx.request.body;
            const result = yield service.classmates.getUserClassMessageByUserId(row);
            ctx.body = result;
        }

        * getUserClassMessageByUCserId(){
            const { ctx, service } = this;
            const row = ctx.request.body;
            const result = yield service.classmates.getUserClassMessageByUCserId(row);
            ctx.body = result;
        }

        * updateUserClassMates(){
            const { ctx, service } = this;
            const row = ctx.request.body;
            const result = yield service.classmates.updateUserClassMates(row);
            if(result.affectedRows ==1){
                ctx.body = app.getResult(result,true);
            }else {
                ctx.body = app.getResult(result,false);
            }
        }
        * updateUserClassMatesByUserClassId(){
            const { ctx, service } = this;
            const row = ctx.request.body;
            const result = yield service.classmates.updateUserClassMatesByUserClassId(row);
            if(result.affectedRows ==1){
                ctx.body = app.getResult(result,true,'加入成功');
            }else {
                ctx.body = app.getResult(result,false,'加入失败');
            }

        }




        * insertUserClassmatesId(){
            const { ctx, service } = this;
            const row = ctx.request.body;
            const result = yield service.classmates.insertUserClassmatesId(row);
            if(result.affectedRows ==1){
                ctx.body = app.getResult(result,true);
            }else {
                ctx.body = app.getResult(result,false);
            }
        }


    }
    return classmatesController;
}