
exports.up = function(knex, Promise) {
    return knex.schema.createTable('styles', table => {
        table.increments('id').primary();
        table.integer('categoryId', 11).unsigned().references('id').inTable('categories');
        table.string('name', 80).notNullable();
        table.decimal('abv', 2);
        table.string('description', 255);
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('styles');
};
