export default {
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],

  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ],

  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Add rules for processing images
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
        },
      });
    },
  },
}
