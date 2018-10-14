// pages/user/user.js
const app = getApp()

Page({

  /**
   * 页面的初始数据  <view>待付款 待发货 待收货 待评价 退款中</view>
   */
  data: {
    userInfo: null,
    hasUserInfo: false,
    locationAuthType:2,
    msgList:[{
      icon:"../../images/pay.png",
      name:"待付款",
    }, {
        icon: "../../images/deliver.png",
        name: "待发货",
      }, {
        icon: "../../images/harvest.png",
        name: "待收货",
      }, {
        icon: "../../images/comment.png",
        name: "待评价",
      },{
        icon: "../../images/refund.png",
        name: "退款中",
      }]
  },

  onTapAddress() {
    wx.showToast({
      icon: 'none',
      title: '此功能暂未开放'
    })
  },

  onTapSetting() {
    wx.showToast({
      icon: 'none',
      title: '此功能暂未开放'
    })
  },

  onTapOrder(){
    wx.navigateTo({
      url: '/pages/order/order',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.onTapLogin();
  },
  /**
   *  点击登录
   */
  onTapLogin: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
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
    // 同步授权状态
    this.setData({
      locationAuthType: 0
    })
  },
})