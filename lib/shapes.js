class Shape {

    constructor(colors, name, shape){
        this.colors = colors;
        this.name = name;
        this.shape = shape;
    }

}

class Triangle extends Shape{

    constructor(color, name, shape){
        super(color, name, shape);
    }

    render(){
        return `
        
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <circle cx="150" cy="100" r="80" fill="${this.colors}" />

                <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.name}</text>

            </svg>
        
        `;
    }

}

class Circle extends Shape{

    constructor(color, name, shape){
        super(color, name, shape);
    }

    render(){
        return `
        
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <circle cx="150" cy="100" r="80" fill="${this.colors}" />

                <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.name}</text>

            </svg>
        
        `;
    }

}

class Square extends Shape{

    constructor(color, name, shape){
        super(color, name, shape);
    }

    render(){
        return `
        
            <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

                <circle cx="150" cy="100" r="80" fill="${this.colors}" />

                <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.name}</text>

            </svg>
        
        `;
    }

}


module.exports = {Triangle, Circle, Square};