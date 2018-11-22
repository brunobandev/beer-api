
exports.up = function(knex, Promise) {
    return knex.schema.createTable('beers', table => {
        table.increments('id').primary()
        table.integer('styleId', 11).unsigned().references('id').inTable('styles');
        table.string('name', 80).notNullable()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('beers')
};
