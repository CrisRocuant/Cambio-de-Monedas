function calculardivisa(){
  var moneda = document.getElementById('moneda').value;
  var respuesta = document.getElementById('respuesta');
  if(moneda == 0 || moneda =="0"){
    respuesta.style.display="initial";
    respuesta.innerHTML ="Debes seleccionar una moneda";
  }else{
    var dolares = document.getElementById('dolar').value;
    if(moneda == "E"){
      var totalcambio = parseInt(dolares)* 1.02;
      respuesta.innerHTML = dolares + " USD Equivale a " + totalcambio.toFixed(2) + " EUR";
    }else if(moneda == "PA"){
      var totalcambio = parseInt(dolares)* 157.15;
      respuesta.innerHTML = dolares + " USD Equivale a " + totalcambio.toFixed(2) + " ARS";
    }else if(moneda == "PCH"){
      var totalcambio = parseInt(dolares)* 944.66;
      respuesta.innerHTML = dolares + " USD Equivale a " + totalcambio.toFixed(2) + " CLP";
    }
    
  respuesta.style.display="initial";
  
  }
}