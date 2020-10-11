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
            text: "关于我", link: "/about/"
        }
    ]
};
