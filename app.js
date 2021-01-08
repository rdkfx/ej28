/**
* Module dependencies.
*/

var express = require('express')
 , routes = require('./routes')

 //  Agregamos el archivo js de las rutas:
var mensajes = require('./routes/mensajes');

var app = module.exports = express.createServer();
var port=(process.env.PORT || 3000);
var mime=require('mime-types');

// Configuration

app.configure(function(){
 app.set('views', __dirname + '/views');
 app.set('view engine', 'jade');
 app.use(express.bodyParser());
 app.use(express.methodOverride());
 app.use(app.router);
 app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
 app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
 app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.get('/historia', routes.historia);
app.get('/about', routes.about);
app.get('/blog', routes.blog);

app.get('/pagina2', routes.pagina2);
app.get('/blog2', routes.blog2);
app.get('/pagina1', routes.pagina1);
app.get('/pagina3', routes.pagina3);


//Ruta del formulario 2
app.get('/contacto', mensajes.contacto);
 // Ruta de vista y recepción de datos del foumario 2
app.get('/vercontacto', mensajes.vercontacto);
app.post('/vercontacto', mensajes.vercontacto);

app.get('/servicios', routes.servicios);
app.post('/servicios', function(req, res){
  res.send(req.body);});


app.listen(port);
//console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
