function getArea(shape, ...rest) {
        if(shape==='circle'){
            if(rest[0]==rest[1]){
                return Math.PI;
            }
            return Math.PI*Math.pow(rest[1],2) + getArea(shape, rest[0], rest[1]-1);
        }
        else if(shape === 'rect'){
        return rest[0]*rest[1];
        }
        else if(shape === 'trapezoid'){
        return (rest[0]+rest[1])*(rest[2]/2);
        }
}
console.log(getArea('circle', 1 ,1));
console.log(getArea('circle', 1 ,2));
console.log(getArea('circle', 1 ,3));
console.log(getArea('circle', 1 ,4));
console.log(getArea('rect', 10,15));
console.log(getArea('trapezoid', 10,15,12));