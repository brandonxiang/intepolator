module.exports = function(data, value, n) {
    if(!data.length){
        return
    }
    for(var i=0; i<data.length;i++){
        // if(!data[i+1]){
        //     if(value >= data[i].x){
        //         return data[i].y
        //     }else{
        //         console.log("1")
        //         return data[i].y
        //     }
        // }

        // if(data[i].x<value&&value<data[i+1].x){
        //     return interpolateByTwoPts(data[i].x,data[i+1].x,data[i].y,data[i+1].y,value,n)
        if(value < data[0].x){
                return data[i].y
        }else if(value > data[i].x){
            if(data[i+1]){
            if(value < data[i+1].x){
    return interpolateByTwoPts(data[i].x,data[i+1].x,data[i].y,data[i+1].y,value,n)

            }
            }else{
                return data[i].y
            }

        }
    }
}

function interpolateByTwoPts(x1,x2,y1,y2,x3,n){
    var xn1 = Math.pow(x1, n);
    var xn2 = Math.pow(x2, n);
    var a = (y2 - y1) / (xn2 - xn1);
    var xn3 = Math.pow(x3, n);
    return y1 + a * (xn3 - xn1)
}

