
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('friends').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        {name: 'Harry'},
        {name: 'Ron'},
        {name: 'Hermione'}
      ]);
    });
};
