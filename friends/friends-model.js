const db = require('../data/db-config');

module.exports ={
  findFriends,
  add,
  remove
}

function findFriends(){
  return db('friends')
}

function add(friend){
  return db('friends')
  .insert(friend).then(ids =>{
    return db('friends').where({id: ids[0]}).first()
  })
}

function remove(id){
  return db('friends')
  .where({id})
  .del()
}