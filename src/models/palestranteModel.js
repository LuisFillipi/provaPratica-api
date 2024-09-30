const tablePalestrante = /*sql*/`
create table if not exists objetos(
    palestrante_id varchar(60) primary key,
    nome varchar(255) not null,
    cargo varchar(255) not null,
    telefone varchar(255) not null,
    palestrante_id varchar(60),
    created_at timestamp default value current_timestamp,
    updated_at timestamp default value current_timestamp on update current_timestamp,
)
`;

conn.query(tablePalestrante, (err)=> {
    if(err){
        console.error(err)
        return
    }
    console.log("tabela [palestrante] criado com sucesso")
})
