import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Viper Wiki",
  description: "Powered By Cherr",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: '免责条款', link: '/no' }

      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [

      { text: '漫画站教程', link: '/comic-wiki' },
      { text: '免责条款', link: '/no' }
    
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
