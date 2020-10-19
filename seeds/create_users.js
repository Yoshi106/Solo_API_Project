exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('company').del()
    .then(function () {
      // Inserts seed entries
      return knex('company').insert([
        {id: 1, name: 'Aibara', group: "3G"},
        {id: 2, name: 'Fujiwara', group: "4G"},
        {id: 3, name: 'Kin', group: "2G"}
      ]);
    });
};
