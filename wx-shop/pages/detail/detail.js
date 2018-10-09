// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:[{
      commentCount: 0,
      firstComment: null,
      id: 2,
      image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product1.jpg",
      name: "钱包",
      price: 480.5,
      source: "国内·广东",
      guarantee: ["7天免费退货","24小时内发货并配送运费险"]
    }, {
        commentCount: 0,
        firstComment: null,
        id: 2,
        image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product2.jpg",
        name: "金色木吉他",
        price: 480.5,
        source: "国内·广东"
      },{
      commentCount: 0,
      firstComment: null,
      id: 2,
      image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product3.jpg",
        name: "订书机",
      price: 480.5,
      source: "国内·广东"
      }, {
        commentCount: 0,
        firstComment: null,
        id: 2,
        image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product4.jpg",
        name: "菜",
        price: 480.5,
        source: "国内·广东"
      }, {
        commentCount: 0,
        firstComment: null,
        id: 2,
        image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product5.jpg",
        name: "度量器",
        price: 480.5,
        source: "国内·广东"
      }, {
        commentCount: 0,
        firstComment: null,
        id: 2,
        image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product6.jpg",
        name: "蓝莓",
        price: 480.5,
        source: "国内·广东"
      }],
    shopList: [{
      shopID: 0,
      name: "于治抹茶店",
      buyer: 28,
      backPer: 20,
      brand: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ep0rhE4hQtvdmMMF5jC0QHD1Z5S8zucA97SZoMDuZQGDpadfhKowCC7kyc3opovLo7extflsHnzqw/132",
    },{
        shopID: 1,
        name: "于治抹茶店222",
        buyer: 29,
        backPer: 66,
        brand: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ep0rhE4hQtvdmMMF5jC0QHD1Z5S8zucA97SZoMDuZQGDpadfhKowCC7kyc3opovLo7extflsHnzqw/132",
      }]
  },
  onTapCommentEntry(){
    wx.navigateTo({
      url: '../../pages/comment/comment',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let pro = this.data.product[options.itemID]
    let shop = this.data.shopList[options.shopID]
    this.setData({
      product: pro,
      shopMsg: shop
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log(this.data.shopMsg);
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