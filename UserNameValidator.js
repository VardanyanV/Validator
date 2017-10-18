const Validator =  require('./Validator.js');
class UsernameValidator extends Validator {
    isUserName(user) {
        let userRegExp = /^[\w+_-]{4,24}$/;
        return !user || !super.isString(user) || userRegExp.test(user) ? false : true;
    }
}

module.exports = Validator;
