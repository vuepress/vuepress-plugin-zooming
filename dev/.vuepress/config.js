module.exports = {
  plugins: [
    [require('../../lib'), {
      selector: '.theme-default-content img',

      options: {
        bgColor: 'black',
        zIndex: 10000,
      },

      delay: 1000,
    }],
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Page', link: '/page.html' },
    ],
  },
}
