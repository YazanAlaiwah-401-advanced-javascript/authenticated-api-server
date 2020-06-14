'use strict';
const userSchema = require('../schemas/user.schema.js');

class UserCollection {
  constructor(){
    this.schema = userSchema;
  }
  /**
 * have all the data for user from sign up page
 * @param {Object} userInfo 
 */
  async create(userInfo){
    let that = this;
    return new Promise(function(res,rej){
      try{

        let user = new that.schema(userInfo);
        user.save().then(data=>{
          return res(data);
        }).catch(e=>rej(new Error('user is here')));
      }catch(e){
        rej(new Error('user is here'));
      }
    });
  }
  /**
   * have all the data for user from sign in page or will be undefined to have all users from the DB 
   * @param {Object | Undefined} userInfo 
   */
  async read(userInfo){
    if(userInfo!== undefined){
      console.log(userInfo.username,userInfo,'user');
      let record = await (await this.schema.findOne({username:userInfo.username}));
   
      if(record){
        let valid = await this.schema.authenticateUser(userInfo.password,record.password);
        if(valid){
          let token = await this.schema.generateToken(record._id);
          let userWithNewToken = await this.schema.findOneAndUpdate({_id:record._id},{token},{new:true});
          return userWithNewToken;
        }else{
          return 'Not The same pass';
        }

      }else{
        return 'this username has not sign up';
      }
    }else{
      let record = await this.schema.find({});
      return record;
    }
  }
}

module.exports = new UserCollection();  