import inquirer from "inquirer";
import maxInquirer from "inquirer-maxlength-input-prompt"
inquirer.registerPrompt('maxlength-input', maxInquirer)
import defaultExport from "./lib/shapes"

export class CLI {
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
                    choices: ["Cricle", "Triangle", "Square"]
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
                console.log(response)
                return response
            })
    };
}