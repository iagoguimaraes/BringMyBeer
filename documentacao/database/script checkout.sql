
insert into produto(produto,preco,descricao,data_cadastro,ativo) values
('cerveja',3.50,'puro malte',now(),1),
('vinho',10.50,'tinto seco',now(),1);

select * from produto;


insert into forma_pagamento(forma_pagamento) values
('dinheiro'),('cartao');

select * from forma_pagamento;


insert into cliente(nome, sobrenome, data_cadastro) values
('Fulano','Da Silva', now()),
('Beltrano','Santos', now());

select * from cliente;


insert into endereco(logradouro,numero,id_cliente) values
('Rua X', '105', 1),
('Rua Y', '206', 2);


select * from endereco;




http://localhost:8080/BringMyBeer/CadastrarVenda

venda
{
	cliente:{
		idCliente: 1
    },
    formaPagamento:{
		idFormaPagamento: 1
    },
    endereco:{
		idEndereco: 1
    },
    items:[
		{
			produto:{
				idProduto: 1,
                preco: 3.50
            },
            quantidade: 2
        },
        {
			produto:{
				idProduto: 2,
                preco: 10.50
            },
            quantidade: 3
        }
    ]
}



select * from venda;

select * from item_venda;
