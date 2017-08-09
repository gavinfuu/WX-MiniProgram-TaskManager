var Circle = function (canvas) {
    const ctx = wx.createCanvasContext(canvas)

    // Draw coordinates
    ctx.arc(75, 75, 65, 0, 2 * Math.PI)
    ctx.setLineWidth(10)
    ctx.setGlobalAlpha(0.3)
    ctx.setStrokeStyle('#ffffff')
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(75, 75, 65, 1.5 * Math.PI, 1 * Math.PI, false)
    ctx.setLineCap('round')
    ctx.setLineWidth(5)
    ctx.setGlobalAlpha(1)
    ctx.setStrokeStyle('#FF9226')
    ctx.stroke()
    ctx.draw()
}

module.exports = Circle;