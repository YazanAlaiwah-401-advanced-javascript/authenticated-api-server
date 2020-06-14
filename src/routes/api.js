'use strict';
const express = require('express');
const reoute = express.Router();
const { getModuelById , getModuel , addModuel , updataModuel , deleteModuel} = require('./modelApis/moduleApis.js');
const validator = require('../middleware/validator.js');
const getModel = require('../middleware/getmodel.js');
const bearerAuth = require('../middleware/auth/bearer.js');
const permission = require('../middleware/auth/authorize.js');



reoute.param('model',getModel);

reoute.route('/:model')
  .get(getModuel)
  .post(bearerAuth,permission('create'),validator,addModuel);
reoute.route('/:model/:id')
  .get(getModuelById)
  .put(bearerAuth,permission('update'),validator,updataModuel)
  .delete(bearerAuth,permission('delete'),deleteModuel);

module.exports = reoute;
