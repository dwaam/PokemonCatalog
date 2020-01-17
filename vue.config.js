module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: process.env.POKEMON_API_URL,
        ws: true,
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
};
