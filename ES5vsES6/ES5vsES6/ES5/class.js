//Class definition
var Shape = function (id, x, y) {
    this.id = id;
    this.move(x, y);
};
Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};

//Class inheritance
var Rectangle = function (id, x, y, width, height) {
    Shape.call(this, id, x, y);
    this.width = width;
    this.height = height;
};
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.constructor = Rectangle;

//Getter/Setter
var Rectangle = function (width, height) {
    this._width = width;
    this._height = height;
};
Rectangle.prototype = {
    set width(width) { this._width = width; },
    get width() { return this._width; },
    set height(height) { this._height = height; },
    get height() { return this._height; },
    get area() { return this._width * this._height; }
};