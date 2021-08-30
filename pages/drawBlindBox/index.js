// pages/drawBlindBox/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    boxList: [{
        num: 1,
        type: 0, //0未开 1已开 2透视 3已售出 4超值
      },
      {
        num: 2,
        type: 0, //0未开 1已开 2透视 3已售出 4超值
      },
      {
        num: 3,
        type: 0, //0未开 1已开 2透视 3已售出 4超值
      },
      {
        num: 4,
        type: 0, //0未开 1已开 2透视 3已售出 4超值
      },
      {
        num: 5,
        type: 3, //0未开 1已开 2透视 3已售出 4超值
      },
      {
        num: 6,
        type: 0, //0未开 1已开 2透视 3已售出 4超值
      },
      {
        num: 7,
        type: 2, //0未开 1已开 2透视 3已售出 4超值
      },
      {
        num: 8,
        type: 0, //0未开 1已开 2透视 3已售出 4超值
      },
      {
        num: 9,
        type: 0, //0未开 1已开 2透视 3已售出 4超值
      },
      {
        num: 10,
        type: 4, //0未开 1已开 2透视 3已售出 4超值
      },
      {
        num: 11,
        type: 0, //0未开 1已开 2透视 3已售出 4超值
      },
      {
        num: 12,
        type: 0, //0未开 1已开 2透视 3已售出 4超值
      }, {
        num: 13,
        type: 1, //0未开 1已开 2透视 3已售出 4超值
      }, {
        num: 14,
        type: 0, //0未开 1已开 2透视 3已售出 4超值
      },
      {
        num: 15,
        type: 0, //0未开 1已开 2透视 3已售出 4超值
      },
      {
        num: 16,
        type: 0, //0未开 1已开 2透视 3已售出 4超值
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  openBox(e){
    wx.navigateTo({
      url: '/pages/openBox/index',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})