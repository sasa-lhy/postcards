// pages/maxview/maxview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    donghua:null,
    card: {
      pic: "../../image/pic_1.png",
      mic: "",
      txt: "端午节快乐么么！",
      syl: "winter",
      balls:[]
    }
  },
 
 
  paintkuang: function (ctx) {
   // ctx.clearRect(0, 0, ctx.width, ctx.height)
    ctx.setStrokeStyle("#ddd")
    ctx.setLineWidth(1)
    ctx.moveTo(20, 155)
    ctx.lineTo(310, 155)
    ctx.stroke()
    //
    ctx.beginPath()
    ctx.setStrokeStyle("#ddd")
    ctx.setLineWidth(2)
    ctx.arc(175, 320, 105, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.beginPath()
    ctx.setLineWidth(1)
    ctx.arc(175, 320, 120, 0, 2 * Math.PI)
    ctx.stroke()
    //邮编框
    ctx.beginPath()
    ctx.rect(305, 10, 15, 15)
    ctx.rect(305, 35, 15, 15)
    ctx.rect(305, 60, 15, 15)
    ctx.rect(305, 85, 15, 15)
    ctx.rect(305, 110, 15, 15)
    ctx.rect(305, 135, 15, 15)
    ctx.rect(10, 455, 15, 15)
    ctx.rect(10, 430, 15, 15)
    ctx.rect(10, 405, 15, 15)
    ctx.rect(10, 380, 15, 15)
    ctx.rect(10, 355, 15, 15)
    ctx.rect(10, 330, 15, 15)
    ctx.stroke()
    //
    ctx.draw() 
  },
  writetxt: function (ctx) {
    ctx.save()
    ctx.translate(165,140)
    ctx.rotate(-90 * Math.PI / 180)
    ctx.beginPath();
    ctx.font = "15px 楷体";
    ctx.fillStyle = "#777";
    ctx.fillText(this.data.card.txt, 0, 0);
    ctx.restore()
  },
  addpic: function (ctx) {
    ctx.save()
    ctx.beginPath();
    ctx.arc(175, 320, 105, 0, 2 * Math.PI)
    ctx.clip();
    ctx.translate(175, 320)
    ctx.rotate(-90 * Math.PI / 180)
    ctx.beginPath();
    ctx.drawImage(this.data.card.pic,-105,-105,210,210);
    ctx.restore();
  },
  
  render: function (ctx) {
    this.paintstyle(ctx,this.data.card.syl)
    this.addpic(ctx)
    this.writetxt(ctx)
    this.paintkuang(ctx)
  },
  update: function () {
    for(var i=0;i<20;i++){
      this.data.card.balls[i].x = this.data.card.balls[i].x + this.data.card.balls[i].vx;
      this.data.card.balls[i].y = this.data.card.balls[i].y + this.data.card.balls[i].vy;
      this.data.card.balls[i].vx = this.data.card.balls[i].vx + this.data.card.balls[i].g;
    //////////////
      if (this.data.card.balls[i].y > 480 +this.data.card.balls[i].r) {
        this.data.card.balls[i].y = Math.round(Math.random() * 480);
        this.data.card.balls[i].x = Math.round(Math.random() * 100);
        this.data.card.balls[i].r = Math.round(Math.random() * 35);
        this.data.card.balls[i].vx = Math.round(Math.random() * 1) + 1;
        this.data.card.balls[i].vy = Math.round(Math.random() * 3) + 1;
        this.data.card.balls[i].g = Math.round(Math.random() * 1) + 1;
    }
      if (this.data.card.balls[i].x > 330 + this.data.card.balls[i].r) {
        this.data.card.balls[i].y = Math.round(Math.random() * 480);
        this.data.card.balls[i].x = Math.round(Math.random() * 100);
        this.data.card.balls[i].r = Math.round(Math.random() * 35);
        this.data.card.balls[i].vx = Math.round(Math.random() * 1) + 1;
        this.data.card.balls[i].vy = Math.round(Math.random() * 3) + 1;
        this.data.card.balls[i].g = Math.round(Math.random() * 1) + 1;
    }
      if (this.data.card.balls[i].x < -this.data.card.balls[i].r) {
        this.data.card.balls[i].y = Math.round(Math.random() * 480);
        this.data.card.balls[i].x = Math.round(Math.random() *100);
        this.data.card.balls[i].r = Math.round(Math.random() * 35);
        this.data.card.balls[i].vx = Math.round(Math.random() * 1) +1;
        this.data.card.balls[i].vy = Math.round(Math.random() * 3) +1;
        this.data.card.balls[i].g = Math.round(Math.random() * 1) +1;
    }
    
    //////////////////////////
    
    }
  },
  
  bal_chushi:function(){
    for(var i=0;i<20;i++){
    var x = Math.round(Math.random() * 100);
    var y = Math.round(Math.random() * 480);
    var r = Math.round(Math.random() * 35);
    var vy = Math.round(Math.random() * 3)+1;
    var vx = Math.round(Math.random() * 1)+1;
    var g = Math.round(Math.random() * 1) +1;
    var qiu = { "x": x, "y": y, "r":r ,"vy": vy, "vx": vx, "g": g };
    this.data.card.balls.push(qiu)
    }
  },
  
  paintsummer: function (ctx,x,y,r) {
    ///1
    ctx.save()
    ctx.translate(x, y)
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
    ctx.quadraticCurveTo(-r / 2, r / 2, 0, -9 * r / 10)
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
    ctx.strokeStyle = "#FFFF00"
    ctx.arc(x, y, r / 4, 0, 2 * Math.PI)
    ctx.stroke()
    ctx.restore()
  },

  paintwinter: function (ctx,x,y,r) {
    ctx.save()
    ctx.translate(x, y)
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

  paintstyle: function (ctx, sty) {
    if (sty == "summer") {
      for (var i = 0; i < 20; i++) {
        var x=this.data.card.balls[i].x
        var y = this.data.card.balls[i].y
        var r = this.data.card.balls[i].r
        this.paintsummer(ctx,x,y,r)
      }
    }

    if (sty == "winter") {
      for (var i = 0; i < 20; i++) {
        var x = this.data.card.balls[i].x
        var y = this.data.card.balls[i].y
        var r = this.data.card.balls[i].r
        this.paintwinter(ctx, x, y, r)
      }

    }
  },

  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/pages/maxview/maxview'
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.card.syl=options.style
    this.data.card.pic = options.pic
    this.data.card.txt = options.txt
    var that=this
    this.bal_chushi()
    var ctx = wx.createCanvasContext('mycanvas')
    this.donghua=setInterval(function (){
      that.render(ctx);
      that.update();
    },50
    )

  },
/////////////////////////////////////////////
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
    console.log('onHide');
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload');
    clearInterval(this.donghua);
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