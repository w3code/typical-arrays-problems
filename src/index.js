exports.min = function min(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
      let indexOfPosition = 0;
        for (let j = 1; j < array.length; j++) {
            if (array[indexOfPosition] > array[j]) {
                indexOfPosition = j;
            }
        }
        return array[indexOfPosition];
    }
}

exports.max = function max(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
      let indexOfPosition = 0;
        for (let j = 1; j < array.length; j++) {
            if (array[indexOfPosition] < array[j]) {
                indexOfPosition = j;
            }
        }
        return array[indexOfPosition]; 
    }
}

exports.avg = function avg(array) {
    if (array === undefined || array.length === 0) {
        return 0;
    } else {
      let avgSumm = 0;
        for (let j = 0; j < array.length; j++) {
            avgSumm = avgSumm + array[j];
        }
        return avgSumm / array.length;
    }
}