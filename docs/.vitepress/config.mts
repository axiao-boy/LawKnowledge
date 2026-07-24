import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'LawKnowledge',
  description: '法律知识库 - 法规条文、解读与案例整理',
  lang: 'zh-CN',
  base: '/LawKnowledge/',

  themeConfig: {
    siteTitle: 'LawKnowledge',
    logo: '/logo.svg',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            displayDetails: '显示详情',
            noResultsText: '未找到结果',
            resetButtonTitle: '清除查询',
            footer: {
              selectText: '选择',
              navigateText: '导航',
              closeText: '关闭'
            }
          }
        }
      }
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '劳动者', link: '/labor-law/' },
      { text: '公共资源', link: '/public/' }
    ],
    sidebar: {
      '/': [
        {
          text: '首页',
          items: [{ text: '欢迎页', link: '/' }]
        },
        {
          text: '劳动者',
          items: [{ text: '劳动仲裁', link: '/labor-law/zhongcai/' }]
        },
        {
          text: '公共资源'
        }
      ]
    },
    footer: {
      message: '基于 VitePress 构建',
      copyright: '2026 LawKnowledge. All rights reserved.'
    },
    editLink: {
      pattern: 'https://github.com/axiao-boy/LawKnowledge/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    }
  }
})
