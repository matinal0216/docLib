import { defineConfig } from 'vitepress'
const base = "/docLib/"
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,
  title: "doc",
  description: " ",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: '导航',
        items: [
          { text: "组件库", link: "/components/index.md" },
        ]
      },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    search: {
      provider: 'local'
    },
  }
})
