module.exports={
    getResult(object,success,message){
        let result ={};
       /* if(typeof(object)=="object"){
            if(!object.length){
                //对象
               let data =  Object.keys(object);
                if(data.length == 0){
                    success = false;
                }else{
                    success = true;
                }
            }else{
                //数组
                if(object.length == 0){
                    success = false;
                }else{
                    success = true;
                }
            }
        }else if(typeof(object)=="string"){
            if(object.length == 0){
                success = false;
            }else{
                success = true;
            }
        }*/

        result.data=object;
        if(success){
            result.code="1";
            result.success=true;
            if(message == undefined){
                result.message="操作成功";
            }else{
                result.message=message;
            }


        }else{
            result.code="0";
            result.success=false;
            if(message == undefined) {
                result.message = "操作失败";
            }else{
                result.message=message;
            }

        }
        return result;
    }
}