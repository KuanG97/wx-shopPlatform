// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      avatarUrl: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ep0rhE4hQtvdmMMF5jC0QHD1Z5S8zucA97SZoMDuZQGDpadfhKowCC7kyc3opovLo7extflsHnzqw/132",
      city: "Dongguan",
      country: "China",
      gender: 2,
      language: "zh_CN",
      nickName: "🐑 欣欣_KuànG🌟",
      province: "Guangdong"
    },
    orderList:[{
      id: 0,
      shopName:"于治抹茶店",
      status:0,
      list: [{
        count: 1,
        create_time: "2018-09-29T07:01:21.000Z",
        id: 11,
        image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product3.jpg",
        name: "红纹铁质装订机",
        price: 28,
        product_id: 3,
        user: "o3OTS5EjhcNRyWBFlXhaOsn6em9c"
      }]
    },
      {
        id: 1, 
        shopName: "于治抹茶店222",
        status: 1,
        list: [{
          count: 1,
          create_time: "2018-09-29T07:01:21.000Z",
          id: 11,
          image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product3.jpg",
          name: "红纹铁质装订机",
          price: 28,
          product_id: 3,
          user: "o3OTS5EjhcNRyWBFlXhaOsn6em9c"
        }, {
          count: 2,
          create_time: "2018-09-29T07:10:47.000Z",
          id: 12,
          image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product5.jpg",
          name: "仿铁盘创意时钟",
          price: 45,
          product_id: 5,
          user: "o3OTS5EjhcNRyWBFlXhaOsn6em9c"
        }]
      },
      {
        id: 2, 
        shopName: "于治抹茶店",
        status: 2,
        list: [{
          count: 2,
          create_time: "2018-09-29T07:10:47.000Z",
          id: 12,
          image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product5.jpg",
          name: "仿铁盘创意时钟",
          price: 45,
          product_id: 5,
          user: "o3OTS5EjhcNRyWBFlXhaOsn6em9c"
        }]
      },
      {
        id: 2,
        shopName: "于治抹茶店",
        status: 3,
        list: [{
          count: 2,
          create_time: "2018-09-29T07:10:47.000Z",
          id: 12,
          image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product5.jpg",
          name: "仿铁盘创意时钟",
          price: 45,
          product_id: 5,
          user: "o3OTS5EjhcNRyWBFlXhaOsn6em9c"
        }]
      },
      {
        id: 2,
        shopName: "于治抹茶店",
        status: 4,
        list: [{
          count: 2,
          create_time: "2018-09-29T07:10:47.000Z",
          id: 12,
          image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product5.jpg",
          name: "仿铁盘创意时钟",
          price: 45,
          product_id: 5,
          user: "o3OTS5EjhcNRyWBFlXhaOsn6em9c"
        }]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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