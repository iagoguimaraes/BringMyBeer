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
    v.id_venda = 1


/*tipo*/

INSERT INTO tipo_produto(tipo)
VALUES ('CERVEJAS'),('VINHOS'),('OUTROS');


/*PAGAMENTO*/

INSERT INTO forma_pagamento(forma_pagamento)
VALUES ('BOLETO'), ('CARTÃO');

/*Produtos*/

INSERT INTO marca(marca)
VALUES ('ORIGINAL'),
       ('LEFFE'),
       ('BUDWEISER'),
       ('DOMAINE FONTARECHE'),
       ('SUR VALLERS'),
       ('LÍDIO CARRARO'),
       ('COLORADO'),
       ('BOHEMIA'),
       ('BRAHMA'),
       ('CORONA');

INSERT INTO foto(`path`, ordem)
VALUES ('https://emporiodacerveja.vteximg.com.br/arquivos/ids/155442-300-300/original_600.jpg', 1), 
       ('https://emporiodacerveja.vteximg.com.br/arquivos/ids/163054-300-300/Cerveja-Leffe-Nectar-250-ml.jpg?v=636191399270700000', 1), 
       ('https://emporiodacerveja.vteximg.com.br/arquivos/ids/163054-300-300/Cerveja-Leffe-Nectar-250-ml.jpg?v=636191399270700000', 1), 
       ('https://emporiodacerveja.vteximg.com.br/arquivos/ids/168373-250-250/vinho_frances_chateau_fontareche_rose.jpg', 1),
       ('https://emporiodacerveja.vteximg.com.br/arquivos/ids/163521-250-250/vinho-tinto-chileno-anya-curico-merlot-flor-frutales.jpg', 1),
       ('https://emporiodacerveja.vteximg.com.br/arquivos/ids/161367-250-250/Espumante_Dadivas_Brut.jpg?v=636111735831670000', 1),
       ('https://emporiodacerveja.vteximg.com.br/arquivos/ids/161617-250-250/colorado.jpg', 1),
       ('https://emporiodacerveja.vteximg.com.br/arquivos/ids/161617-250-250/colorado.jpg', 1),
       ('https://emporiodacerveja.vteximg.com.br/arquivos/ids/161849-250-250/Copo-Bohemia-838-Pale-Ale.jpg', 1),
       ('https://emporiodacerveja.vteximg.com.br/arquivos/ids/167495-500-500/Cerveja-Brahma-Extra-Marzen-Oktoberfest-355ml-6-unidades---Copia.jpg', 1),
       ('https://www.emporio.com/arquivos/WSLcoronaSKU.png', 1);

INSERT INTO produto(produto, preco, descricao, data_cadastro, ativo, id_marca, id_foto, id_tipo_produto)
VALUES 
('Cerveja Antarctica Original 600ml', 6.30, 'A clássica Cerveja Antarctica Original de 600 ml é reconhecida por preservar sua essência, tradição e qualidade desde 1931.', now(), true, 1, 1, 1),
('Cerveja Leffe Nectar 250ml', 14.90, 'A Cerveja Leffe Nectar 250ml é suave, refrescante e possui um retrogosto picante.', now(), true, 2, 2, 1),
('Cerveja Budweiser 600ml', 14.90, 'A Cerveja Budweiser 600ml é uma Standard American Lager de sabor leve, cor clara e aroma discreto.', now(), true, 3, 3, 1),
('Vinho Château Fontarèche Domaine de Lamy Rosé - 750ml', 40, '"Um dos cinco melhores vinhos rosés do mundo", foi assim que o Gentlemans Journal, uma das publicações de estilo mais conceituadas da Inglaterra, definiu o francês Domaine Fontarèche, exclusividade da Wine For no Brasil.', now(), true, 4, 4, 2),
('Vinho Anya Flor de Frutales Merlot - 750ml', 29, 'Já vêm do nome: frutas e flores! Muitas! Desde o rótulo, passando pelo aroma e se refletindo em boca com maçãs de casca bem vermelhinha e violetas ainda brotando de seus botões. ', now(), true, 5, 5, 2),
('Vinho Lidio Carraro Dádivas Espumante Brut - 750ml', 54.36, 'Este espumante premiado, traduz a jovialidade e elegância do terroir brasileiro, trazendo originalidade e personalidade. ', now(), true, 6, 6, 2),
('Copo Colorado 350ml', 15.90, 'No estilo caldereta, o Copo Colorado 350ml é um acessório indispensável para apreciar ainda mais o sabor da sua Cerveja Colorado. ', now(), true, 7, 7, 3),
('Balde de Alumínio Budweiser', 79.90, 'Emporio AcessóriosBaldes E Porta Cerveja O Balde Budweiser é o suporte ideal para tomar sua cerveja gelada com comodidade e estilo. Fabricado em alumínio com pintura epóxi, este balde traz a marca na parte externa em alta resolução e com tratamento que lhe garante durabilidade e resistência a riscos. ', now(), true, 3, 8, 3),
('Copo de Cristal Bohemia Pale Ale 300ml', 22.90, 'A Cervejaria Bohemia pensou em todos os detalhes para tornar sua experiência especial. Muito superior que os copos de cerveja de vidro tradicionais, conheça o Copo de Cristal Bohemia 838 Pale Ale 300ml, do estilo Pint (Nonic), muito famoso nos Pubs Ingleses e Irlandeses, foi idealizado para comportar boas doses de cerveja.', now(), true, 8, 9, 3),
('Cerveja Brahma Extra Marzen Oktoberfest 355ml - Caixa com 6 unidades', 20.90, 'A Cerveja Budweiser 600ml é uma Standard American Lager de sabor leve, cor clara e aroma discreto.A Cerveja Brahma Extra Marzen Oktoberfest 355ml traz consigo a tradição alemã, de cor acobreada, sabor refrescante com notas maltadas e teor alcoólico de 6%. ', now(), true, 9, 10, 1),
('Cerveja Corona Extra 355ml Caixa com 06 unidades', 35.90, 'A Corona é patrocinadora oficial da WSL e criou uma linha de produtos exclusiva para você acompanhar as etapas do maior campeonato de surf do mundo em boa companhia. Mergulhe em um universo de sensações.', now(), true, 10, 11, 1);