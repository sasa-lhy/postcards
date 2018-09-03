// pages/storehouse/storehouse.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
// 删除元素函数
  delItem:function(e){
    //获取列表中要删除的下标
    var index = e.target.dataset.index;
    var list = this.data.list;
    //移除列表中下标为index的项
    list.splice(index,1);
    //更新列表状态
    this.setData({
      list: list
    })
  },

  //测试临时数据

  tempData: function () {
    var list = [
      {
        icon: "../../image/圣诞13.jpg",
        txt: "春天里"
      },
      {
        icon: "../../image/圣诞壁纸.jpg",
        txt: "在稻田"
      },
      {
        icon: "../../image/圣诞壁纸2.jpg",
        txt: "风铃声"
      },
    ];
    this.setData({
      list: list
    });
  },
  onLoad: function (options) {
    this.tempData();
  },

 
  onReady: function () {
  
  },


  onShow: function () {
  
  },


  onHide: function () {
  
  },


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