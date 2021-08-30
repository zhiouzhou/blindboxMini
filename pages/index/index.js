// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    nvabarData:{
      showCapsule: 1, //是否显示左上角图标   1表示显示    0表示不显示
      title: '', //导航栏 中间的标题
      color: '#5233FF', // 是就显示白的，不是就显示黑的。
      fontColor: "#000", //文字颜色
      white: "false", 
      address: '' // 加个背景 不加就是没有
    },
    height: app.globalData.height * 2 + 20,
  },

  
  onLoad() {
    console.log('aaa')
  },
  gotoDrawBox(e){
    console.log(e)
    console.log('aaa')
    wx.navigateTo({
      url: '/pages/drawBlindBox/index',
    })
  },
  gotoDetail(){
    wx.navigateTo({
      url: '/pages/boxDetail/index',
    })
  },

})
