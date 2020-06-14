'use strict';

/**
 * filter will filte the data need it in the schema 
 * @param {Object} obj 
 * @param {String} type 
 * @returns {Object} 
 */
let filter = (obj,type) =>{
  let {name,display_name,description, category} = obj;
  switch(type){
  case 'categories':
    return {name,display_name,description};
  case 'products':
    return {name,display_name,description,category};
  }
};


let getModuelById = async (req,res,next)=>{
  let id = req.params.id;
  try{
    let data = await req.model.get(id);
    res.json(data[0]);
  }catch(e){
    next(e.message);
  }
};

let getModuel= async (req,res,next) =>{
  try{
    let data = await req.model.get();
    let result = {
      count: data.length,
      results:data,
    };
    res.json(result);
  }catch(e){
    next(e.message);
  }
};

let addModuel = async (req,res,next)=>{
  let category = filter(req.body,req.params.model);
  try{
    let data = await req.model.create(category);
    res.json(data);
  }catch(e){
    next(e.message);
  }
};

let updataModuel = async (req,res,next) => {
  let { id } = req.params;
  let newobj = filter(req.body,req.params.model);
  try{
    let updataData = await req.model.update(id,newobj);
    res.json(updataData);
  }catch(e){
    next(e.message);
  }
};

let deleteModuel = async (req,res,next) => {
  let { id } = req.params;
  try{
    let deleted = await req.model.delete(id);
    res.json(deleted);
  }catch(e){
    next(e.message);
  }
};

module.exports = {
  getModuelById,
  getModuel,
  addModuel,
  updataModuel,
  deleteModuel,
};
