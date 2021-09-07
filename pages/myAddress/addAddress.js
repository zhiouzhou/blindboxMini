// pages/myAddress/addAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: [],
    username: '',
    phone: '',
    addressDetail: '',
    province: '',
    city: '',
    area: '',
    default: false,
    id:0,
    pageType:'add'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let type = options.type
    this.setData({
      pageType:type
    })
    if(type==='edit'){
      let addressInfo =JSON.parse(options.addressInfo)
      wx.setNavigationBarTitle({
        title: '编辑地址',
      })
      this.setData({
        username:addressInfo.username,
        region: [addressInfo.province,addressInfo.city,addressInfo.area],
        phone: addressInfo.phone,
        addressDetail: addressInfo.addressDetail,
        province: addressInfo.province,
        city: addressInfo.city,
        area: addressInfo.area,
        default: addressInfo.default,
        id:addressInfo.id
      })
    }
  },
  bindInput(e) {
    console.log(e)
    let type = e.target.dataset.type
    let value = e.detail.value
    this.setData({
      [type]: value
    })
  },
  bindRegionChange(e) {
    console.log(e)
    let value = e.detail.value
    this.setData({
      region: value,
      province: value[0],
      city: value[1],
      area: value[2]
    })
  },
  setDefalut(e) {
    this.setData({
      default: e.detail.value
    })
  },
  saveAddress() {
    let {
      username,
      phone,
      addressDetail,
      province,
      city,
      area
    } = this.data
    if(!username||!phone||!addressDetail||!province||!city||!area){
      wx.showToast({
        title: '请填写完整信息',
        icon:'none'
      })
      return
    }
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