// pages/module/task/tasklist/tasklist.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tasklist: [
            {
                taskname: '儋州那大永辉超市、儋州头舍村永辉超市拣货任务',
                mainperson: '沈阿壮'
            },
            {
                taskname: '儋州那大永辉超市、儋州头舍村永辉超市拣货任务',
            },
            {
                taskname: '儋州那大永辉超市、儋州头舍村永辉超市拣货任务',
            }
        ]
    },

    go2detail: () => {
        wx.navigateTo({
            url: './detail/detail?taskno=JHRW2017090134231'
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '任务列表'
        })
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