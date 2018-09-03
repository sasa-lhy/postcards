// pages/editor/editor.js
Page({
  /** 
   * 页面的初始数据
   */
  data: {
    card:{
      isPlayingMusic:false,
      wenzi: "请输入文字！",
      pic: "",
      style:"summer"
    },
    items: [
      { name: "summer", value: '样式一' ,checked: 'true' },
      { name: 'winter', value: '样式二'},
    ],
  },
  
  //音乐控制
  music_control: function () {
    var isPlayingMusic = this.data.isPlayingMusic;
    if (isPlayingMusic) {
      console.log("hehe");
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      })
    }
    else {
      wx.playBackgroundAudio({
        dataUrl: '',
        title: '',
        coverImgUrl: ''
      })
      this.setData({
        isPlayingMusic: true
      })
    }
  },

  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var ctx = wx.createCanvasContext('mycanvas')
    this.data.card.style=e.detail.value 
    this.render(ctx)

  },
  
  chagetxt:function (e){
    var ctx = wx.createCanvasContext('mycanvas')
    this.data.card.wenzi = e.detail.value
    console.log('radio发生change事件，携带value值为：', this.data.card.wenzi)
    this.render(ctx)
  },
  
  canvasIdErrorCallback: function (e) {
    console.error(e.detail.errMsg)
  },
 
  paintKuang: function (context) {
    context.clearRect(0,0,context.width,context.height)
    context.setStrokeStyle("#ddd")
    context.setLineWidth(1)
    context.moveTo(220, 10)
    context.lineTo(220,210)
    context.stroke()
    //
    context.beginPath()
    context.setStrokeStyle("#ddd")
    context.setLineWidth(2)
    context.arc(110,120,70,0,2*Math.PI)
    context.stroke()
    context.beginPath()
    context.setLineWidth(1)
    context.arc(110, 120, 80, 0, 2 * Math.PI)
    context.stroke()

    //邮编框
    context.beginPath()
    context.rect(5,5,10,10)
    context.rect(20, 5, 10, 10)
    context.rect(35, 5, 10, 10)
    context.rect(50, 5, 10, 10)
    context.rect(65, 5, 10, 10)
    context.rect(80, 5, 10, 10)
    context.rect(305, 205, 10, 10)
    context.rect(290, 205, 10, 10)
    context.rect(275, 205, 10, 10)
    context.rect(260, 205, 10, 10)
    context.rect(245, 205, 10, 10)
    context.rect(230, 205, 10, 10)
    context.stroke()
    //
    context.draw()
  },
  
  paintsummer:function(ctx){
    var x = Math.round(Math.random() * 320);
    var y = Math.round(Math.random() * 220);
    var r = Math.round(Math.random() * 30);
    ///1
    ctx.save()
    ctx.translate(x, y)
    ctx.beginPath();
    //ctx.fillStyle = "#FFE4E1"
    ctx.strokeStyle ="#FFC0CB"
    ctx.moveTo(0,0)
    ctx.quadraticCurveTo(-r,r, 0, -r)
    ctx.quadraticCurveTo( r, r, 0, 0)
    ctx.closePath()
    //ctx.fill()
    ctx.stroke()
    ctx.restore()
    ///
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(-90 * Math.PI / 180)
    ctx.beginPath();
    //ctx.fillStyle = "#FFE4E1"
    ctx.strokeStyle = "#FFC0CB"
    ctx.moveTo(0, 0)
    ctx.quadraticCurveTo(-r, r, 0, -r)
    ctx.quadraticCurveTo(r, r, 0, 0)
    ctx.closePath()
    //ctx.fill()
    ctx.stroke()
    ctx.restore()
    ///
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(-180 * Math.PI / 180)
    ctx.beginPath();
    //ctx.fillStyle = "#FFE4E1"
    ctx.strokeStyle = "#FFC0CB"
    ctx.moveTo(0, 0)
    ctx.quadraticCurveTo(-r, r, 0, -r)
    ctx.quadraticCurveTo(r, r, 0, 0)
    ctx.closePath()
   // ctx.fill()
    ctx.stroke()
    ctx.restore()
    ///
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(-270 * Math.PI / 180)
    ctx.beginPath();
    ctx.fillStyle = "#FFE4E1"
    ctx.strokeStyle = "#FFC0CB"
    ctx.moveTo(0, 0)
    ctx.quadraticCurveTo(-r, r, 0, -r)
    ctx.quadraticCurveTo(r, r, 0, 0)
    ctx.closePath()
    //ctx.fill()
    ctx.stroke()
    ctx.restore()
    ////2
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(-45 * Math.PI / 180)
    ctx.beginPath();
    ctx.fillStyle = "#FFE4E1"
    ctx.strokeStyle = "#AFEEEE"
    ctx.moveTo(0, 0)
    ctx.quadraticCurveTo(-r / 2, r / 2, 0, -9*r/10)
    ctx.quadraticCurveTo(r / 2, r / 2, 0, 0)
    ctx.closePath()
    //ctx.fill()
    ctx.stroke()
    ctx.restore()
    ///
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(-135 * Math.PI / 180)
    ctx.beginPath();
    ctx.fillStyle = "#FFE4E1"
    ctx.strokeStyle = "#AFEEEE"
    ctx.moveTo(0, 0)
    ctx.quadraticCurveTo(-r / 2, r / 2, 0, -r)
    ctx.quadraticCurveTo(r / 2, r / 2, 0, 0)
    ctx.closePath()
    //ctx.fill()
    ctx.stroke()
    ctx.restore()
    ///
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(-225 * Math.PI / 180)
    ctx.beginPath();
    ctx.fillStyle = "#FFE4E1"
    ctx.strokeStyle = "#AFEEEE"
    ctx.moveTo(0, 0)
    ctx.quadraticCurveTo(-r / 2, r / 2, 0, -r)
    ctx.quadraticCurveTo(r / 2, r / 2, 0, 0)
    ctx.closePath()
    //ctx.fill()
    ctx.stroke()
    ctx.restore()
    ///
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(-315 * Math.PI / 180)
    ctx.beginPath();
    ctx.fillStyle = "#FFE4E1"
    ctx.strokeStyle = "#AFEEEE"
    ctx.moveTo(0, 0)
    ctx.quadraticCurveTo(-r / 2, r / 2, 0, -r)
    ctx.quadraticCurveTo(r / 2, r / 2, 0, 0)
    ctx.closePath()
    //ctx.fill()
    ctx.stroke()
    ctx.restore()

  ctx.save()
  ctx.beginPath()
  ctx.strokeStyle =	"#FFFF00"
  ctx.arc(x, y, r/4,0, 2 * Math.PI)
  ctx.stroke()
  ctx.restore()
  },

  paintwinter: function (ctx) {
    var x = Math.round(Math.random() * 320);
    var y = Math.round(Math.random() * 220);
    var r = Math.round(Math.random() * 30);
   ///
    ctx.save()
    ctx.translate(x, y)
    ctx.beginPath();
    ctx.fillStyle = "#FFFF00"
    ctx.arc(0, r/2, r/4, 0, 2 * Math.PI)
    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(-2*r/5,3*r/5)
    ctx.lineTo(-1*r/5 ,r)
    ctx.lineTo(0, 3 * r / 5)
    ctx.lineTo(1 * r / 5, r)
    ctx.lineTo(2 * r / 5, 3 * r / 5)
    ctx.lineTo(0,0)
    ctx.closePath()
    ctx.strokeStyle = "#7FFFD4"
    ctx.stroke()
    ctx.restore()
    //
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(-90 * Math.PI / 180)
    ctx.beginPath();
    ctx.fillStyle = "#FFFF00"
    ctx.arc(0, r / 2, r / 4, 0, 2 * Math.PI)
    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-2 * r / 5, 3 * r / 5)
    ctx.lineTo(-1 * r / 5, r)
    ctx.lineTo(0, 3 * r / 5)
    ctx.lineTo(1 * r / 5, r)
    ctx.lineTo(2 * r / 5, 3 * r / 5)
    ctx.lineTo(0, 0)
    ctx.closePath()
    ctx.strokeStyle = "#7FFFD4"
    ctx.stroke()
    ctx.restore()
    //
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(-180 * Math.PI / 180)
    ctx.beginPath();
    ctx.fillStyle = "#FFFF00"
    ctx.arc(0, r / 2, r / 4, 0, 2 * Math.PI)
    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-2 * r / 5, 3 * r / 5)
    ctx.lineTo(-1 * r / 5, r)
    ctx.lineTo(0, 3 * r / 5)
    ctx.lineTo(1 * r / 5, r)
    ctx.lineTo(2 * r / 5, 3 * r / 5)
    ctx.lineTo(0, 0)
    ctx.closePath()
    ctx.strokeStyle = "#7FFFD4"
    ctx.stroke()
    ctx.restore()
    //
    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(-270 * Math.PI / 180)
    ctx.beginPath();
    ctx.fillStyle = "#FFFF00"
    ctx.arc(0, r / 2, r / 4, 0, 2 * Math.PI)
    ctx.fill()
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-2 * r / 5, 3 * r / 5)
    ctx.lineTo(-1 * r / 5, r)
    ctx.lineTo(0, 3 * r / 5)
    ctx.lineTo(1 * r / 5, r)
    ctx.lineTo(2 * r / 5, 3 * r / 5)
    ctx.lineTo(0, 0)
    ctx.closePath()
    ctx.strokeStyle = "#7FFFD4"
    ctx.stroke()
    ctx.restore()
  },

  paintstyle:function(ctx,sty){
    if (sty == "summer"){
    for(var i=0;i<15;i++){
      this.paintsummer(ctx)
    }}

    if (sty == "winter") {
      for (var i = 0; i < 30; i++) {
        this.paintwinter(ctx)
      }

    }
  },

  writetext:function(ctx){
    ctx.beginPath();
    ctx.font = "10px 楷体";
    ctx.fillStyle = "#777";
    ctx.fillText(this.data.card.wenzi, 230, 110);
  },

  paintpic:function(ctx){
    ctx.save()
    ctx.beginPath();
    ctx.arc(110, 120, 70, 0, 2 * Math.PI)
    ctx.clip();
    ctx.beginPath();
    ctx.drawImage(this.data.card.pic, 40, 50, 140, 140);
    ctx.restore();
  },
  
  render:function(context){
    this.paintstyle(context,this.data.card.style);
    this.paintpic(context);
    this.writetext(context);
    this.paintKuang(context);
  },

  tomax:function(){
    var that=this
    var urls = '../maxview/maxview?style=' + that.data.card.style + '&txt=' + that.data.card.wenzi + '&pic=' + that.data.card.pic
    wx.navigateTo({
      url: urls,
    })
  },
  choosemusic: function () {
    wx.navigateTo({
      url: '../music/music',
    })
  },

  toku: function () {
    wx.navigateTo({
      url: '../storehouse/storehouse',
    })
  },

  selectimg:function(){
    wx.navigateTo({
    url: '../picture/picture',
    })
   
        /////
        /////
  },

  ////////////
  /**
   * 生命周期函数--监听页面加载
   */


  onLoad: function (options) {
    
    //音乐监听函数
    var that = this;
    wx.onBackgroundAudioPlay(function () {
      that.setData({
        isPlayingMusic: true
      })
    });
    wx.onBackgroundAudioPause(function () {
      that.setData({
        isPlayingMusic: false
      })
    });

   var that=this;
   this.data.card.pic = options.url
/////
    wx.downloadFile({
      url: options.url, //仅为示例，并非真实的资源
      success: function (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          that.data.card.pic = res.tempFilePath
          var context = wx.createCanvasContext('mycanvas')
          that.render(context)
        }
      }
    })
/////
    var context = wx.createCanvasContext('mycanvas')
    this.render(context)

    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function (e) {
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