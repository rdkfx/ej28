/*
* GET home page.
*/

var mime=require('mime-types');

exports.index = function(req, res){
res.render('index', { title: 'Express' })
};
exports.about = function(req, res){
res.render('about.jade')
};
exports.contacto = function(req, res){
res.render('contacto.jade')
};
exports.blog = function(req, res){
  var user = {
    name: 'salva',
    surname: 'espin',
    address: 'murcia',
    career: ' deadpool comic artist'
  };
res.render('blog.jade',{user: user})
};
exports.servicios = function(req, res){
res.render('servicios.jade')
};
exports.historia = function(req, res){
res.render('historia.jade')
};
exports.pagina2 = function(req, res){
res.redirect('https://universocomic.es/los-mejores-comics-de-deadpool/')
};
exports.blog2 = function(req, res){
res.redirect('https://es.gizmodo.com/9-comics-para-conocer-mejor-a-deadpool-el-mercenario-b-1722755693')
};
exports.pagina3 = function(req, res){
res.redirect('http://www.sensacine.com/peliculas/pelicula-146349/')
};
exports.pagina1 = function(req, res){
res.redirect('https://www.marvel.com/comics/characters/1009268/deadpool')
};
