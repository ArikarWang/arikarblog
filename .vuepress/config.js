module.exports = {
  title: 'ArikarBlog',
  description: 'ArikarBlog',
  dest: 'public',
  base: '/arikarblog/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/arikar.ico',
      },
    ],
    [
      'meta',
      {
        name: 'viewport',
        content: 'width=device-width,initial-scale=1,user-scalable=no',
      },
    ],
  ],
  port: 8866,
  temp: '/path/to/@vuepress/core/.temp',
  theme: 'reco',
  themeConfig: {
    nav: [
      {
        text: 'Home',
        link: '/',
        icon: 'reco-home',
      },
      {
        text: 'TimeLine',
        link: '/timeline/',
        icon: 'reco-date',
      },
      {
        text: 'Docs',
        icon: 'reco-message',
        items: [
          {
            text: 'vuepress-reco',
            link: '/docs/theme-reco/',
          },
        ],
      },
      {
        text: 'Contact',
        icon: 'reco-message',
        target: '_blank',
        items: [
          {
            text: 'GitHub',
            link: 'https://github.com/ArikarWang',
            icon: 'reco-github',
          },
        ],
      },
    ],
    sidebar: {
      '/docs/theme-reco/': ['', 'theme', 'plugin', 'api'],
    },
    type: 'blog',
    blogConfig: {
      category: {
        location: 2,
        text: 'firstBlog',
      },
      tag: {
        location: 3,
        text: 'blog',
      },
    },
    friendLink: [
      {
        title: '午后南杂',
        desc: 'Enjoy when you can, and endure when you must.',
        email: '1156743527@qq.com',
        link: 'https://www.recoluan.com',
      },
      {
        title: 'vuepress-theme-reco',
        desc: 'A simple and beautiful vuepress Blog & Doc theme.',
        avatar: 'https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png',
        link: 'https://vuepress-theme-reco.recoluan.com',
      },
    ],
    logo: '/timg.jpg',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: 'Arikar',
    authorAvatar: '/arikar.jpg',
    // record: 'xxxx',
    startYear: '2020',
  },
  markdown: {
    lineNumbers: true,
  },
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-kan-ban-niang',
      {
        theme: ['blackCat'],
        clean: false,
        messages: {
          welcome: 'welcome',
          home: 'home',
          theme: 'theme',
          close: '88',
        },
      },
    ],
    [
      '@vuepress-reco/vuepress-plugin-bgm-player',
      {
        audios: [
          {
            name: '群青',
            artist: 'YOASOBI,Ayase',
            url: '/YOASOBI、Ayase - 群青.flac',
            cover: '/群青.jpg',
          },
        ],
        autoShrink: true,
        shrinkMode: 'mini',
      },
    ],
  ],
};
