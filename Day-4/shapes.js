class Shape {
    constructor(name) {
        this.name = name;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super('Rectangle');
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2*(this.width + this.height);
    }

    toString() {
        return `Rectangle - Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`;
    }
}

class Square extends Shape {
    constructor(side) {
        super('Square');
        this.side = side;
    }

    getArea() {
        return this.side ** 2;
    }

    getPerimeter() {
        return 4 * this.side;
    }

    toString() {
        return `Square - Area: ${this.getArea()}, Perimeter: ${this.getPerimeter()}`;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super('Circle');
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius ** 2;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    toString() {
        return `Circle - Area: ${this.getArea().toFixed(2)}, Perimeter: ${this.getPerimeter().toFixed(2)}`;
    }
}

export { Rectangle, Square, Circle };