//complete this code
class Rectangle {
	constructor(width,hieght){
		this.width=width;
		this.height=hieght;
	}
	getArea(){
		return this.width*this.hieght;
	}
}

class Square extends Rectangle {
	getPerimeter(){
		return 2(this.width+this.hieght);
	}
}
// let rect=new Rectangle(2,3);
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
