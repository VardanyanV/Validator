const Validator =  require("./Validator");
class EmailValidator extends Validator {
    static isEmail(email) {
        let emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return (!email || !emailRegExp.test(email)) ? false : true;
    }
      
}

console.log("Email is " + EmailValidator.isString("varvanyan.vardan477@gmail.com"));
module.exports = Validator;
