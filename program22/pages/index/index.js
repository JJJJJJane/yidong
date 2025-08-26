// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['北京市','北京市','东城区'],
    now:'',
    cityIdMap:{
      '北京市': '101010100',
      '上海市': '101020100',
      '天津市': '101030100',
      '重庆市': '101040100',
      '香港': '101320101',
      '澳门': '101330101',
      '广州市': '101280101',
      '深圳市': '101280601',
      '杭州市': '101210101',
      '南京市': '101190101',
      '武汉市': '101200101',
      '成都市': '101270101',
      '西安市': '101110101',
      '沈阳市': '101070101',
      '长春市': '101060101',
      '哈尔滨市': '101050101',
      '石家庄市': '101090101',
      '太原市': '101100101',
      '济南市': '101120101',
      '郑州市': '101180101',
      '合肥市': '101220101',
      '长沙市': '101250101',
      '南昌市': '101240101',
      '福州市': '101230101',
      '贵阳市': '101260101',
      '昆明市': '101290101',
      '兰州市': '101160101',
      '西宁市': '101150101',
      '银川市': '101170101',
      '呼和浩特市': '101080101',
      '乌鲁木齐市': '101130101',
      '拉萨市': '101140101',
      '海口市': '101310101',
      '三亚市': '101310201',
      '大连市': '101070201',
      '青岛市': '101120201',
      '宁波市': '101210401',
      '厦门市': '101230201',
      '苏州市': '101190401',
      '无锡市': '101190201'
    }
  },
  changeRegion:function(e){
    this.setData({
      region:e.detail.value
    })
    this.getWeather();
  },
  getWeather:function(){
    var that=this;
    var cityName=that.data.region[1];
    var cityId=that.data.cityIdMap[cityName];
    if(!cityId){
      wx.showToast({
        title:'暂不支持该城市',
        icon:'none'
      })
      return;
    }
    wx.request({
      url:'https://mu4y3jhkm8.re.qweatherapi.com/v7/weather/now?',
      data:{
        location:cityId,
        key:'72eaf7c5d79145808a9641f1fc39efb0'
      },
      success:function(res){
        //console.log(res.data)
        that.setData({now:res.data.now})
      }
      
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options) {
    this.getWeather();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})