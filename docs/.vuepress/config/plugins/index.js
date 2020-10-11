module.exports = {
    //图片放大
    '@vuepress/medium-zoom': {
        selector: '.theme-reco-content:not(a) img',
        options: {
            background: '#fff',
        }
    },
    '@vuepress/plugin-active-header-links': {},
    '@vuepress/plugin-nprogress': {},
    'flowchart': {},
    "vuepress-plugin-baidu-autopush": {},
    'sitemap': {
        hostname: 'https://www.liuyao.me'
    },
    "vuepress-plugin-nuggets-style-copy": {
        copyText: "复制代码",
        tip: {
            content: "复制成功!"
        }
    }
}
