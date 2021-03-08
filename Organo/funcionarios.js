/**
 * Delay para o DOM renderizar os botões
 */
setTimeout(() => {
  main();
}, 2000);

function main() {
  /**
   * Puxa os todos botões do site dentro de divs com a classe divfclass
   */
  const buttons = [...document.querySelectorAll('.divfclass button')];
  let orgonograma_dados_funcionario = [];

  /**
   * Faz um loop pela lista dos botões
   */
  buttons.forEach((button) => {
     /**
      * Adiciona o evento de click ao botão atual
      */
     button.addEventListener("click", () => {
        /**
         * Pega o valor do atributo depId no elemento html
         */
        const depId = button.getAttribute('data-depId');
        const personData = formatData(depId);
        /**
         * Cria um elemento de lista (ul)
         */
        const ul = document.createElement("ul");
        /**
         * Faz um loop em cima dos funcionários e 
         * inseri os itens da lista (li) dentro da lista (ul)
         */
        personData.forEach((person) => {
           const li = document.createElement("li");
           li.innerText = person.name;
           ul.append(li)
         });

         /**
          * Joga a lista (ul) no final do elemento pai do botão (div)
          */
         button.parentElement.append(ul);         
      })
  });

  function formatData(depId) {
    /**
     * Fazendo a requisição do arquivo organogramatxt.txt
     */
    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'organogramatxt.txt', false);
    ajax.send();

    /**
     * Puxando os dados do arquivo organogramatxt.txt
     * @type string
     */

    var csv = ajax.responseText;

    /**
     * Dividindo o conteúdo do csv organogramatxt.txt em linhas
     */

    var csv_linhas = csv.split('\n');

    /**
     * Pegando a primeira linha do arquivo e separando por vírgula
     */
    var cabecalho = csv_linhas[0].split(',');

    /**
     * Puxando o conteúdo do csv, excluindo o cabeçalho
     */
    var dados = csv_linhas;
    dados.shift();

    /**
     * Faz um loop das linhas
     */
    const formatedData = dados
      .map(function (dado) {
        /**
         * Separa a linha por coluna
         */
        const columns = dado.split(',');

        /**
         * Retorna um objeto com os dados da pessoa
         */
        return {
          name: columns[2],
          depId: columns[0],
        };
      })
      /**
       * Filtra as pessoas pelo departamento
       * passado como parâmetro na funçãoformatData
       */
      .filter((person) => {
        return person.depId === depId;
      });
    return formatedData;
  }
}
