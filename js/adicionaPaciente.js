// Apos clicar no botão adicionar novo paciente....
var botaoAddPaciente = document.querySelector('#adicionar-paciente');

// O proprio navegador fornece o event pra gente, esse event desabilita todos os eventos padrões
botaoAddPaciente.addEventListener('click', function(event) {

          event.preventDefault(); // Serve para evitar o carregamento da pagina já que o botão esta dentro de um form
          var nome   = document.querySelector('#campo-nome');
          var peso   = document.querySelector('#campo-peso');
          var altura = document.querySelector('#campo-altura');

          var pacienteNovo = "<tr class='paciente'>" +
                             "<td id='nome' class='info-nome'>" + nome.value + "</td>" +
                             "<td class='info-peso'>" + peso.value + "</td>" +
                             "<td class='info-altura'>" + altura.value + "</td>" +
                             "<td class='info-imc'></td>" +
                             "</tr>";

    // Agora adionaremos a tabela
    var tabela = document.querySelector('table'); // vai servir pq neste html so existe uma tabela
    tabela.innerHTML = tabela.innerHTML + pacienteNovo;

    nome.value   = "";
    peso.value   = "";
    altura.value = "";
});
