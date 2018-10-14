Page({
  data: {
    userInfo:{
  avatarUrl:"https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83ep0rhE4hQtvdmMMF5jC0QHD1Z5S8zucA97SZoMDuZQGDpadfhKowCC7kyc3opovLo7extflsHnzqw/132",
      city:"Dongguan",
      country:"China",
      gender:2,
      language:"zh_CN",
      nickName:"🐑 欣欣_KuànG🌟",
      province:"Guangdong"
    },
    shop:[{
      shopID:0,
      name:"于治抹茶店",
      trolleyList:[0],
    },{
        shopID: 1,
        name:"于治抹茶店222",
        trolleyList: [1,2],
    }],
    trolleyList: [
      {
        id:0,
        count: 1,
        itemID: 3,
        image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product3.jpg",
        name: "红纹铁质装订机",
        price: 28,
      },
      {
        id: 1,
        count: 1,
        itemID: 4,
        image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product4.jpg",
        name: "新鲜有机青蔬",
        price: 30.9,
      },
      {
        id: 2,
        count: 2,
        itemID: 5,
        image: "https://product-1253572796.cos.ap-guangzhou.myqcloud.com/product5.jpg",
        name: "仿铁盘创意时钟",
        price: 45,
      }],
    trolleyCheckMap: [], // 购物车中选中的id哈希表
    trolleyAccount: 0, // 购物车结算总价
    isTrolleyEdit: false, // 购物车是否处于编辑状态
    isTrolleyTotalCheck: false, // 购物车中商品是否全选
    isTrolleyShopCheck: [],// 购物车中商家选中的id哈希表
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },


  /**
   * 单选产品
  */
  onTapCheckSingle(event) {
    let checkId = event.currentTarget.dataset.id
    let trolleyCheckMap = this.data.trolleyCheckMap
    let trolleyList = this.data.trolleyList
    let isTrolleyTotalCheck = this.data.isTrolleyTotalCheck
    let trolleyAccount = this.data.trolleyAccount
    let numTotalProduct
    let numCheckedProduct = 0
    // 单项商品被选中/取消
    trolleyCheckMap[checkId] = !trolleyCheckMap[checkId]

    // 判断选中的商品个数是否需商品总数相等
    numTotalProduct = trolleyList.length
    trolleyCheckMap.forEach(checked => {
      numCheckedProduct = checked ? numCheckedProduct + 1 : numCheckedProduct
    })

    // 判断全选状态
    isTrolleyTotalCheck = (numTotalProduct === numCheckedProduct) ? true : false

    // 购物车总价计算
    trolleyAccount = this.calcAccount(trolleyList, trolleyCheckMap)

    this.setData({
      trolleyCheckMap,
      isTrolleyTotalCheck,
      trolleyAccount
    })
  },

  /**
   * 全选按钮
  */
  onTapCheckTotal(event) {
    let trolleyCheckMap = this.data.trolleyCheckMap
    let trolleyList = this.data.trolleyList
    let isTrolleyTotalCheck = this.data.isTrolleyTotalCheck
    let trolleyAccount = this.data.trolleyAccount
    let isTrolleyShopCheck = this.data.isTrolleyShopCheck
    let shop = this.data.shop

    // 全选按钮被选中/取消
    isTrolleyTotalCheck = !isTrolleyTotalCheck

    for (let i=0; i < shop.length;i++){
      isTrolleyShopCheck[i] = !isTrolleyShopCheck[i]
    }
    
    // 遍历并修改所有商品的状态
    trolleyList.forEach(product => {
      trolleyCheckMap[product.id] = isTrolleyTotalCheck
    })

    // 购物车总价计算
    trolleyAccount = this.calcAccount(trolleyList, trolleyCheckMap)

    this.setData({
      isTrolleyShopCheck,
      isTrolleyTotalCheck,
      trolleyCheckMap,
      trolleyAccount
    })

  },
  
  /**
   * 店家全选
  */
  onTapCheckShopTotal(event){
    let trolleyCheckMap = this.data.trolleyCheckMap
    let trolleyList = this.data.trolleyList
    let shop = this.data.shop
    let isTrolleyShopCheck = this.data.isTrolleyShopCheck
    let trolleyAccount = this.data.trolleyAccount
    let shopID = event.currentTarget.dataset.id;
    
    // 商家选中状态
    shop.forEach((item,index) => {
      if (item.shopID==shopID){
        isTrolleyShopCheck[index] = !isTrolleyShopCheck[index]
      }
    })
    // 遍历并修改对应商家的商品的状态
    shop[shopID].trolleyList.forEach(index => {
      trolleyCheckMap[index] = !trolleyCheckMap[index]
    })

    // 购物车总价计算
    trolleyAccount = this.calcAccount(trolleyList, trolleyCheckMap)

    this.setData({
      isTrolleyShopCheck,
      trolleyCheckMap,
      trolleyAccount
    })
  },

  /**
   * 购物车总价计算(购物车产品列表,选中Map)
  */
  calcAccount(trolleyList, trolleyCheckMap) {
    let account = 0
    trolleyList.forEach(product => {
      account = trolleyCheckMap[product.id] ? account + product.price * product.count : account
    })

    return account
  },

  /**
   * 点击编辑
  */
  onTapEditTrolley() {
    let isTrolleyEdit = this.data.isTrolleyEdit
    // 如果完成则更新购物车
    if (isTrolleyEdit) {
      this.updateTrolley()
    } else {// 进入编辑模式
      this.setData({
        isTrolleyEdit: !isTrolleyEdit
      })
    }
  },

  /**
   * 调整购物车产品的数量
  */
  adjustTrolleyProductCount(event) {
    let trolleyCheckMap = this.data.trolleyCheckMap
    let trolleyList = this.data.trolleyList
    let dataset = event.currentTarget.dataset
    let adjustType = dataset.type
    let productId = dataset.id
    let product
    let index
    // 浅拷贝
    for (index = 0; index < trolleyList.length; index++) {
      if (productId === trolleyList[index].id) {
        product = trolleyList[index]
        break
      }
    }
    //如果存在该产品则进行对应的加减操作
    if (product) {
      if (adjustType === 'add') {
        // 点击加号
        product.count++
      } else {
        // 点击减号
        if (product.count <= 1) {
          // 商品数量==1，点击减号相当于删除
          delete trolleyCheckMap[productId]
          trolleyList.splice(index, 1)
        } else {
          // 商品数量大于1
          product.count--
        }
      }
    }

    // 调整结算总价
    let trolleyAccount = this.calcAccount(trolleyList, trolleyCheckMap)

    if (!trolleyList.length) {
      // 当购物车为空，自动同步至服务器
      this.updateTrolley()
    }

    this.setData({
      trolleyAccount,
      trolleyList,
      trolleyCheckMap
    })
  },

  /*
   * 更新购物车
   */
  updateTrolley() {
    wx.showLoading({
      title: '更新购物车数据...',
    })
    this.setData({
      isTrolleyEdit: !this.data.isTrolleyEdit
    })
    wx.hideLoading();
  },
  /**
   * 结算
  */
  onTapPay(){

  }
})