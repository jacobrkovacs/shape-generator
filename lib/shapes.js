class Shape {
    constructor(sides) {
        this.sides = sides
    }
    render(){
        throw "Abstract classes should not call render()"
    }
};

class Circle extends Shape {
    render(data) {
        return `<svg width="200" height="200">
        <circle cx="25" cy="25" r="20" stroke="${data.shapeStroke}" fill="${data.shapeColor}" stroke-width="1"/>
        <text font-size="small" text-anchor="middle" fill="${data.textColor}" x="25" y="29">${data.text}</text>
      </svg>`
    }
};

class Square extends Shape {
    render(data) {
        return `<svg width="200" height="200">
        <rect x="10" y="10" width="40" height="40" stroke="${data.shapeStroke}" fill="${data.shapeColor}" stroke-width="1"/>
        <text font-size="small" text-anchor="middle" fill="${data.textColor}" x="30" y="35">${data.text}</text>
      </svg>`
    }
};

class Triangle extends Shape {
    render(data) {
        return `<svg width="200" height="200">
        <path d="M3 3 L3 40 L40 20 z" fill="${data.shapeColor}" stroke="${data.shapeStroke}" stroke-width="1"/>
        <text font-size="smaller" text-anchor="middle" fill="${data.textColor}" x="16" y="25">${data.text}</text>
       </svg>`
    }
};
module.exports = {Circle, Square, Triangle}