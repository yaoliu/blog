const navConf = require('../nav/index')

module.exports = {
    type: 'blog',
    smoothScroll: true,
    // 博客设置
    blogConfig: {
        category: {
            location: 3, // 在导航栏菜单中所占的位置，默认2
            text: '分类' // 默认 “分类”
        },
        tag: {
            location: 4, // 在导航栏菜单中所占的位置，默认3
            text: '标签' // 默认 “标签”
        }
    },
    authorAvatar: '/avatar.jpg',
    // 最后更新时间
    lastUpdated: '上次更新时间', // string | boolean
    repo: 'yaoliu/blog',
    // 如果你的文档不在仓库的根部
    docsDir: 'docs',
    // 可选，默认为 master
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页！',
    // 作者
    author: '耀耀',
    // 项目开始时间
    startYear: '2015',
    subSidebar: 'auto',
    nav: navConf,
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    sidebar: 'auto',
    // 备案
    // record: '',
    // recordLink: '',
    // cyberSecurityRecord: '',
    // cyberSecurityLink: '',
    // friendLink: []
}
