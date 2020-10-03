exports.min = function min(array) {
    if (array && array.length>0)
        return Math.min(...array);
    return 0;
}

exports.max = function max(array) {
    if (array && array.length>0)
        return Math.max(...array);
    return 0;
}

exports.avg = function avg(array) {
    if (array && array.length>0) {
        let sum = array.reduce((acc,current)=>acc+=current,0);
        return sum/array.length;
    }
    return 0;
}
