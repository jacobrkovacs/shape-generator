class Shape {
    constructor(sides) {
        this.sides = sides
    }
    render(){
        throw "Abstract classes should not call render()"
    }
}

class Circle extends Shape {
    render() {
        
    }
}

class Square extends Shape {
    render() {

    }
}

class Triangle extends Shape {
    render() {
        
    }
}

module.exports = {Shape, Circle, Square, Triangle}