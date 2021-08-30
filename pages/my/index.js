// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    nvabarData:{
      showCapsule: 0, //是否显示左上角图标   1表示显示    0表示不显示
      title: '', //导航栏 中间的标题
      color: '', // 是就显示白的，不是就显示黑的。
      fontColor: "#000", //文字颜色
      white: "false", 
      address: '/images/me_bg@2x.png' // 加个背景 不加就是没有
    },
    height: app.globalData.height * 2 + 20,
    signData:[
      {num:5,type:1},
      {num:5,type:1},
      {num:5,type:1},
      {num:10,type:0},
      {num:10,type:0},
      {num:10,type:0},
      {num:10,type:0}, 
    ],
  },

  
  onLoad() {
    
  },
  gotoDetail(){
    wx.navigateTo({
      url: '/pages/integralDetail/index',
    })
  },

})
