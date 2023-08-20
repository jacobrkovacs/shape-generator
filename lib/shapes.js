

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
        return "example"
    }
}

class Square extends Shape {
    render() {
        return "example"
    }
}

class Triangle extends Shape {
    render() {
        return "example"
    }
}

module.exports = {Shape, Circle, Square, Triangle}