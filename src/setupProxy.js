const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/fifaonline4", {
      target: "https://fifaonline4.nexon.com",
      pathRewrite: {
        "^/fifaonline4": "",
      },
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/api", {
      target: "http://localhost:5000",
      pathRewrite: {
        "^/api": "",
      },
      changeOrigin: true,
    })
  );
};
