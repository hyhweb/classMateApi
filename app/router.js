'use strict';

module.exports = app => {
	require('./router/page')(app);
	require('./router/user')(app);
    require('./router/classmates')(app);
    require('./router/upload')(app);
};
