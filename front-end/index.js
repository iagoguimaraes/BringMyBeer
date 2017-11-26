var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');
var Correios = require('node-correios'), correios = new Correios();
/* ==========================================================
serve the static index.html from the public folder
============================================================ */
// app.use(cors());	

//some other code
app.use(bodyParser.json());
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    // res.header("Content-Type", "application/json");
    next();
};

app.use(allowCrossDomain);
app.use(cors());

app.use(express.static('./public'));

app.get('/frete', function(req, res){
	var args = {
    	nCdServico: '40010,41106,40215',
    	sCepOrigem: '04844150',
    	sCepDestino:  req.query.cep,
    	nVlLargura: 11,
    	nVlDiametro: 0,
    	nVlComprimento: 30,
    	nCdFormato: 1,
    	nVlPeso: '10',
    	nVlAltura: 10
	}

	correios.calcPrecoPrazo(args, function (err, result) {
    	res.send(result);
	});

});

app.get('/*', function(req, res){
	res.sendFile(path.resolve('public/index.html'));
});




var server = app.listen(process.env.PORT || 3000, function () {
  var port = server.address().port;
  console.log("Express is working on port" + port);
});

/*
http.createServer(app).listen(3000, function() {
    console.log('Servidor escutando na porta: ' + this.address().port);
});
*/