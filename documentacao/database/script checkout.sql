
insert into produto(produto,preco,descricao,data_cadastro,ativo) values
('cerveja',3.50,'puro malte',now(),1),
('vinho',10.50,'tinto seco',now(),1),
('cachaça artesanal',9.80,'tinto seco',now(),1);

insert into forma_pagamento(forma_pagamento) values
('dinheiro'),('cartao');

insert into cliente(nome, sobrenome, data_cadastro) values
('Fulano','Da Silva', now()),
('Beltrano','Santos', now());


insert into endereco(logradouro,numero,id_cliente) values
('Rua X', '105', 1),
('Rua Y', '206', 2);




select 
     v.id_venda
    ,v.data
    ,f.forma_pagamento
    ,p.produto
    ,i.quantidade
    ,i.preco
from 
	venda v
    inner join forma_pagamento f
		on f.id_forma_pagamento = v.id_forma_pagamento
	inner join item_venda i
		on i.id_venda = v.id_venda
	inner join produto p
		on p.id_produto = i.id_produto
where
    id_venda = 1

