'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index(ctx) {
	     const result = yield ctx.curl('https://httpbin.org/post', {
	    // 必须指定 method
	    method: 'POST',
	    // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
	    contentType: 'json',
	    data: {
	      hello: 'world',
	      now: Date.now(),
	    },
	    // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
	    dataType: 'json',
	  });
	  ctx.body = result.data;
    }
    * about(ctx) {
      const result = yield ctx.curl('https://httpbin.org/get?foo=bar');
	  ctx.status = result.status;
	  ctx.set(result.headers);
	  ctx.body = result.data;
    }
  }
  return HomeController;
};
