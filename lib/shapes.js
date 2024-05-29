const validateColor = require('validate-color').default;

//function uses module validateColor to test that the user input is actually a color value, either a color name or hexidecimal value.
function testColor(color){
    return validateColor(color);
}

//function tests that the length of the characters entered by the user for the logo name is always 3
function testName(logoName){
    
        if(logoName.length !== 3){
            return false;
        }
        else{
            return true;
        }

}

class Shape {

    constructor(colors, name, shape, textColor){

        //run input test becore defining object values
        if(testName(name) === false){
            throw new Error('Text for logo must be 3 characters long.');
        }

        if(testColor(textColor) === false){
            throw new Error('Text color input is not a valid color.');
        }

        if(testColor(colors) === false){
            throw new Error('Background color is not a valid color.');
        }

        this.colors = colors;
        this.name = name;
        this.shape = shape;
        this.textColor = textColor;
    }

}

//Triangle, Circle and Square classes all inherit from the Shape class. The onlything different is their render methods which are all specific to their specific shape.
class Triangle extends Shape{

    constructor(color, name, shape, textColor){
        super(color, name, shape, textColor);
    }

    render(){
        return `
        
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <polygon points="160,10 10,210 310,210" fill="${this.colors}" />

                <text x="160" y="160" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text>

            </svg>
        
        `;
    }

}

class Circle extends Shape{

    constructor(color, name, shape, textColor){
        super(color, name, shape, textColor);
    }

    render(){
        return `
        
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <circle cx="150" cy="100" r="100" fill="${this.colors}" />

                <text x="150" y="116" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text>

            </svg>
        
        `;
    }

}

class Square extends Shape{

    constructor(color, name, shape, textColor){
        super(color, name, shape, textColor);
    }

    render(){
        return `
        
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <rect x="10" y="10" width="200" height="200" fill="${this.colors}" />

                <text x="115" y="116" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.name}</text>

            </svg>
        
        `;
    }

}


module.exports = {Triangle, Circle, Square, testColor, testName};