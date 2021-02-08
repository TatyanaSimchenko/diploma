module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/diploma/" : "/",
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/scss/_core.scss";`,
      },
    },
  },
};
