
drop schema if exists bringmybeer;
create schema bringmybeer;
use bringmybeer;

drop table if exists administrador;
create table administrador(
 id_usuario int primary key auto_increment
,nome varchar(150)
,login varchar(50)
,senha varchar(50)
,data_cadastro datetime
,ativo int
);

drop table if exists marca;
create table marca(
 id_marca int primary key auto_increment
,marca varchar(150) 
);

drop table if exists foto;
create table foto(
 id_foto int primary key auto_increment
,path varchar(1000)
,ordem int
);

drop table if exists forma_pagamento;
create table forma_pagamento(
 id_forma_pagamento int primary key auto_increment
,forma_pagamento varchar(150)
);

drop table if exists cliente;
create table cliente(
 id_cliente int primary key auto_increment
,nome varchar(150)
,sobrenome varchar(150)
,data_nasc datetime
,data_cadastro datetime
,cpf varchar(50)
,email varchar(500)
,senha varchar(50)
,telefone varchar(20)
,celular varchar(20)
);

drop table if exists tipo_produto;
create table tipo_produto(
 id_tipo_produto int primary key auto_increment
,tipo varchar(150)
);

drop table if exists produto;
create table produto(
 id_produto int primary key auto_increment
,produto varchar(150)
,preco double
,descricao varchar(1000)
,data_cadastro datetime
,ativo int
,id_marca int 
,id_foto int 
,id_tipo_produto int
,constraint fk_produto_marca foreign key (id_marca) references marca(id_marca)
,constraint fk_produto_foto foreign key (id_foto) references foto(id_foto)
,constraint fk_produto_tipo_produto foreign key (id_tipo_produto) references tipo_produto(id_tipo_produto)
);

drop table if exists estoque;
create table estoque(
 id_estoque int primary key auto_increment
,quantidade int
,data_estoque datetime
,id_produto int 
,constraint fk_estoque_produto foreign key (id_produto) references produto(id_produto)
);

drop table if exists desconto;
create table desconto(
 id_desconto int primary key auto_increment
,percentual double
,data_inicial datetime
,data_final datetime
,id_produto int
,constraint fk_desconto_produto foreign key (id_produto) references produto(id_produto)
);

drop table if exists endereco;
create table endereco(
 id_endereco int primary key auto_increment
,logradouro varchar(500)
,complemento varchar(150)
,numero int
,bairro varchar(150)
,cidade varchar(150)
,estado varchar(2)
,cep varchar(9)
,principal int
,id_cliente int 
,constraint fk_endereco_cliente foreign key (id_cliente) references cliente(id_cliente)
);

drop table if exists venda;
create table venda(
 id_venda int primary key auto_increment
,data_venda datetime
,confirmado int
,cancelado int
,id_cliente int 
,id_forma_pagamento int 
,id_endereco int 
,constraint fk_venda_cliente foreign key (id_cliente) references cliente(id_cliente)
,constraint fk_venda_forma_pagamento foreign key (id_forma_pagamento) references forma_pagamento(id_forma_pagamento)
,constraint fk_venda_endereco foreign key (id_endereco) references endereco(id_endereco)
);

drop table if exists item_venda;
create table item_venda(
 id_item_venda int primary key auto_increment
,quantidade int
,preco double
,id_venda int 
,id_produto int 
,constraint fk_item_venda_venda foreign key (id_venda) references venda(id_venda)
,constraint fk_item_venda_produto foreign key (id_produto) references produto(id_produto)
);

