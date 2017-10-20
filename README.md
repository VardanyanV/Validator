## Validator

A library of string, number, integer, float, special symbols, date validators and sanitizers.

## Strings, Number, Integer, Float, Special symbols, Date only

**This library validates and sanitizes strings, number, integer, float, special symbols, date only.**

If you're not sure if your input is a string, number, integer, float, special symbols, date coerce it using `input + ''`.
Passing anything other than a string, number, integer, float, special symbols, date is an error.

#### ES6

```javascript
const Validator =  require("./Validator");
class ArmPhoneValidator extends Validator {

ArmPhoneValidator.isNumber(+37411223344); //=> true
```

#### ES6

```javascript
import Validator from 'Validator';
```

Or, import only a subset of the library:

```javascript
import isEmailValidator from 'Validator/lib/isEmailValidator';
```

### Client-side usage

The library can be loaded either as a standalone script, or through an [AMD][amd]-compatible loader

```html
<script type="text/javascript" src="Validator.min.js"></script>
<script type="text/javascript">
  Validator.isEmailValidator('mail@mail.am'); //=> true
</script>
```

## Validators

Here is a list of the validators currently available.

Validator                               | Description
--------------------------------------- | --------------------------------------
***isString(str)***                     | check if the string is string.
**isNumber(num)**                       | check if the number is number.
**isIntrger(num)**                      | check if the integer is integer.
**isFloat(num)**                        | check if the float is float
**isSpecialSymbol(sym)**                | check if the string contains only special symbols. (`['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '\', '|', ';', ':', ''', '"', ',', '<', '>', '.', '/', '?']`).
**isDate(d)**                           | check if the string contains date only.
**isArmPhoneNumber(num)**               | check if the number is an Armenian phone number.
**isEmail(str)**                        | check if a string is a e-mail.
**isPassword(str)**                     | check if the string is correct password.
**isValURL(str)**                       | check if the string is a correct URL.
**isUserName(str)**                     | check if the string is a valid user name

## Sanitizers

Here is a list of the sanitizers currently available.

Sanitizer                              | Description
-------------------------------------- | -------------------------------
**isString(str)**                      | return (!str || typeof(str) !== 'string') ? false : true;
**isNumber(num)**                      | let numberRegExp = /^[+-]?(([0-9])+([.][0-9]*)?|[.][0-9]+)$/; 
                                       | return (!numberRegExp.test(num) || !num) ? false : true;
**isInteger(num)**                     | let numIntRegExp = /^[+-]?([0-9]+)$/;
                                       | return (!numIntRegExp.test(num) || !num) ? false : true;
**isFloat(num)**                       | let numFloatRegExp = /^[+-]?(([0-9]{5})+([.][0-9]*)?|[.][0-9]+)$/;
                                       | return (!num || typeof(num) !== 'number' || numFloatRegExp.test(num)) ? false : true;
**isSpecialSymbol(sym)**               | let symbolRegExp = /^[!@#\$%\^\&*\)\(+=~._-]+$/;
                                       | return !sym || !symbolRegExp.test(sym) ? false : true;
**isDate(d)**                          | return !d || !Date.parse(d) ? false : true;
