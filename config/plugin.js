'use strict';

// had enabled by egg
// exports.static = true;
exports.mysql = {
  enable: true,
  package: 'egg-mysql',
}
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs',
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};
exports.redis = {
    enable: false,
    package: 'egg-redis',
};

