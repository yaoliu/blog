module.exports = {
    // Google analytics
    '@vuepress/google-analytics': {
        'ga': 'G-JZ9PL38VTY' // UA-00000000-0
    },
    //图片放大
    '@vuepress/medium-zoom': {
        selector: '.theme-reco-content:not(a) img',
        options: {
            background: '#fff',
        }
    },
    'vuepress-plugin-comment': {
        choosen: 'valine',
        // options选项中的所有参数，会传给Valine的配置
        options: {
            el: '#valine-vuepress-comment',
            appId: 'ogx74vaAYoBnjCAGkJpgIgwq-gzGzoHsz',
            appKey: 'pBlKdjmjtmUY7R1y6OVmK25x'
        }
    },
    '@vuepress/plugin-active-header-links': {},
    '@vuepress/plugin-nprogress': {},
    'flowchart': {},
    'sitemap': {
        hostname: 'https://liuyao.me'
    },
    "vuepress-plugin-nuggets-style-copy": {
        copyText: "复制代码",
        tip: {
            content: "复制成功!"
        }
    }
}
