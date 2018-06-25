module.exports = app =>{
    class Classmates extends app.Service {
        * create(row){
            const result = yield app.mysql.insert('classmates',row)
            return result;
        }

        * select(row){
            const result = yield app.mysql.select('classmates',{
                where:{
                    user_id:`${row.id}`
                }
            })
            return result;
        }
        * updateUserClassMates(row){
            const result = yield app.mysql.update('user_classmates',{
                    id:`${row.id}`,
                    is_allow:`${row.is_allow}`
            })
            return result;
        }

        * updateUserClassMatesByUserClassId(row){
            const result = yield app.mysql.query(`UPDATE user_classmates SET is_allow = ${row.is_allow} 
            WHERE user_id = ${row.user_id} and classmates_id=${row.classmates_id}`);
            return result;
        }



        * getClassMatesByUserId(row){
            const result =yield app.mysql.query(`select id,classmates from classmates where id in(
            select classmates_id from user_classmates where user_id=${row.user_id} and is_allow=${row.is_allow})`);
            return result;
        }

        * getClassMatesByUserClassmatesId(row){
            let where = {};
            if(row.is_allow != undefined){
                where= {
                    user_id:`${row.user_id}`,
                        classmates_id:`${row.classmates_id}`,
                    is_allow:`${row.is_allow}`,
                }
            }else{
                where = {
                    user_id:`${row.user_id}`,
                    classmates_id:`${row.classmates_id}`
                }
            }
            const result = yield app.mysql.select('user_classmates',{
                where:where
            })
            return result;
        }

        * getUserByClassmatesId(row){
            const result = yield  app.mysql.query(`
            select u.name,u.username,u.email,u.job,u.city,u.home,u.header_img,
             c.classmates,uc.id,uc.classmates_id,uc.user_id,uc.is_allow,uc.is_creator  from user_classmates as uc 
            JOIN user u on u.id = uc.user_id join classmates c ON c.id = uc.classmates_id 
            WHERE uc.classmates_id=${row.classmates_id} AND is_allow =${row.is_allow}
            `)
            return result;
        }

        * getUserClassMessageByUserId(row){
            const result = yield  app.mysql.query(`
            select u.name,u.username,u.email,u.job,u.city,u.home,u.header_img,
            c.classmates,uc.id,uc.user_id,uc.classmates_id,uc.is_allow,uc.is_creator  from user_classmates as uc 
            JOIN user u on u.id = uc.user_id join classmates c ON c.id = uc.classmates_id 
            WHERE uc.user_id=${row.user_id} AND is_allow =${row.is_allow}
            `)
            return result;
        }

        * getUserClassMessageByUCserId(row){
            const result = yield  app.mysql.query(`
            select u.name,u.username,u.email,u.job,u.city,u.home,u.header_img,
            c.classmates,uc.id,uc.user_id,uc.classmates_id,uc.is_allow,uc.is_creator from 
            user_classmates as uc 
            JOIN user u on u.id = uc.user_id join classmates c ON c.id = uc.classmates_id 
            where is_allow !=${row.is_allow} and uc.classmates_id
             in(
             select uc.classmates_id 
            from user_classmates as uc 
            JOIN user u on u.id = uc.user_id join classmates c ON c.id = uc.classmates_id 
            WHERE uc.user_id=${row.user_id} AND is_allow =${row.is_allow} AND is_creator=${row.is_creator}
            
            )
            `)
            return result;
        }

        * insertUserClassmatesId(row){
            const result = yield app.mysql.insert('user_classmates',row);
            return result;
        }
    }
    return Classmates;
}