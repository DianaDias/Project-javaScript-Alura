
function listaPacientes(metodo_lista) {
var trsPacientes = document.getElementsByClassName("paciente"); //com isso consigo acessar todos os elementos que contenha a class paciente

// Passa o elemento para o percorre e recebe o paciente
percorreArray(trsPacientes, function(pacientes) {
  //insiro nas variaveis os valores de cada campo do paciente naquela posição. Tudo pela class.
  //a posição vai ser sempre zero pq e de cada pacientetr naquela class info-nome etc se existesse a class por exemplo info-nome repetida no mesmo
  //pacientetr ai deveria variar a posição entendeu? kkkkk

  var nome   = pacientes.getElementsByClassName("info-nome")[0];
  var peso   = pacientes.getElementsByClassName("info-peso")[0];
  var altura = pacientes.getElementsByClassName("info-altura")[0];
  var imc    = pacientes.getElementsByClassName("info-imc")[0];

  var getpaciente = {"nome"   :   nome.textContent,
                     "peso"   :   peso.textContent,
                     "altura" :   altura.textContent,
                     "imc1"   :   pacientes
                    };
      metodo_lista(getpaciente); // envia o obj paciente
   });
}
