class Validator {
    
    static isString(str) {
        return (!str || typeof(str) !== 'string') ? false : true;
    }

    static isNumber(num) {
        let numberRegExp = /^[+-]?(([0-9])+([.][0-9]*)?|[.][0-9]+)$/;
        return (!numberRegExp.test(num) || !num) ? false : true;
    }

    static isInteger(num) {
        let numIntRegExp = /^[+-]?([0-9]+)$/;
        return (!numIntRegExp.test(num) || !num) ? false : true;
    }

    static isFloat(num) {
        let numFloatRegExp = /^[+-]?(([0-9]{5})+([.][0-9]*)?|[.][0-9]+)$/;
        return (!num || typeof(num) !== 'number' || numFloatRegExp.test(num)) ? false : true;
    }

    static isSpecialSymbol(sym) {
        let symbolRegExp = /^[!@#\$%\^\&*\)\(+=~._-]+$/;
        return !sym || !symbolRegExp.test(sym) ? false : true;
    }

    static isDate(d) {
        return !d || !Date.parse(d) ? false : true;
    }
}

console.log(Validator.isString("ere"));
console.log(Validator.isNumber(+37499999192));
console.log(Validator.isInteger("50"));
console.log(Validator.isFloat(5.80));
console.log(Validator.isDate("12,03,2003"));
console.log(Validator.isSpecialSymbol('&'));
