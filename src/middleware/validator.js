'use strict';

let isValid = (type, obj) => {
  return validator[type](obj);
};

let validator = {
  categories: (obj) => {
    return !!(obj.name && obj.display_name && obj.description);
  },
  products: (obj) => {
    return !!(obj.name && obj.display_name && obj.description && obj.category);
  },
};

module.exports = (req,res,next) =>{
  console.log('valid');
  if(isValid(req.params.model,req.body)){
    next();
  }else{
    next('invaled properties');
  }
};

