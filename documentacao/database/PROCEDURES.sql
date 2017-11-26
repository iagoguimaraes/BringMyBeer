DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `cadastrar_venda`(
 in _id_cliente int
,in _id_forma_pagamento int
,in _id_endereco int
)
begin

insert into venda(data_venda,confirmado,cancelado,id_cliente,id_forma_pagamento,id_endereco)
values (now(),0,0,_id_cliente,_id_forma_pagamento,_id_endereco);

select LAST_INSERT_ID();

end$$
DELIMITER ;

------------------------------------------------------------------------
  
DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `cadastrar_item_venda`(
 in _quantidade float
,in _preco double
,in _id_venda int
,in _id_produto int
)
begin

insert into item_venda(quantidade,preco,id_venda,id_produto)
values (_quantidade,_preco,_id_venda,_id_produto);

select LAST_INSERT_ID();

end$$
DELIMITER ;

-----------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `cadastrar_cliente`(
 in _nome varchar(150)
,in _sobrenome varchar(150)
,in _data_nasc datetime
,in _data_cadastro datetime
,in _cpf varchar(50)
,in _email varchar(500)
,in _senha varchar(50)
,in _telefone varchar(20)
,in _celular varchar(20)
)
begin

insert into cliente(nome,sobrenome,data_nasc,data_cadastro,cpf,email,senha,telefone,celular)
values (_nome,_sobrenome,_data_nasc,_data_cadastro,_cpf,_email,_senha,_telefone,_celular);

select LAST_INSERT_ID();

end$$
DELIMITER ;

-----------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `alterar_cliente`(
 in _id_cliente int
,in _nome varchar(150)
,in _sobrenome varchar(150)
,in _data_nasc datetime
,in _data_cadastro datetime
,in _cpf varchar(50)
,in _email varchar(500)
,in _senha varchar(50)
,in _telefone varchar(20)
,in _celular varchar(20)
)
begin

update cliente
set
	 nome = _nome
	,sobrenome = _sobrenome
	,data_nasc = _data_nasc
	,data_cadastro = _data_cadastro
	,cpf = _cpf
	,email = _email
	,senha = _senha
	,telefone = _telefone
	,celular = _celular
where
	id_cliente = _id_cliente;
	

end$$
DELIMITER ;

-------------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `cadastrar_endereco`(
 in _logradouro varchar(500)
,in _complemento varchar(150)
,in _numero int
,in _bairro varchar(150)
,in _cidade varchar(150)
,in _estado varchar(2)
,in _cep varchar(9)
,in _principal int
,in _id_cliente int 
)
begin

insert into endereco(logradouro,complemento,numero,bairro,cidade,estado,cep,principal,id_cliente)
values (_logradouro,_complemento,_numero,_bairro,_cidade,_estado,_cep,_principal,_id_cliente);

select LAST_INSERT_ID();

end$$
DELIMITER ;

-----------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `alterar_endereco`(
 in _id_endereco int
,in _logradouro varchar(500)
,in _complemento varchar(150)
,in _numero int
,in _bairro varchar(150)
,in _cidade varchar(150)
,in _estado varchar(2)
,in _cep varchar(9)
,in _principal int
)
begin

update endereco
set
	 logradouro = _logradouro
	,complemento = _complemento
	,numero = _numero
	,bairro = _bairro
	,cidade = _cidade
	,estado = _estado
	,cep = _cep
	,principal = _principal
where
	id_endereco = _id_endereco;
	

end$$
DELIMITER ;

-------------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `remover_endereco`(
 in _id_endereco int
)
begin

SET foreign_key_checks = 0;

DELETE FROM endereco WHERE id_endereco = _id_endereco;

SET foreign_key_checks = 1;

end$$
DELIMITER ;

-------------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `remover_endereco`(
 in _id_endereco int
)
begin

update endereco
set
	ativo = 0
where
	id_endereco = _id_endereco;
	
select LAST_INSERT_ID();

end$$
DELIMITER ;

-------------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obter_vendas_by_cliente`(
 in _id_cliente int
)
begin

select * from venda where id_cliente = _id_cliente;	

end$$
DELIMITER ;

-------------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obter_item_venda_by_venda`(
 in _id_venda int
)
begin

select * from item_venda where id_venda = _id_venda;	

end$$
DELIMITER ;

-------------------------------------------------------------------------


DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obter_venda_by_id`(
 in _id_venda int
)
begin

select * from venda where id_venda = _id_venda;	

end$$
DELIMITER ;

-------------------------------------------------------------------------


DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obter_forma_pagamento_by_id`(
 in _id_forma_pagamento int
)
begin

select * from forma_pagamento where id_forma_pagamento = _id_forma_pagamento;	

end$$
DELIMITER ;

-------------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obter_produto`()
begin

select * from produto;	

end$$
DELIMITER ;

-------------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obter_tipo_by_id`(
in _id_tipo int
)
begin

select * from tipo_produto where id_tipo_produto = _id_tipo;	

end$$
DELIMITER ;

-------------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obter_forma_pagamento_by_id`(
in _id_forma_pagamento int
)
begin

select * from forma_pagamento where id_forma_pagamento = _id_forma_pagamento;	

end$$
DELIMITER ;

-------------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obter_marca_by_id`(
in _id_marca int
)
begin

select * from marca where id_marca = _id_marca;	

end$$
DELIMITER ;

-------------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obter_foto_by_id`(
in _id_foto int
)
begin

select * from foto where id_foto = _id_foto;	

end$$
DELIMITER ;

-------------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obter_desconto_by_produto`(
in _id_produto int
)
begin

select * from desconto where id_produto = _id_produto and now() between data_inicial and data_final;	

end$$
DELIMITER ;

-------------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obter_endereco_by_id`(
in _id_endereco int
)
begin

select * from endereco where id_endereco = _id_endereco;	

end$$
DELIMITER ;

-------------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obter_cliente_by_id`(
in _id_cliente int
)
begin

select * from cliente where id_cliente = _id_cliente;	

end$$
DELIMITER ;

-------------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obter_endereco_by_cliente`(
in _id_cliente int
)
begin

select * from endereco where id_cliente = _id_cliente;	

end$$
DELIMITER ;

-------------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obter_endereco_by_cliente`(
in _id_cliente int
)
begin

select * from endereco where id_cliente = _id_cliente;	

end$$
DELIMITER ;

-------------------------------------------------------------------------


DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obter_cliente_by_senha`(
in _email varchar(500),
in _senha varchar(50)
)
begin

select * from cliente where email = _email and senha = _senha;	

end$$
DELIMITER ;
-------------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obter_produto_by_pesquisa`(
 in _produto varchar(150)
,in _tipo varchar(150)
,in _marca varchar(150)
,in _vlrmin double
,in _vlrmax double
)
begin

select
	p.*
from
	produto p
    inner join tipo_produto tp
		on tp.id_tipo_produto = p.id_tipo_produto
	inner join marca m
		on m.id_marca = p.id_marca
where
	(p.produto like '%%' or _produto is null)
    and (tp.tipo = _tipo or _tipo is null) 
    and (m.marca = _marca or _marca is null)
    and p.preco between _vlrmin and _vlrmax;

end$$
DELIMITER ;

-------------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obter_produto_desconto`()
begin

select
	*
from
	desconto d
    inner join produto p
		on p.id_produto = d.id_produto
where
	data_final < now();

end$$
DELIMITER ;

-------------------------------------------------------------------------

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `obter_produto_mais_vendido`()
begin

select
	 p.*
    ,count(*) qtd
from
	item_venda v
    inner join produto p
		on p.id_produto = v.id_produto
order by 
		qtd desc
limit
	5;

end$$
DELIMITER ;
 