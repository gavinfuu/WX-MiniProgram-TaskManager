var Heart = function (canvas) {
    var arr = [];//保存所有的XY坐标，只为验证。实际程序中可删除。  
    var r = 4;
    var radian;//弧度  
    var i;
    var radianDecrement;//弧度增量  
    var time = 1;//每个点之间的时间间隔  
    var intervalId;
    var num = 360;//分割为 360 个点  
    var startRadian = Math.PI;
    var ctx;

    startAnimation()

    function startAnimation() {
        ctx = wx.createCanvasContext(canvas)
        drawHeart()
    }

    function drawHeart() {
        ctx.setStrokeStyle('red')
        ctx.setLineWidth(5)
        radian = startRadian;//弧度设为初始弧度  
        radianDecrement = Math.PI / num * 2;
        ctx.moveTo(getX(radian), getY(radian));//移动到初始点  
        i = 0;
        intervalId = setInterval(function() {
            printHeart()
        }, time);
    }

    //x = 16 sin^3 t, y = (13 cos t - 5 cos 2t - 2 cos 3t - cos 4t)  
    function printHeart() {
        radian += radianDecrement;
        ctx.lineTo(getX(radian), getY(radian));//在旧点和新点之间连线   
        ctx.stroke()

        i++
        if (i >= num) {
            clearInterval(intervalId);
            ctx.draw()
        }
    }

    function getX(t) {//由弧度得到 X 坐标  
        return 75 + r * (16 * Math.pow(Math.sin(t), 3));
    }

    function getY(t) {//由弧度得到 Y 坐标  
        return 75 - r * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));
    }
}

module.exports = Heart;