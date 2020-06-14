'use strict';
const express = require('express');
const router = express.Router();
const userCollection = require('../DB/models/user.collection.js');
const BasicAuth = require('../middleware/auth/basic.js');
const github = require('../middleware/auth/oauth.js');

router.route('/')
  .post(signup)
  .get(BasicAuth,signin);

router.get('/oauth',github,(req,res)=>{
  res.json(req.recorde);
});

async function signup(req, res, next) {
  let record;
  try {
    record = await userCollection.create(req.body);
    res.send(record);
  } catch (e) {
    console.log(e.message);
    next(e.message);
  }
}

async function signin(req, res, next) {
  let record = await userCollection.read(req.body);
  if (typeof record !== 'string') {
    res.cookie('token', record.token);
    res.json(record);
  } else {
    next(record);
  }
}



module.exports = router;

