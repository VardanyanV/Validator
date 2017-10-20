const Validator =  require("./Validator");
class URLValidator extends Validator {
    static isValURL(url) {
        let urlReg = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;        
	return !url || !urlReg.test(url) ? false : true;
    }
}

console.log("URL is " + URLValidator.isString("http://www.mic.armenia.am"));
module.exports = Validator;
