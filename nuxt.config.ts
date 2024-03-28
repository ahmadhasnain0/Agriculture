export default {
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],

  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ],

  build: {
    extend(config, ctx) {
      // Add loader for images
      config.module.rules.push({
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              esModule: false,
              name: '[name].[ext]',
              outputPath: 'assets/images/team',
              publicPath: '/_nuxt/assets/images/team',
            },
          },
        ],
      })
    }
  }
}
