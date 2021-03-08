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
 * Criando um vetor com todos os dados necessários para o orgonograma
 */
const orgonograma_dados = dados.map(function (dado, index) {
  /**
   * Separando o conteúdo
   */
  const dados_array = dado.split(',');

  /**
   * Pegando o id do superior na primeira coluna do csv
   */
  const superior_id = dados_array[1] - 1;

  let superior_nome = '';

  /**
   * Caso o superior não tenha superiores, o nome do superior no orgonograma será o dele mesmo
   */
  if (!(superior_id < 0)) {
    superior_nome = csv_linhas[superior_id].split(',')[3];
  }

  /**
   * Monta a estrutura do HTML do orgonograma
   */
  if (dados_array[1] == 0) {
    const divf =
    `
    ${dados_array[3]}
    ${dados_array[4]}
    <div class="divfclass" id="divfid${index}" 
    style="color:blue ;font-style:italic; font-weight: bolder"> 
    <br><button data-depId=${dados_array[0]}">Visualizar</button></div>
    `;

    return [{ v: dados_array[3], f: divf }, '', dados_array[4]];
  } else {
    const divf =
      `${dados_array[3]} 
      ${dados_array[4]} 
      <div class="divfclass" id="divfid${index}" 
      "style="color:blue ;  font-style:italic; font-weight: bolder"> 
      <br><button data-depId=${dados_array[0]}>Visualizar</button></div>
      `
      ;

    return [{ v: dados_array[3], f: divf }, superior_nome, dados_array[4]];
  }
});
