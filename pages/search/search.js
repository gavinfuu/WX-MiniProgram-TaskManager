// pages/search/search.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tdata: {
            tasks: [
                {
                    barcode: '7482389874128',
                    goodscode: 'Go2017090119846',
                    goodsname: '妮维雅夏日清凉洁面乳',
                    brandname: '妮维雅',
                    classname: '洁面乳',
                    spec: '1x12x1瓶/箱'
                },
                {
                    barcode: '7482389874128',
                    goodscode: 'Go2017090119846',
                    goodsname: '妮维雅夏日清凉洁面乳',
                    brandname: '妮维雅',
                    classname: '洁面乳',
                    spec: '1x12x1瓶/箱'
                },
                {
                    barcode: '7482389874128',
                    goodscode: 'Go2017090119846',
                    goodsname: '妮维雅夏日清凉洁面乳',
                    brandname: '妮维雅',
                    classname: '洁面乳',
                    spec: '1x12x1瓶/箱'
                }
            ],
            customers: [
                {
                    customername: '儋州那大永辉超市',
                    dayland: '今日路线',
                    day: 1,
                    barcodeqty: 10,
                    qty: 100
                },
                {
                    customername: '儋州军屯永辉超市',
                    dayland: '明日路线',
                    day: 2,
                    barcodeqty: 10,
                    qty: 100
                },
                {
                    customername: '儋州头舍村永辉超市',
                    dayland: '明日路线',
                    day: 2,
                    barcodeqty: 10,
                    qty: 100
                }
            ]
        },
        text: null
    },

    cancel: () => {
        wx.navigateBack()
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (query) {
        this.setData({ text: query.text})
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