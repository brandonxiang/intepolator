module.exports = function(x1, y1, x2, y2, x3, n) {
    var xn1 = Math.pow(x1, n);
    var xn2 = Math.pow(x2, n);
    var a = (y2 - y1) / (xn2 - xn1);
    var xn3 = Math.pow(x3, n);
    return y1 + a * (xn3 - xn1)
}