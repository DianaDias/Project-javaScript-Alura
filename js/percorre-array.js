function percorreArray(trsPacientes, metodo) { // recebe o elemento com os pacientes e o metodo de retorno

  for(var posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++){

    var pacientes = trsPacientes[posicaoAtual];
    metodo(pacientes); // passa o paciente na posicao atual
  }

}
