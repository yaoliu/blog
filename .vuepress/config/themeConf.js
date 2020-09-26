const sidebar = require("./sidebar-auto.js");
//导航栏
module.exports = {
    repo: "yaoliu/blog",
    navbar: true,
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "更新于",
    sidebar,
    nav: [
        {
            text: "最新", link: "/guide/"
        },
        {
            text: "编程语言",
            items: [{text: 'Python', link: '/Python'},{text: 'Golang', link: '/Golang'}],
        },
        {
            text: "云原生",
            items: [{text: 'Kubernetes', link: '/Kubernetes'},{text: 'Istio', link: '/Istio'}],
        },
        {
            text: "微服务",
            items: [{text: 'go-micro', link: '/go-micro'}],
        },
        {
            text: "Devops",
            items: [{text: 'Devops', link: '/Devops'}],
        },
        {
            text: "关于我", link: "/about/"
        }
    ]
};
