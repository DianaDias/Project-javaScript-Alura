
          var trsPacientes = document.getElementsByClassName("paciente"); //com isso consigo acessar todos os elementos que contenha a class paciente

          for(var posicaoAtual = 0; posicaoAtual<= trsPacientes.length -1; posicaoAtual++){

          //consigo pegar os dados do paciente na posição do array atual
          var pacientetr = trsPacientes[posicaoAtual];
          //insiro nas variaveis os valores de cada campo do paciente naquela posição. Tudo pela class.
          //a posição vai ser sempre zero pq e de cada pacientetr naquela class info-nome etc se existesse a class por exemplo info-nome repetida no mesmo
          //pacientetr ai deveria variar a posição entendeu? kkkkk
          var nome = pacientetr.getElementsByClassName("info-nome")[0];
          var peso = pacientetr.getElementsByClassName("info-peso")[0];
          var altura = pacientetr.getElementsByClassName("info-altura")[0];

          var pacienteAtual = {"nome" : nome.textContent,
                               "peso" : peso.textContent,
                               "altura" : altura.textContent,
                               calculaImc : function(){ //função anonima
                                 var imc = 0;
                                 if (this.altura != 0 && this.peso != 0) {
                                   return imc = pacienteAtual.peso / (pacienteAtual.altura * pacienteAtual.altura);
                                 }else{
                                   return imc;
                                   }
                               }};

          var imc = pacienteAtual.calculaImc();

          if(imc == 0){
              var msg_erro = "Sem calculo";
              var tdImc = pacientetr.getElementsByClassName("info-imc")[0]; //seleciono o elemento
              tdImc.textContent = msg_erro;
              console.log("Não foi possivel calcular o imc de " + pacienteAtual.nome + ", pois a altura ou o peso estão com valor igual a zero!");
            }else{
                var tdImc = pacientetr.getElementsByClassName("info-imc")[0]; //seleciono o elemento
                tdImc.textContent = imc; //modifico o valor do imc-1 com o valor gerado pela variavel imc.
                console.log(imc);
              }
}
