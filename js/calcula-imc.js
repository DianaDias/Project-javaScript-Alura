console.log("Chegou aqui");

var botaoCalcImc = document.getElementById("calcula-imcs");
botaoCalcImc.addEventListener('click', function () {
     //função anonima
    listaPacientes(function(recebePaciente) { // recebe o obj paciente
            var imc2 = 0;
            if(recebePaciente !== '') {

              if (recebePaciente.altura != 0 && recebePaciente.peso != 0) { // se algum for igual a zero não executa
                imc   = recebePaciente.peso / (recebePaciente.altura * recebePaciente.altura);
                tdImc = recebePaciente.imc1.getElementsByClassName("info-imc")[0]; //seleciono o elemento do imc e sempre vai ser indice [0] pq o metodo recebe sempre 1 de cada vez
                tdImc.textContent = imc; //modifico o valor do imc-1 com o valor gerado pela variavel imc.
                // console.log(tdImc);

              } else if(recebePaciente.altura === '' && recebePaciente.peso === '') { //verifico se os campos estão vazios
                console.log("Não existe paciente"); // e os campos ficam vazios

              } else { //se os campos altura ou peso for igual a zero mostra msg_erro
                tdImc = recebePaciente.imc1.getElementsByClassName("info-imc")[0]; //seleciono o elemento
                tdImc.textContent = imc2; //pego o campo e insiro imc
                console.log("Não foi possivel calcular o imc de " + recebePaciente.nome + ", pois a altura ou o peso estão com valor igual a zero!");
                console.log("chegou aqui");
              }
            }
            });
});



// ABAIXO É SO TESTES
// var trs = document.getElementsByTagName('tr');
//
// percorreArray(trs, function(tr) {
//   tr.addEventListener('mouseover', function(){
//     this.setAttribute('bgcolor', 'grey');
//   });
// });

var tag = document.getElementById('nome');
tag.onmouseover = function() {
    console.log(this.textContent);
};

tag.onmouseover = function() {
    console.log(this.textContent.toUpperCase());
};
