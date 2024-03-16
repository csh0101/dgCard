export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/person/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    "color": "#7A7E83",
    "selectedColor": "#3cc51f",
    "borderStyle": "black",
    "backgroundColor": "#ffffff",
    "list": [{
      "pagePath": "pages/index/index",
      "iconPath": "assets/mircophone.png",
      "selectedIconPath": "assets/mircophone.png",
      "text": "首页"
    }, {
      "pagePath": "pages/person/index",
      "iconPath": "assets/mine.png",
      "selectedIconPath": "assets/mine.png",
      "text": "我的"
    }]
  },
})
