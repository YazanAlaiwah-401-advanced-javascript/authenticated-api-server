'use strict';
const express = require('express');
const router = express.Router();
const bearerAuth = require('../middleware/auth/bearer.js');
const permission = require('../middleware/auth/authorize.js');

let response = (route,permission) => 
  (req,res)=> 
    res.send(`the ${route} route works thats mean u have a ${permission} permission for it`);

router.route('/')
  .get(bearerAuth,response('get','read'))
  .post(bearerAuth,permission('create'),response('post','create'))
  .put(bearerAuth,permission('updata'),response('put','updata'))
  .patch(bearerAuth,permission('updata'),response('patch','updata'))
  .delete(bearerAuth,permission('delete'),response('delete','delete'));


module.exports = router;
