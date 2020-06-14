'use strict';
const schema = require('../schemas/products.schema.js');
const Model = require('./mongo.js');
/**class to to have categories collection
 * @extends Model
 */
class Product extends Model {
  /**
   * the object shcem 
   * @param {Object} schema 
   */
  constructor(schema) {
    super(schema);
  }
}

module.exports = new Product(schema);
