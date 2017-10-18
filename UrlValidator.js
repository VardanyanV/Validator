const Validator =  require('./Validator.js');
class URLValidator extends Validator {
    isValURL(url) {
        let urlReg = /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)(.*)?(#[\w\-]+)?$/;        
	return !url || !urlReg.test(url) ? false : true;
    }
}

module.exports = Validator;
