module.exports = {
  "lintOnSave": false,
  "transpileDependencies": [
    "vuetify"
  ],
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}