var express = require('express');
var app = express();
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
/* ==========================================================
serve the static index.html from the public folder
============================================================ */
app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var products = [
		{
			_id: '1sadDASDdasd554456',
			name: 'Cerveja Serramalte 600ml', 
			price: 7.49, 
			desc: 'Fundada em 1957, em Getúlio Vargas (RS), a Serramalte (600 ml) é uma Premium American Lager de cor amarelo claro, e muito refrescante.',
			images: ['https://emporiodacerveja.vteximg.com.br/arquivos/ids/159716-1000-1000/serramalte600-2.jpg',
					 'https://emporiodacerveja.vteximg.com.br/arquivos/ids/159717-55-55/serramalte600-3.jpg',
					 'https://emporiodacerveja.vteximg.com.br/arquivos/ids/159718-55-55/serramalte600-4.jpg',
					 'https://emporiodacerveja.vteximg.com.br/arquivos/ids/159719-55-55/serramalte600-5.jpg'],
			off: 10,
			category: 'cerveja'
		},
		{
			_id: '1sadDsdasASDdasd995',
			name: 'Cerveja Quilmes 970ml',
			price: 14.49,
			desc: 'Há quase 30 anos, a Cerveja Quilmes 970ml é sinônimo de popularidade e qualidade na Argentina.',
			images: [
					  'https://emporiodacerveja.vteximg.com.br/arquivos/ids/159892-1000-1000/quilmes_970-3.jpg',
					  'https://emporiodacerveja.vteximg.com.br/arquivos/ids/159893-1000-1000/quilmes_970-4.png',
					  'https://emporiodacerveja.vteximg.com.br/arquivos/ids/159894-1000-1000/quilmes_970-5.jpg'
					],
			off: 0,
			category: 'cerveja'
		},
		{
			_id: '1sadDASDda5a55dssd88',
			name: 'Cerveja Norteña 960ml Caixa com 12 unidades',
			price: 14.49,
			desc: 'Com cor amarelo intenso e aroma discreto de lúpulo e frutas, a Cerveja Norteña 960ml (caixa com 12 unidades) é uma Standard American Lager com um suave amargor no final.',
			images: ['https://emporiodacerveja.vteximg.com.br/arquivos/ids/159143-1000-1000/3479881_Nort-960ml-01w.jpg',
					  'https://emporiodacerveja.vteximg.com.br/arquivos/ids/159144-1000-1000/3479883_Nort-960ml-02.jpg',
					  'https://emporiodacerveja.vteximg.com.br/arquivos/ids/159145-1000-1000/3479886_Nort-960ml-03.jpg',
					  'https://emporiodacerveja.vteximg.com.br/arquivos/ids/159146-500-500/5536571_nort_servida.jpg'
					],
			off: 5,
			category: 'cerveja'
		},
		{
			_id: '1sadDASDdasd55a5sd555',
			name: 'Cerveja Coronita Extra 210ml Caixa com 06 unidades',
			price: 25.50,
			desc: 'O pack de Cerveja Coronita Extra 210ml (com 06 unidades) gela rapidamente — devido ao seu tamanho — e é ideal para dividir com os amigos numa prainha!',
			images: ['https://emporiodacerveja.vteximg.com.br/arquivos/ids/155601-500-500/CoronitaCaixacom6.jpg',
					  'https://emporiodacerveja.vteximg.com.br/arquivos/ids/157745-500-500/124318408-2-4.jpg',
					  'https://emporiodacerveja.vteximg.com.br/arquivos/ids/157746-500-500/124318408-3-4.jpg',
					  'https://emporiodacerveja.vteximg.com.br/arquivos/ids/157747-500-500/124318408-4-4.jpg'
					],
			off: 50,
			category: 'cerveja'
		},		
		{
			_id: '1sadDASDdas555a5sdsddpp',
			name: 'Vinho Château Fontarèche Domaine de Lamy Rosé - 750ml',
			price: 35.00,
			desc: 'Um dos cinco melhores vinhos rosés do mundo", foi assim que o Gentleman\'s Journal, uma das publicações de estilo mais ',
			images: ['https://emporiodacerveja.vteximg.com.br/arquivos/ids/168013-1000-1000/vinho-rose-frances-barato-premiado-melhor-mundo-fontareche.jpg'
					],
			off: 50,
			category: 'vinho'
		},
		{
			_id: '1sadDsdsadsd55566578dasd',
			name: 'Vinho Louis Vallon Bordeaux Rosé 2014 - 750ml',
			price: 73.00,
			desc: 'Quando se fala em rosé francês, a primeira região que vem à cabeça é a Provença e seus blends com Grenache.',
			images: ['https://emporiodacerveja.vteximg.com.br/arquivos/ids/163268-1000-1000/vinho-rose-frances-louisvallon-bordeaux-blanc-2014.jpg'
					],
			off: 0,
			category: 'vinho'
		},
		{
			_id: '1sadDAasdasdasd554SDdasd',
			name: 'Kit Vinho - Giacondi Rosso + Garrafa Baby',
			price: 73.00,
			desc: '1x Vinho Giacondi Rosso - 750ml: Simples, econômico, aroma de frutas vermelhas e boa acidez, este tinto de coloração vermelho rubi ',
			images: ['https://emporiodacerveja.vteximg.com.br/arquivos/ids/166592-1000-1000/vinho-kit-tinto-italiano-brinde-garrafa-baby-pequena-taca-rosso-giacondi.jpg'
					],
			off: 0,
			category: 'vinho'
		},
		{
			_id: '1sadDASDdsadsdas55687asd',
			name: 'Taça de Cristal Patagonia 300ml',
			price: 15.90,
			desc: 'Muito superior que um copo para você degustar sua cerveja, a Cervejaria Patagonia preparou a Taça de Cristal Patagonia 300ml.',
			images: [ 'https://emporiodacerveja.vteximg.com.br/arquivos/ids/164559-500-500/Taca-Patagonia-Bohemian-Pilsener.jpg',
					  'https://emporiodacerveja.vteximg.com.br/arquivos/ids/164562-500-500/Taca-Patagonia-Amber-Lager.jpg',
					  'https://emporiodacerveja.vteximg.com.br/arquivos/ids/164563-500-500/Taca-Patagonia.jpg'
					],
			off: 0,
			category: 'outros'
		}
	];

app.get('/products', function(req, res){
	setTimeout(function(){
		res.json(products);
	}, 500);
});

app.get('/products/:filters', function(req, res){
	var query = JSON.parse(req.query.params);
	var result = products.filter(function(product){
		if(product.category===query.category && product.price <= parseFloat(query.price) || query.category==='all' && product.price <= parseFloat(query.price)){
			if(query.off) {
				if(product.off > 0) {
					return product;
				} else{
					return;
				}
			}
			return product;
		}
	});

	setTimeout(function(){
		res.json(result);
	}, 500);
});


app.get('/products/search/:name', function(req, res){
	var query = req.params;
	// console.log(query);
	var result = products.filter(function(product){
		if(product.name.toLowerCase().indexOf(query.name.toLowerCase()) > 0 || product.desc.toLowerCase().indexOf(query.name.toLowerCase()) > 0) {
			return product;
		}
	});

	setTimeout(function(){
		res.send(result);
	}, 500);
});

app.get('/*', function(req, res){
	res.sendFile(path.resolve('public/index.html'));
});

http.createServer(app).listen(3000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});
