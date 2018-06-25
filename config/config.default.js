'use strict';

module.exports = appInfo => {
  const config = {
      development:{
        watchDirs: [],
        ignoreDirs: [],
        fastReady: false,
        reloadOnDebug: true,
        overrideDefault: false,
      },
      view: {
          defaultViewEngine: 'nunjucks',
          mapping: {
              '.tpl': 'nunjucks',
              '.ejs': 'ejs',
          },

      },
      mysql: {
          client: {
              host: 'localhost',
              port: '3306',
              user: 'root',
              password: '123456',
              database: 'classmates',    
          },
          app: true,
          agent: false,
      },
      redis:{
          client: {
              port: 6379,          // Redis port
              host: '127.0.0.1',   // Redis host
              password: '123456',
              db: 0,
          },
      },
      security:{
        enable: false,
       xframe:{
        value: 'ALLOW-FROM: http://127.0.0.1:8080',
      },
      csrf: {
        enable: false,
        ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
      },
    methodnoallow: {
      enable: false
    }, 
    domainWhiteList: [
        'http://127.0.0.1:8080',
        'http://127.0.0.1:7001',
        'http://localhost:8080',
        'http://192.168.147.2:8080',
        'http://192.168.56.1:8080',

        'http://127.0.0.1:8010',
        'http://localhost:8010',
        'http://192.168.147.2:8010',
        'http://192.168.56.1:8010',

        'http://148l4452g4.iask.in:25256',
        'http://148l4452g4.iask.in:24547']
  },
  cors:{
    allowMethods:'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
    credentials:true
  }
  };

  // should change to your own
  config.keys = appInfo.name + '_123456';

  // add your config here

  return config;
};
