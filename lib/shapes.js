class Shape {

    constructor(colors, name, shape, textColor){

        if(name.length !== 3){
            throw new Error('Text for logo must be 3 characters long.');
        }

        this.colors = colors;
        this.name = name;
        this.shape = shape;
        this.textColor = textColor;
    }

}

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


module.exports = {Triangle, Circle, Square};