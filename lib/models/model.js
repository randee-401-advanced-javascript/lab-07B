'use strict';

class Model {
  constructor(schema) {
    this.schema = schema;
  }

  async create(cluster) {
    console.log(cluster);
    try{
      let clusterToAdd = new this.schema(cluster)
      return await clusterToAdd.save();
    } catch(e){
      console.error('Oups! Could not create new cluster because: ', e);
      return false;
    }

  }

  async read(_id) {
    //still need to verify that id is a valid id 
    let record = await this.schema.findOne({_id});
    return record;
  }

  async readByQuery(query){
    let results = await this.schema.find(query);
    return results;
  }

  async update(_id, changedRecord) {
    console.log('inside model.update');
    let newRecord = await this.schema.findByIdAndUpdate(_id, changedRecord); 
    console.log('new record', newRecord)
    return await this.read(_id);
  }

  async delete(_id) {
    let deleteRecord = await this.schema.deleteOne({_id});
    return _id;
  }
}

module.exports = Model;