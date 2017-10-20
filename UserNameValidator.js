const Validator =  require("./Validator");
class UsernameValidator extends Validator {
    static isUserName(user) {
        let userRegExp = /^[\w+_-]{4,24}$/;
        return !user || !super.isString(user) || userRegExp.test(user) ? false : true;
    }
}

console.log("User name is " + UsernameValidator.isString("VardanyanV"));
module.exports = Validator;
