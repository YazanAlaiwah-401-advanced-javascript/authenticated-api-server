'use strict';
const schema = require('../schemas/categories.schema.js');
const Model = require('./mongo.js');
/**class to to have categories collection
 * @extends Model
 */
class Collection extends Model{
  /**
   * the object shcem 
   * @param {Object} schema 
   */
  constructor(schema) {
    super(schema);
  }
}

module.exports = new Collection(schema);
