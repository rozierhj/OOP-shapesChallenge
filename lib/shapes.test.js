const {testColor, testName} = require('./shapes');

describe('testColor', ()=>{

    it('should return true if the color is listed by name', ()=>{
        expect(testColor('red')).toBe(true);
    });
    it('should return false if the color is blank', ()=>{
        expect(testColor('')).toBe(false);
    });
    it('should return true if is color is hexadecimal', ()=>{
        expect(testColor('#FF0000')).toBe(true);
    });
    it('should return false if the color name has a typo', ()=>{
        expect(testColor('blu')).toBe(false);
    });

});

describe('testName',()=>{
    it('should return true if the logo name is 3 characters long',()=>{
        expect(testName('123')).toBe(true);
    });
    it('should return false if the logo name is less than 3 characters long',()=>{
        expect(testName('12')).toBe(false);
    });
    it('should return false if the logo name is more than 3 characters long',()=>{
        expect(testName('1234')).toBe(false);
    });
});

