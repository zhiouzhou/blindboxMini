// pages/myAddress/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [{
      id: 1,
      default: true,
      username: '张三',
      phone: '13659396686',
      province: '北京',
      city: '北京市',
      area: '昌平区',
      addressDetail: '中东路58号院'
    }, {
      id: 2,
      default: false,
      username: '尚军',
      phone: '13659396686',
      province: '北京',
      city: '北京市',
      area: '昌平区',
      addressDetail: '中东路58号院'
    }, {
      id: 3,
      default: false,
      username: '周周',
      phone: '13659396686',
      province: '北京',
      city: '北京市',
      area: '昌平区',
      addressDetail: '中东路58号院'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  selectDefalut(e) {
    let index = e.currentTarget.dataset.index
    let list = this.data.addressList
    list.forEach((item,idx)=>{
      if(index==idx){
        item.default = true
      }else {
        item.default = false
      }
    })
    this.setData({
      addressList:list
    })
    console.log(this.data.addressList)
  },
  addAddress(e){
    let type = e.currentTarget.dataset.type
    let item = JSON.stringify(e.currentTarget.dataset.item)
    console.log(item)
    wx.navigateTo({
      url: `./addAddress?type=${type}&addressInfo=${item}`,
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