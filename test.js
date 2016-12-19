var intepolator = require("./index")
var assert = require('assert')

describe('One point is between two points', function() {
    describe('#interpolator()', function() {
        it('should between y values of two points', function() {
            var result = intepolator([{ x: 3, y: 14 }, { x: 8, y: 22 }], 7, 1.5)
            assert.equal(Math.floor(result), 20)
        })
    })
})