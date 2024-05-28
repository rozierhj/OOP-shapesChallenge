const fs = require('fs').promises;
const color = require('color');
const inquirer = require('inquirer');
const Shapes = require('./lib/shapes');
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
        choices: ['Square','Circle','Triangle'],
    }
];

function getInput(){
    inquirer.prompt(userInput)
    .then(data =>{
        console.log(`User choices: ${data.colors}, ${data.name} and ${data.shape}`);
        const shape = new Shapes(data.colors, data.name, data.shape);
        console.log(shape);
        return shape.render();
    })
    .then(data =>{
        return fs.writeFile('./examples/testShape.svg',data);
    })
    .catch(error =>{
        console.error(error);
    });
}

getInput();
