'use strict';
const mongoose = require('mongoose');

const Role = mongoose.Schema({
  role: { type: String, required: true, unique: true },
  permissions: { type: Array, default: [], required: true },
});


module.exports = mongoose.model('roles',Role);