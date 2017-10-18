const Validator =  require('./Validator.js');
class ArmPhoneValidator extends Validator{
  isArmPhoneNumber(phone){
    if(!phone || !super.isNumber(phone))
      return false;
    let phoneReg = /^(055\d{6}|095\d{6}|077\d{6}|093\d{6}|094\d{6}|098\d{6}|091\d{6}|099\d{6}|041\d{6}|043\d{6}|010\d{6}|[+]374\d{8}|[+]37410\d{6})$/;
    if(phoneReg.test(phonenum))
      return true;
      return false;
}
}
module.exports = Validator;
