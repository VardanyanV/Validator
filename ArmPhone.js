const Validator =  require("./Validator");
class ArmPhoneValidator extends Validator {
    static isArmPhoneNumber(phone) {
        let phoneRegExp = /^(055\d{6}|095\d{6}|077\d{6}|093\d{6}|094\d{6}|098\d{6}|091\d{6}|099\d{6}|041\d{6}|043\d{6}|010\d{6}|[+]374\d{8}|[+]37410\d{6})$/;
        (!phone || !super.isNumber(phone) || !phoneRegExp.test(phone)) ? false : true;
    }
}

console.log("Phone is " + ArmPhoneValidator.isNumber(+37499999192));
module.exports = Validator;
