class Polygon {
    constructor(arr){
        this.arr = arr;
    for (let each of arr){
        this.side = each;
        }
    }
    get countSides(){
        let numberOfSides = this.arr.length;
        return numberOfSides;
        }
    get perimeter(){
        let sum = this.arr.reduce((partialSum, a) => partialSum + a, 0);
        return sum;
    }
}
class Triangle extends Polygon {
    get isValid(){
        if (this.numberOfSides == 3 || this.arr[1] + this.arr[2] > this.arr[0]){
            return true;
        } else {
            return false;
        }
    }
}

class Square extends Polygon {
    get isValid(){
        if (this.numberOfSides == 4 || this.arr[0] == this.perimeter/4) {
            return true;
        } else {
            return false;
        }
        }
    get area(){
        return (this.perimeter/4)*(this.perimeter/4);
    }
}