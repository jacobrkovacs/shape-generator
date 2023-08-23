const {Circle, Square, Triangle} = require("./shapes")

describe("Circle", () => {
    describe("render", () => {
        it("should return example", () => {
            //arrange
            const shape = new Circle;
            const data = {
                shapeColor: 'blue',
                shapeStroke: 'green',
                textColor: 'blue',
                text: 'SVG'
            };
            const expected = `<svg width="200" height="200">
        <circle cx="25" cy="25" r="20" stroke="green" fill="blue" stroke-width="1"/>
        <text font-size="small" text-anchor="middle" fill="blue" x="25" y="29">SVG</text>
      </svg>`;
            //act
            const result = shape.render(data);
            //assert
            expect(result).toEqual(expected);
        });
    });
})

describe("Square", () => {
    describe("render", () => {
        it("should return example", () => {
            //arrange
            const shape = new Square;
            const data = {
                shapeColor: 'blue',
                shapeStroke: 'green',
                textColor: 'blue',
                text: 'SVG',
            };
            const expected = `<svg width="200" height="200">
        <rect x="10" y="10" width="40" height="40" stroke="green" fill="blue" stroke-width="1"/>
        <text font-size="small" text-anchor="middle" fill="blue" x="30" y="35">SVG</text>
      </svg>`;
            //act
            const result = shape.render(data);
            //assert
            expect(result).toEqual(expected);
        });
    });
})

describe("Triangle", () => {
    describe("render", () => {
        it("should return example", () => {
            //arrange
            const shape = new Triangle;
            const data = {
                shapeColor: 'blue',
                shapeStroke: 'green',
                textColor: 'blue',
                text: 'SVG',
            }
            const expected = `<svg width="200" height="200">
        <path d="M3 3 L3 40 L40 20 z" fill="blue" stroke="green" stroke-width="1"/>
        <text font-size="smaller" text-anchor="middle" fill="blue" x="16" y="25">SVG</text>
       </svg>`;
            //act
            const result = shape.render(data);
            //assert
            expect(result).toEqual(expected);
        });
    });
})