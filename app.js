const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const cors = require('cors');

//especificamos el subdirectorio donde se encuentran las páginas estáticas
app.use(express.static(__dirname + '/public'));

//extended: false significa que parsea solo string (no archivos de imagenes por ejemplo)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post('/calcular', (req, res) => {
  let num1=req.body.num1;
  let operacion= req.body.operacion;
  let num2=req.body.num2;

  num1=parseInt(num1);
  num2=parseInt(num2);
  let result=0;
  
  if(operacion == "sumar"){
    result=num1 + num2;
  }else if(operacion == "restar" ){
      result=num1 - num2;
  }else if(operacion == "multiplicar"){
      result=num1 * num2;
  }else{
    result= num1 / num2;
  }
  	console.log(num1,num2,result);
  
 res.send ({"result":result});
})

var server=app.listen(3000, () => {
  console.log('Servidor web iniciado');
});