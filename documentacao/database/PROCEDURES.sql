DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `cadastrar_venda`(
 in _id_cliente int
,in _id_forma_pagamento int
,in _id_endereco int
)
begin

insert into venda(data,confirmado,cancelado,id_cliente,id_forma_pagamento,id_endereco)
values (now(),0,0,_id_cliente,_id_forma_pagamento,_id_endereco);

select LAST_INSERT_ID();

end$$
DELIMITER ;

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
