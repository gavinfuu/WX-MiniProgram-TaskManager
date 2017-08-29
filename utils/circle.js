var Circle = function (canvas, value) {
    const ctx = wx.createCanvasContext(canvas)

    // Draw coordinates
    backgound()

    setTimeout(function () {
        drowValue(0)
    }, 400)

    this.animationDrow = function(value, time) {
        backgound()

        let len = Math.ceil(360 * value)
        
        let count = 0
        let timer = setInterval(()=>{
            if (count <= len) {
                drowValue( count / 360 )
            } else {
                clearInterval(timer)
            }

            count++
        }, 1)
    }

    this.drow = function (value) {
        backgound()
        drowValue(value)
    }

    function drowValue(value) {
        ctx.beginPath()
        ctx.arc(75, 75, 65, 1.5 * Math.PI, cover(value) * Math.PI, false)
        ctx.setLineCap('round')
        ctx.setLineWidth(5)
        ctx.setGlobalAlpha(1)
        ctx.setStrokeStyle('#FFB814')
        ctx.stroke()
        ctx.draw(true)
    }

    function backgound() {
        ctx.arc(75, 75, 65, 0, 2 * Math.PI)
        ctx.setLineWidth(10)
        ctx.setGlobalAlpha(0.3)
        ctx.setStrokeStyle('#ffffff')
        ctx.stroke()
        ctx.draw()
    }

    function cover(value) {
        if (!value) {
            return 1.5
        } else if (value >= 0.25) {
            return 2 * value + 1.5;
        } else {
            return value * 1.5 - 0.00001;
        }
    }
}

module.exports = Circle;