'use strict';
/**
 * class will have all the collection that the schema need with CRUD
 */
class Model {
  /**
   * the opject schema 
   * @param {Object} schema 
   */
  constructor(schema) {
    this.schema = schema;
  }
  /**
   * the id number that we will search on 
   * @param {Number} _id 
   * @returns {Array} the data from our database
   */
  get(_id){
    _id = _id?{_id}:{};
    return this.schema.find(_id);
  }
  /**
   * the data we will add to the database
   * @param {Object} product 
   * @returns {Object} the row of the data we add it
   */
  create(product){
    const record = new this.schema(product);
    return record.save();
  }
  /**
   * its will updata the data in the database
   * @param {Number} _id the number of the row we will updata 
   * @param {Object} record the data will be updataed 4
   * @returns {Object} the updata it data
   */
  update(_id, record) {
    return this.schema.findByIdAndUpdate(_id, record, { new: true });
  }

  /**
   * will delete the data from the database
   * @param {Number} _id the id of the row we will delete
   * @returns {Object} the data we have deleted
   */
  delete(_id) {
    return this.schema.findByIdAndDelete(_id);
  }
}

module.exports = Model;