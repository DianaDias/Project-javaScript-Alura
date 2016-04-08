function percorreArray(trsPacientes, metodo) {

  for(var posicaoAtual = 0; posicaoAtual<= trsPacientes.length - 1; posicaoAtual++){

    var pacientes = trsPacientes[posicaoAtual];
    metodo(pacientes);
  }

}
