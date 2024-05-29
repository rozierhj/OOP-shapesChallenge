const fs = require('fs').promises;
const inquirer = require('inquirer');
const {Triangle, Circle, Square} = require('./lib/shapes');
const { type } = require('os');
const validateColor = require('validate-color');

const userInput = [
    {//get the three letters for the logo name
        type: 'input',
        name: 'name',
        message: 'Enter the name for your logo (use 3 characters): ',
    },
    {//get the color for the logo text
        type: 'input',
        name: 'textColor',
        message: 'Choose a color for the logo text: ',
    },
    {//get the shape of the logo
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo: ',
        choices: ['Square','Circle','Triangle'],
    },
    {//get the color of the logo background
        type: 'input',
        name: 'colors',
        message: 'Enter a color for your logo shape: ',
    },
];

function getInput(){

    return new Promise((resolve, reject) =>{

    inquirer.prompt(userInput)
    .then(data =>{

        //define Circle object type and render the code prepared for the .svg file for it
        if(data.shape === 'Circle'){
            const circle = new Circle(data.colors, data.name, data.shape, data.textColor);
            resolve(circle.render());
        }
        //defined the Triangle object type and render the code prepared for the .svg file for it
        else if(data.shape === 'Triangle'){
            const triangle = new Triangle(data.colors, data.name, data.shape, data.textColor);
            resolve(triangle.render());
        }
        //defined the Square object type and render the code prepared for the .svg file for it
        else if(data.shape === 'Square'){
            const square = new Square(data.colors, data.name, data.shape, data.textColor);
            resolve(square.render());
        }
        else{
             reject(new Error('No shape input was found'));
        }
        
    })
    .catch(error =>{
        reject(error);
    });
});

}

//execute the function to get the user input for the logo
getInput()
.then(data =>{
    //using the code returned from the logo rendering for the Circle, Triangle or Square object type, now write that data to a .svg file
    return fs.writeFile('./examples/logo.svg',data);
})
.then(data =>{
    //display message confirming that the file has been created.
    console.log(`Generated logo.svg`);
})
.catch(error =>{
    console.error('Error:',error.message)
});
