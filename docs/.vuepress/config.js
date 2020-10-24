const pluginsConf = require('./config/plugins/index')
const themeConfig = require('./config/theme')
module.exports = {
    title: "YaoYao's Blog",
    description: '耀耀の博客',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }],
        ['script',{},`
        var _hmt = _hmt || [];
            (function() {
              var hm = document.createElement("script");
              hm.src = "https://hm.baidu.com/hm.js?d3d91dec4a114a0b1ce6c21e74be657f";
              var s = document.getElementsByTagName("script")[0]; 
              s.parentNode.insertBefore(hm, s);
            })();
        `]
    ],
    theme: 'reco',
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    },
    themeConfig,
    markdown: {
        lineNumbers: true
    },
    plugins: pluginsConf
}
