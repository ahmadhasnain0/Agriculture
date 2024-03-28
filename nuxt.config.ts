export default {
  css: [
    'bootstrap/dist/css/bootstrap.min.css'
  ],

  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ],

  static: {
    prefix: false
  },

  // Additional build configuration if needed
  build: {
    // Extend webpack config to handle Bootstrap JavaScript if necessary
    extend(config, ctx) {
      // Example: Add Bootstrap JavaScript support
      config.module.rules.push({
        test: /\.js$/,
        include: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }]
      });
    }
  }
}
