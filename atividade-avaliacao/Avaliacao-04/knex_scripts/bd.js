const sqlite3 = require('sqlite3');

const db = new sqlite3.Database('./knex_scripts/DB_ESCOLA_RH.db', (error) => {
    if (error) console.log(error);
});

db.serialize(() => {
    db.run('create table if not exists TB_ALUNOS (cd_al integer primary key autoincrement , nome_al text)', (error) => {
        if (error) console.log(error);
    });

    console.log("TB_ALUNOS")

    db.all('select * from TB_ALUNOS', (error, rows) => {
        console.log(error, rows);
    });
});

db.serialize(() => {
    db.run('create table if not exists TB_DISCIPLINAS (cd_di integer primary key autoincrement , nome_di text)', (error) => {
        if (error) console.log(error);
    });

    console.log("TB_DISCIPLINAS")

    db.all('select * from TB_DISCIPLINAS', (error, rows) => {
        console.log(error, rows);
    });
});

db.serialize(() => {
    db.run('create table if not exists TB_ALUNO_DI (cd_al integer fk references TB_ALUNO(cd_al), cd_di integer fk references TB_DISCIPLINAS(cd_di), periodo integer, nota integer)', (error) => {
        if (error) console.log(error);
    });

    console.log("TB_ALUNO_DI")

    db.all('select * from TB_ALUNO_DI', (error, rows) => {
        console.log(error, rows);
    });
});