
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_ALUNOS', table => {
        table.increments('id_al').primary()
        table.string('nome_aluno').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_ALUNOS')
};
