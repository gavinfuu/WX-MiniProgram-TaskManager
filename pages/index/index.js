//index.js
var Circle = require('../../utils/circle')

//获取应用实例
var app = getApp()
Page({
    data: {
        userClass: 'user-container',
        motto: 'Hello World',
        modelCount1: 10,
        modelText1: '今日客户',
        modelSrc1: '../../style/images/customers.png',
        modelCount2: 3,
        modelText2: '今日路线',
        modelSrc2: '../../style/images/roads.png',
        userInfo: {}
    },
    //事件处理函数
    bindViewTap: function () {
        wx.navigateTo({
            url: '../logs/logs'
        })
    },
    onLoad: function () {
        console.log('onLoad')
        var that = this
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
    },
    onReady: function () {
        this.setData({
            userClass: 'loaded-user-container'
        })

        let cr = new Circle('canvas2', {
            totalText: '今日需拣数量',
            total: 1000,
            value: 50
        })
    }
})
