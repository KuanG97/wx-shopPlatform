// pages/add-comment/add-comment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    proList: [{
      id: 33,
      list: [{
        image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product3.jpg",
        name: "红纹铁质装订机",
        price: 28,
        product_id: 3,
      }]
    },
    {
      id: 1,
      list: [{
        image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product3.jpg",
        name: "红纹铁质装订机",
        price: 28,
        product_id: 3,
      }, {
        image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product5.jpg",
        name: "仿铁盘创意时钟",
        price: 45,
        product_id: 5,
      }]
    },
    {
      id: 2,
      list: [{
        image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product5.jpg",
        name: "仿铁盘创意时钟",
        price: 45,
        product_id: 5,
      }]
    },
    {
      id: 3,
      list: [{
        image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product5.jpg",
        name: "仿铁盘创意时钟",
        price: 45,
        product_id: 5,
      }]
    },
    {
      id: 4,
      list: [{
        image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product5.jpg",
        name: "仿铁盘创意时钟",
        price: 45,
        product_id: 5,
      }]
    }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.orderID);
    let proList = this.data.proList
    let product
    proList.forEach(item=>{
      if (item.id == options.orderID){
        product = item.list
      }
    })
    this.setData({
      product
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