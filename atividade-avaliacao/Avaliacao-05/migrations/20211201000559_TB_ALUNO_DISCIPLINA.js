
exports.up = function(knex, Promise) {
    return knex.schema.createTable('TB_ALUNO_DISCIPLINA', table => {
        table.integer('alunos_id').unsigned()
        table.integer('disciplinas_id').unsigned()
        table.foreign('alunos_id').references('TB_ALUNOS.id_al')
        table.foreign('disciplinas_id').references('TB_DISCIPLINAS.id_dis')
        table.integer('notas')
        table.integer('periodo')
        table.primary(['alunos_id', 'disciplinas_id'])
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('TB_ALUNO_DISCIPLINA')
};
