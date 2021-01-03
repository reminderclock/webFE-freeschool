const array=[];
function getArea(shape, ...rest) {
    if(shape==='circle'){
        if(rest[rest.length-1]===1 || rest.length===1){
            array.push(shape);
            return Math.pow(rest[rest.length-1],2)*Math.PI;
        }
        return Math.PI*Math.pow(rest[1],2) + getArea(shape, rest[0], rest[1]-1);
    }
    else if(shape === 'rect'){
    array.push(shape);
    return rest[0]*rest[1];
    }
    else if(shape === 'trapezoid'){
    array.push(shape);
    return (rest[0]+rest[1])*(rest[2]/2);
    }
    else if(shape === 'call') {
        console.log(array.join(', '));
    }
}

function printExecutionSequence() {
    getArea('call');
}

console.log(getArea('circle', 1 ,1));
console.log(getArea('rect', 10,15));
console.log(getArea('circle', 2));
console.log(getArea('circle', 3));
console.log(getArea('circle', 1 ,2));
console.log(getArea('circle', 1 ,3));
console.log(getArea('circle', 1 ,4));
console.log(getArea('rect', 10,15));
console.log(getArea('trapezoid', 10,15,12));
printExecutionSequence();