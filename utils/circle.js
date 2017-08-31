var Circle = function (canvas, options) {
    const ctx = wx.createCanvasContext(canvas)

    // Draw coordinates
    backgound()

    setTimeout(function () {
        drowValue(options)
    }, 400)

    this.drow = function (options) {
        backgound()
        drowValue(options)
    }

    function drowValue(options) {
        const value = Math.round(options.value / options.total * 100) / 100
        ctx.beginPath()
        ctx.arc(75, 75, 65, 1.5 * Math.PI, cover(value) * Math.PI, false)
        ctx.setLineCap('round')
        ctx.setLineWidth(5)
        ctx.setGlobalAlpha(1)
        ctx.setStrokeStyle('#FFB814')
        ctx.stroke()
        ctx.draw(true)

        ctx.setFillStyle('#FFB814')
        ctx.setTextAlign('center')
        ctx.setFontSize(30)
        ctx.fillText(options.value, 75, 70)
        ctx.setFontSize(12)
        ctx.setFillStyle('#dddddd')
        ctx.fillText(options.totalText, 75, 95)
        ctx.setFontSize(16)
        ctx.setFillStyle('white')
        ctx.fillText(options.total, 75, 115)
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
            return 1.50
        } else if (value <= 0.25) {
            return 2 * value + 1.5
        } else if (value < 1) {
            return value * 2 - 0.5
        } else {
            return 1.4999999;
        }
    }
}

module.exports = Circle;