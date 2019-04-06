module.exports = {
  plugins: [
    [require('../../lib'), {
      selector: '.content img',

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
