// pages/myOrder/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList: [{
        id: 1,
        boxTitle: 'xxxx系列yyyyy产品等3个商品',
        price: '800',
        date: '2021-08-01 18:10',
        state: 0
      },
      // 0 未发货 1已发货 2已签收 3已退款
      {
        id: 1,
        boxTitle: 'xxxx系列yyyyy产品等3个商品',
        price: '800',
        date: '2021-08-01 18:10',
        state: 1
      },
      {
        id: 1,
        boxTitle: 'xxxx系列yyyyy产品等3个商品',
        price: '800',
        date: '2021-08-01 18:10',
        state: 2
      },
      {
        id: 1,
        boxTitle: 'xxxx系列yyyyy产品等3个商品',
        price: '800',
        date: '2021-08-01 18:10',
        state: 3
      },

    ],
    animationData: '',
    showModalStatus: false,
    selectIndex:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 隐藏遮罩层
  hideModal: function () {

    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export(),
        showModalStatus: false
      })
    }.bind(this), 200)
  },

  /*显示*/
  showModal: function (e) {
    this.setData({
      selectIndex:e.currentTarget.dataset.index
    })
    var animation = wx.createAnimation({
      duration: 200,
      timingFunction: "linear",
      delay: 0
    })
    this.animation = animation
    animation.translateY(300).step()
    this.setData({
      animationData: animation.export(),
      showModalStatus: true
    })
    setTimeout(function () {
      animation.translateY(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)
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