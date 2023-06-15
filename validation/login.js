const Validator = require('validator');
const isEmpty = require('./is-empty');


module.exports = function validateLoginInput(data) {
    let errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';    

    if(!Validator.isEmail(data.email)) { // Returns false, so set to true
        errors.email = 'Email is invalid';
    }

    if(Validator.isEmpty(data.email)) { // Here because of the order...
        errors.email = 'Email field is required';
    }

    if(Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }

}