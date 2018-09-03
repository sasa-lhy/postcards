var postsData = require('../../data/posts-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
  
  //播放  
  listenerButtonPlay: function (e) {
    var index = e.currentTarget.dataset.index;
    var info = this.data.posts_key[index];
    console.log(index);
    // console.log(this.data.list[index]);
    wx.playBackgroundAudio({
      dataUrl: info.url,
      title: info.name,
      //图片地址地址  
      coverImgUrl: info.coverIngUrl
    })
  },  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      posts_key:postsData.postList
    });
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