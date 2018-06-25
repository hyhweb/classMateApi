'use strict';

const fs = require('fs');
const path = require('path');
const sendToWormhole = require('stream-wormhole');
function saveStream(stream, filepath) {
    return new Promise((resolve, reject) => {
        if (filepath.indexOf('/read-error-') > 0) {
            stream.once('readable', () => {
                const buf = stream.read(10240);
                console.log('read %d bytes', buf.length);
                setTimeout(() => {
                    reject(new Error('mock read error'));
                }, 1000);
            });
        } else {
            const ws = fs.createWriteStream(filepath);
            stream.pipe(ws);
            ws.on('error', reject);
            ws.on('finish', resolve);
        }
    });
}
module.exports = app =>{
    class UploadController extends  app.Controller {
        * uploadImg(){
            const { ctx, service } = this;
            const id = ctx.params.id;


            const stream = yield ctx.getFileStream();
            const formater = stream.filename.substring(stream.filename.lastIndexOf("."));
            let filepath = path.join(this.app.config.baseDir, `app/public/images-upload/${id}${formater}`);
            if (stream.fields.title === 'mock-error') {
                filepath = path.join(this.app.config.baseDir, `logs/not-exists/dir/${stream.filename}`);
            } else if (stream.fields.title === 'mock-read-error') {
                filepath = path.join(this.app.config.baseDir, `logs/read-error-${stream.filename}`);
            }
            this.logger.warn('Saving %s to %s', stream.filename, filepath);
            try {
                yield saveStream(stream, filepath);

            } catch (err) {
                yield sendToWormhole(stream);
                throw err;
            }
            let row = {
                id:id,
                header_img:id+formater
            }
            const result = yield service.user.updateHeaderImg(row);
            if(result.affectedRows ==1){
                ctx.body = ctx.body = app.getResult(result,true);
            } else{
                ctx.body = ctx.body = app.getResult(result,false);
            }

        }
    }
    return UploadController;

}



