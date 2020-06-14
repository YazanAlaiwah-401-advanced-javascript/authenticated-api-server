'use strict';
const express = require('express');
const Roles = require('../DB/schemas/roles.schema.js');
const router = express.Router();


router.post('/post/roles', async (req, res, next) => {
  try {
    let roles = {
      'user': ['read'],
      'writers': ['read', 'create'],
      'editors': ['read', 'create', 'update'],
      'administrators': ['read', 'create', 'update', 'delete'],
    };
    for (let key in roles) {
      let record = new Roles({ role: key, permissions: roles[key] });
      record = await record.save();
    }
    res.send('all roles did add successfully');
  } catch (e) {
    next(e.message);
  }
});

module.exports = router;

