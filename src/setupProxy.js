// import { BASE_URL } from "./common/apis/utils/constants";

// const BASE_URL = "http://211.208.125.180:8000/api";
const BASE_URL = "http://groove-api.onrender.com/api";

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    createProxyMiddleware("/api", {
      target: BASE_URL,
      changeOrigin: true,
      pathRewrite: (path) => {
        return path.replace(`/api`, "");
      },
    })
  );
};
