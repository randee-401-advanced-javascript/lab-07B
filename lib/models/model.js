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
    try{
    let record = await this.schema.findOne({_id});
    return record;
    } catch (e) {
      console.error('Dagnabit! Things went ary trying to find that record.', e);
      return false; 
    }
  }

  async readByQuery(query){
    try {
    let results = await this.schema.find(query);
    return results;
    } catch(e){
      console.error('Simply could not find the thing you were looking for', e);
      return false;
    }
  }

  async update(_id, changedRecord) {
    try {
      console.log('inside model.update');
      let newRecord = await this.schema.findByIdAndUpdate(_id, changedRecord); 
      console.log('new record', newRecord)
      return await this.read(_id);
    } catch(e){
      console.error('Welp, things went wrong updating. See the next bit of gibberish for a clue as to why.', e);
      return false; 
    }
   
  }

  async delete(_id) {
    try{
    let deleteRecord = await this.schema.deleteOne({_id});
    return _id;
    } catch(e){
      console.error('This sucker is persistent and was not deleted. Stil want to take it down? The next bit might give you a clue as to how to make that happen next time', e);
      return false;
    }
  }
}

module.exports = Model;