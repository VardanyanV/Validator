const Validator =  require('./Validator.js');
class PasswordValidator extends Validator{
  isPassword(pas){
    if(!pas)
      return false;
    let passReg = /^[\w+_-]{6,26}$/;
    let nopassReg = /^(\w+)?(password)(\w+)?$/i;
    if(passRegExp.test(pas) && !nopassReg.test(pas))
      return true;
    return false;
  }
}
module.exports = Validator;
