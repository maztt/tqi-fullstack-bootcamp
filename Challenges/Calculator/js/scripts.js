function calculator() {
  const operacao = Number(prompt('Digite o tipo de operação desejada: \n1 - Soma (+)\n2 - Subtração (-)\n3 - Multiplicação (*)\n4 - Divisão (/)\n5 - Divisão Inteira (%)\n6 - Potenciação (**)'))
  
  if (!operacao || operacao >= 7) {
    alert('Operação inválida, tente novamente.');
    calculator();
  } else {
      let n1 = Number(prompt('Escolha o primeiro valor:'));
      let n2 = Number(prompt('Escolha o segundo número:'));
      let resultado;

      
      function novaOperacao() {
        let opcao = Number(prompt('Deseja fazer mais operações?\n 1 - Sim\n 2 - Não'))
        
        if (opcao == 1) {
          calculator();
        } else if (opcao == 2) {
          alert('Até mais!')
        } else {
          alert('Opção inválida, tente novamente.')
          novaOperacao();
        }
      }
      
      function soma() {
        resultado = n1 + n2;
        alert(`${n1} + ${n2} = ${resultado}`);
        novaOperacao();
      }  
      function subtracao() {
        resultado = n1 - n2;
        alert(`${n1} - ${n2} = ${resultado}`)
        novaOperacao();
      }  
      function multiplicacao() {
        resultado = n1 * n2;
        alert(`${n1} * ${n2} = ${resultado}`)
        novaOperacao();
      }  
      function divisao() {
        resultado = n1 / n2;
        alert(`${n1} / ${n2} = ${resultado}`)
        novaOperacao();
      }  
      function divisaoInteira() {
        resultado = n1 % n2;
        alert(`A divisão inteira de ${n1} por ${n2} é igual a ${resultado}`)
        novaOperacao();
      }  
      function potenciacao() {
        resultado = n1 ** n2;
        alert(`${n1}^${n2} = ${resultado}`)
        novaOperacao();
      }      
    }
    
    switch (operacao) {
      case 1:
      soma();
      break;
      case 2:
      subtracao();
      break;
      case 3:
      multiplicacao();
      break;
      case 4:
      divisao();
      break;
      case 5:
      divisaoInteira();
      break;
      case 6:
      potenciacao();
      break;    
    }
    
}
      
calculator()  