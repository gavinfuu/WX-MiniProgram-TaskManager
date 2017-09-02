// pages/module/task/detail.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        showModalStatus: false,
        task: {
            taskname: '儋州那大永辉超市、儋州头舍村永辉超市等卖场拣货任务',
            mainperson: '沈阿壮',
            details: [
                {
                    customername: '儋州那大永辉超市'
                },
                {
                    customername: '儋州头舍村永辉超市'
                },
                {
                    customername: '海口旺佳旺海府一横路店'
                }
            ]
        },
        subdetails: [
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
        ]
    },

    util: function (currentStatu) {
        /* 动画部分 */
        // 第1步：创建动画实例   
        var animation = wx.createAnimation({
            duration: 200,  //动画时长  
            timingFunction: "linear", //线性  
            delay: 0  //0则不延迟  
        });

        // 第2步：这个动画实例赋给当前的动画实例  
        this.animation = animation;

        // 第3步：执行第一组动画  
        animation.opacity(0).rotateX(-100).step();

        // 第4步：导出动画对象赋给数据对象储存  
        this.setData({
            animationData: animation.export()
        })

        // 第5步：设置定时器到指定时候后，执行第二组动画  
        setTimeout(function () {
            // 执行第二组动画  
            animation.opacity(1).rotateX(0).step();
            // 给数据对象储存的第一组动画，更替为执行完第二组动画的动画对象  
            this.setData({
                animationData: animation
            })

            //关闭  
            if (currentStatu == "close") {
                this.setData(
                    {
                        showModalStatus: false
                    }
                );
            }
        }.bind(this), 200)

        // 显示  
        if (currentStatu == "open") {
            this.setData(
                {
                    showModalStatus: true
                }
            );
        }
    },

    /**
     * 弹出框
     */
    toggle: function(e) {
        var currentStatu = e.currentTarget.dataset.statu;
        this.util(currentStatu)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        wx.setNavigationBarTitle({
            title: '任务详情',
        })

        wx.setNavigationBarColor({
            frontColor: '#000000',
            backgroundColor: '#f3f4f8',
            animation: {
                duration: 400,
                timingFunc: 'easeIn'
            }
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