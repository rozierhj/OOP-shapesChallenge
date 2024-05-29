const fs = require('fs').promises;
const color = require('color');
const inquirer = require('inquirer');
const {Triangle, Circle, Square} = require('./lib/shapes');
const { type } = require('os');

const userInput = [
    {
        type: 'input',
        name: 'colors',
        message: 'Enter a color for your logo: ',
    },
    {
        type: 'input',
        name: 'name',
        message: 'Enter the name for your logo: ',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for your logo: ',
        choices: ['Square','Circle','Triangle', 'test'],
    }
];

function getInput(){

    return new Promise((resolve, reject) =>{

    inquirer.prompt(userInput)
    .then(data =>{
        console.log(`User choices: ${data.colors}, ${data.name} and ${data.shape}`);

        if(data.shape === 'Circle'){
            const circle = new Circle(data.colors, data.name, data.shape);
            resolve(circle.render());
        }

        else if(data.shape === 'Triangle'){
            const triangle = new Triangle(data.colors, data.name, data.shape);
            resolve(triangle.render());
        }

        else if(data.shape === 'Square'){
            const square = new Square(data.colors, data.name, data.shape);
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

getInput()
.then(data =>{
    return fs.writeFile('./examples/testShape.svg',data);
})
.catch(error =>{
    console.error('Error:',error.message)
});
