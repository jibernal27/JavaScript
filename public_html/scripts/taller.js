/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function calcular() 
{
                var x, y;
                x = document.getElementById("valor1").value;
                y = document.getElementById("valor2").value;
                z=document.getElementById("valor3").value;
                if (isNaN(x)) {
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 1 debe ser un número</div>";
                }
                else if (isNaN(y)) {
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 2 debe ser un número</div>";
                }
                if (isNaN(z)) {
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-danger\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>El valor 3 debe ser un número</div>";
                }
                else
                {
                    var  rta = parseInt(x) + parseInt(y)+ parseInt(z);
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La respuesta es: "+ rta +"</div>";;
                }
            }
function concatenar() 
{
                var x, y;
                x = document.getElementById("valor1").value;
                y = document.getElementById("valor2").value;
                z=document.getElementById("valor3").value;
                
                    var  rta =x+y+z
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>La concatenación es: "+ rta +"</div>";;
                }


function swap(myArr, indexOne, indexTwo)
{
  var tmpVal = myArr[indexOne];
  myArr[indexOne] = myArr[indexTwo];
  myArr[indexTwo] = tmpVal;
  return myArr;
}

function ordenar() 
{
     x = document.getElementById("valor1").value;
                y = document.getElementById("valor2").value;
                z=document.getElementById("valor3").value;            
    var myArr= [x, y,z];
               
                
                
             var size = myArr.length;
 
  for( var pass = 1; pass < size; pass++ )
  { // outer loop
    for( var left = 0; left < (size - pass); left++)
    { // inner loop
      var right = left + 1;
      if( myArr[left] > myArr[right] )
      {
        swap(myArr, left, right);
      }
    }
  }
 
  
                    
                    document.getElementById("msj").innerHTML = "<div class=\"alert alert-success\"> <a href=\"#\" class=\"close\" data-dismiss=\"alert\">&times</a>Ele orden es: "+myArr.toString() +"</div>";
                }
 
