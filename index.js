const fs = require('fs');
const color = require('color');
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');
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
    })
    .catch(error =>{
        console.error(error);
    });
}

getInput();