const Validator =  require("./Validator");
class PasswordValidator extends Validator {
    static isPassword(pas) {
        let passReg = /^[\w+_-]{6,26}$/;
        let nopassReg = /^(\w+)?(password)(\w+)?$/i;
        return !pas || !passRegExp.test(pas) && nopassReg.test(pas) ? false : true;
    }
}

console.log("Pass is " + PasswordValidator.isString("Kutrapali##nagasaki$65"));
module.exports = Validator;
