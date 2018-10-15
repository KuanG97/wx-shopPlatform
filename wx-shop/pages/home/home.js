// pages/home/home.js
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
    msgList:[{
        num:1,
        name:"购买过的店"
    }, {
        num: 2,
        name: "收藏的店"
      }, {
        num: 2,
        name: "收藏的商品"
      }, {
        num: 8,
        name: "浏览历史"
      },
    ],
    shopList:[{
      shopID:0,
      name:"于治抹茶店",
      buyer:28,
      backPer:20,
      brand:"https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ep0rhE4hQtvdmMMF5jC0QHD1Z5S8zucA97SZoMDuZQGDpadfhKowCC7kyc3opovLo7extflsHnzqw/132",
      itemList: [{
        itemID:0,
        name: "钱包",
        price:200,
        image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product1.jpg",
      }, {
          itemID: 1,
          name: "吉他",
          price: 250,
          image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product2.jpg",
        }, {
          itemID: 2,
          name: "订书机",
          price: 103950,
          image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product3.jpg",
        }]
    }, {
        shopID: 1,
        name: "于治抹茶店222",
        buyer: 29,
        backPer: 66,
        brand: "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ep0rhE4hQtvdmMMF5jC0QHD1Z5S8zucA97SZoMDuZQGDpadfhKowCC7kyc3opovLo7extflsHnzqw/132",
        itemList: [{
          itemID: 3,
          name: "菜",
          price: 200,
          image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product4.jpg",
        }, {
          itemID: 4,
          name: "度量器",
            price: 200,
            image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product5.jpg",
        }, {
          itemID: 5,
          name: "蓝莓",
          price: 200,
            image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product6.jpg",
        }]
      }]
  },
  bindDetail(e){
    let itemID = e.currentTarget.dataset.itemid;
    let shopID = e.currentTarget.dataset.shopid;
    wx.navigateTo({
      url: '../../pages/detail/detail?itemID=' + itemID+"&shopID="+shopID,
    })
  },
  bindShop(e){
    // let itemID = e.currentTarget.dataset.itemid;\
    wx.navigateTo({
      url: '../../pages/shop/shop',
    })
  },
  /**
   * 收藏店铺
  */
  bindCollect(e){
    let shopID = e.currentTarget.dataset.id
    console.log(shopID);
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