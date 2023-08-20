const {Shape, Circle, Square, Triangle} = require("./shapes")

describe("Shape", () => {
    describe("render", () => {
        it("should throw error", () => {
            //arrange
            const shape = new Shape;
            const expected = "Abstract classes should not call render()";
            //act
            const result = shape.render;
            //assert
            expect(result).toThrow(expected);
        });
    });
})

describe("Circle", () => {
    describe("render", () => {
        it("should return example", () => {
            //arrange
            const shape = new Circle;
            const expected = "example";
            //act
            const result = shape.render();
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
            const expected = "example";
            //act
            const result = shape.render();
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
            const expected = "example";
            //act
            const result = shape.render();
            //assert
            expect(result).toEqual(expected);
        });
    });
})