//JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar 
//over JavaScript's existing prototype-based inheritance. 
//The class syntax does not introduce a new object-oriented inheritance model to JavaScript

//Classes are in fact "special functions", and just as you can define function expressions 
//and function declarations, the class syntax has two components:class expressions &class declaration

class CalculateArea { 
    constructor(length, width) { 
          this.length = length; 
          this.width = width; 
        } 
    Square(){
        return this.length * this.length
    }

    Rectangle(){
        return this.length * this.width
    }
}

let calc = new CalculateArea(10, 5);
 console.log(calc.Square())
 console.log(calc.Rectangle())




//class expressions 

// unnamed 
let Rectangle = class 
    { 
        constructor(height, width) 
        { 
            this.height = height; 
            this.width = width; 
    }
}; 
    
console.log(Rectangle.name); // output: "Rectangle"

//named 

let Rectangle2 = class Rectangle2 
{ 
    constructor(height, width) 
    { 
        this.height = height; 
        this.width = width; 
    } 
}; 
console.log(Rectangle2.name); // output: "Rectangle2"