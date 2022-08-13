const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function(app){
  app.use(
    createProxyMiddleware('/fifaonline4', {
      target: 'https://fifaonline4.nexon.com',
      pathRewrite: {
        '^/fifaonline4':''
      },
      changeOrigin: true
    })
  )
};
