import inquirer from "inquirer";
import maxInquirer from "inquirer-maxlength-input-prompt"
inquirer.registerPrompt('maxlength-input', maxInquirer)

function cli() {
    inquirer
        .prompt([
            {
                type: 'maxlength-input',
                name: 'text',
                message: 'Enter a maximum of 3 characters',
                maxLength: "3"
            },
            {
                type: 'input',
                name: 'textColorText',
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
                name: 'textColorShape',
                message: 'Enter a color or hexidecimal color code for shape',
            },
        ])
        .then((response) => {
            JSON.stringify(response);
            console.log(response)
            return response
        })
};

cli();