/* En primer lugar creamos una variable que será la que guarde todos los mensajes enviados */
var lista = new Array();

/* Función que nos cargará una vista con un formulario  */
function contacto(req, res){
   res.render('contacto');
}
// GET de la vista del Formulario
exports.contacto = function(req, res){
   contacto(req, res);
}

// Función para mostrar vista con el contenido del formulario
function contacto2(req, res){
   res.render('vercontacto', {
      lista: lista
   });
}
// GET de la vista del CONTENIDO enviado por formulario
exports.vercontacto = function(req, res){
   contacto2(req, res);
}
/* Así recibimos las variables de tipo POST y las tratamos */
exports.vercontacto = function(req, res){
   var asunto = req.body.asunto;
   var mensaje = req.body.mensaje;
   lista.push({
      asunto: asunto,
      mensaje: mensaje
   })
   contacto2(req, res);
}
