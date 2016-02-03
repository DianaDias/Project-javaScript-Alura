  function calculaImc() {
    var peso = document.getElementById("peso-1").textContent;
    var altura = document.getElementById("altura-1").textContent;
 var alura = document.getElementById('id')
      if(altura != 0 && peso != 0){
        var imc = peso / (altura * altura);
        var tdImc = document.getElementById("imc-1");
        tdImc.textContent = imc;
        console.log(imc);
      } else {
        console("Não foi possivel calcular, pois a altura ou o peso estão com valor igual a zero!")
      }
  }
