/*// Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

// Expression; the class is anonymous but assigned to a variable
const cone = class {
  constructor(height, radius,length) {
    this.height = height;
    this.radius = this.radius;
    this.length = this.length;
  }
};

// Expression; the class has its own name
const cylinder = class cylinder {
  constructor(height, radius) {
    this.height = height;
    this.radius = radius;
  }
};

class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    // Getter
    get area() {
      return this.calcArea();
    }
    // Method
    calcArea() {
      return this.height * this.width;
    } 
  }
  const square = new Rectangle(10, 10);
  console.log(square.area); // 100*/

  class Point {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    static displayName = "Point";
    static distance(a, b) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
  
      return Math.hypot(dx, dy);
    }
  }
  const p1 = new Point(5, 5);
  const p2 = new Point(10, 10);
  console.log(p1.displayName); 
  console.log(p2.distance);    
  console.log(Point.displayName);
  console.log(Point.distance(p1,p2));
