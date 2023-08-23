const fs = require("fs/promises") 
const inquirer = require("inquirer");
const maxInquirer = require("inquirer-maxlength-input-prompt");
inquirer.registerPrompt('maxlength-input', maxInquirer)
const {Circle, Square, Triangle } = require("./lib/shapes.js");

class CLI {
    run() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'fileName',
                    message: 'Enter a name for your file',
                },
                {
                    type: 'maxlength-input',
                    name: 'text',
                    message: 'Enter a maximum of 3 characters',
                    maxLength: "3"
                },
                {
                    type: 'input',
                    name: 'textColor',
                    message: 'Enter a color or hexidecimal color code for text',
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Please choose one from the following choices of shapes',
                    choices: ["Circle", "Square", "Triangle"]
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Enter a color or hexidecimal color code for shape',
                },
                {
                    type: 'input',
                    name: 'shapeStroke',
                    message: 'Enter a color or hexidecimal color code for shape outline',
                },
            ])
            .then((response) => {
                JSON.stringify(response);
                if(response.shape === "Circle") {
                    const circle = new Circle;
                    fs.writeFile(`./examples/${response.fileName}.svg`, circle.render(response), err => {
                        if(err) {
                            console.log(err)
                        }
                    })
                        console.log(`Generated ${response.fileName}.svg`)
                }
                else if(response.shape === "Square") {
                    const square = new Square;
                    fs.writeFile(`./examples/${response.fileName}.svg`, square.render(response), err => {
                        if(err) {
                            console.log(err)
                        }
                    })
                        console.log(`Generated ${response.fileName}.svg`)
                }
                else if(response.shape === "Triangle") {
                    const triangle = new Triangle;
                    fs.writeFile(`./examples/${response.fileName}.svg`, triangle.render(response), err => {
                        if(err) {
                            console.log(err)
                        }
                    })
                        console.log(`Generated ${response.fileName}.svg`)
                }else{
                    console.log("Failed")
                }
            })
            
    };
}
const shape = new CLI;
shape.run();