const app = getApp()

Component({
  properties: {
    navbarData: {
      //navbarData   由父页面传递的数据，变量名字自命名
      type: Object,
      value: {},
      observer: function (newVal, oldVal) {}
    }
  },
  data: {
    height: '',
    imageWidth: wx.getSystemInfoSync().windowWidth, // 背景图片的高度
    imageHeight: '' // 背景图片的长度，通过计算获取
  },
  attached: function () {
    // 定义导航栏的高度   方便对齐
    this.setData({
      height: app.globalData.height
    })
  },
  methods: {
    // 返回上一页面
    _navback() {
      wx.navigateBack({
        delta: 1
      })
    },
    // 计算图片高度
    imgLoaded(e) {
      this.setData({
        imageHeight: e.detail.height *
          (wx.getSystemInfoSync().windowWidth / e.detail.width)
      })
    }
  }
})