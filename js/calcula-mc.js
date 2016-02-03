  function calculaImc() {
    var peso = document.getElementById("peso-1").textContent; //seleciono o elemento e pego o valor do campo
    var altura = document.getElementById("altura-1").textContent;
    var nome = document.getElementById("nome-1");
    //atribuindo valores ao paciente;
    var paciente = {
      "nome": nome,
      "peso": peso,
      "altura": altura
    };

    if (paciente.altura != 0 && paciente.peso != 0) {
      var imc = paciente.peso / (paciente.altura * paciente.altura);
      var tdImc = document.getElementById("imc-1"); //seleciono o elemento
      tdImc.textContent = imc; //modifico o valor do imc-1 com o valor gerado pela variavel imc.
      //  var nomeex = "Julia";
      //  paciente.nome.textContent = nomeex;
      console.log(imc);
    } else {
      console("Não foi possivel calcular, pois a altura ou o peso estão com valor igual a zero!")
    }
  }
