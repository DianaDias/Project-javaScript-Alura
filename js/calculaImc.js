
var trsPacientes = document.getElementsByClassName("paciente"); //com isso consigo acessar todos os elementos que contenha a class paciente

percorreArray(trsPacientes, function(pacientes){
  //insiro nas variaveis os valores de cada campo do paciente naquela posição. Tudo pela class.
  //a posição vai ser sempre zero pq e de cada pacientetr naquela class info-nome etc se existesse a class por exemplo info-nome repetida no mesmo
  //pacientetr ai deveria variar a posição entendeu? kkkkk
  var nome = pacientes.getElementsByClassName("info-nome")[0];
  var peso = pacientes.getElementsByClassName("info-peso")[0];
  var altura = pacientes.getElementsByClassName("info-altura")[0];

  var getpaciente = {"nome" :     nome.textContent,
                     "peso" :     peso.textContent,
                     "altura" :   altura.textContent,
                     calculaImc : function(){ //função anonima
  var imc = 0;
    if (this.altura != 0 && this.peso != 0) {
      return imc = getpaciente.peso / (getpaciente.altura * getpaciente.altura);
    }else{
      return imc;
    }
  }};

  var imc = getpaciente.calculaImc();

   if(imc == 0){
      var msg_erro = "Sem calculo";
      var tdImc = pacientes.getElementsByClassName("info-imc")[0]; //seleciono o elemento
      tdImc.textContent = msg_erro;
      console.log("Não foi possivel calcular o imc de " + getpaciente.nome + ", pois a altura ou o peso estão com valor igual a zero!");
    }else{
      var tdImc = pacientes.getElementsByClassName("info-imc")[0]; //seleciono o elemento
      tdImc.textContent = imc; //modifico o valor do imc-1 com o valor gerado pela variavel imc.
      console.log(imc);
  }
});
//consigo pegar os dados do paciente na posição do array atual
