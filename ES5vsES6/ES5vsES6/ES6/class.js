//Class definition
class Shape {
    constructor(id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move(x, y) {
        this.x = x
        this.y = y
    }
}

//Class Inheritance
class Rectangle extends Shape {
    constructor(id, x, y, width, height) {
        super(id, x, y)
        this.width = width
        this.height = height
    }
}

//Getter/Setter
class Rectangle1 {
    constructor (width, height) {
        this._width  = width
        this._height = height
    }
    set width  (width)  { 
        this._width = width               
    }
    get width  ()       { 
        return this._width                
    }
}