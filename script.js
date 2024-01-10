//complete this code
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    getArea() {
        return this._width * this._height;
    }
}

class Square extends Rectangle {
    constructor(side) {
        // Call the constructor of the parent class (Rectangle)
        super(side, side);
}

    getPerimeter() {
        // Perimeter of a square is 4 times the length of one side
        return 4 * this.width;
    }
}
// let rect=new Rectangle(2,3);
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
