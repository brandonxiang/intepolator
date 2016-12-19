var intepolator = require("./index")
var assert = require('assert')
var should = require('should')

describe('One point', function() {
    describe('#interpolator()', function() {
        it('should between y values of two points when it is between two points', function() {
            var result = intepolator([{ x: 3, y: 14 }, { x: 8, y: 22 }], 7, 1.5)
            var approximate = Math.floor(result)
            approximate.should.be.exactly(20)
        })

        it('should equal edge value when it is out two points',function(){
          var result = intepolator([{ x: 3, y: 14 }, { x: 8, y: 22 }], 9, 1.5)
          result.should.be.exactly(22)
        })
    })
})
