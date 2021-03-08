let orgonograma_dados_funcionario = [] ;

function showPeople(id){
    const ajax = new XMLHttpRequest();

    ajax.open("GET","organogramatxt.txt", false);
    ajax.send();

    var csv = ajax.responseText;

    var csv_linhas = csv.split("\n");

    var cabecalho = csv_linhas[0].split(",");

    var dados= csv_linhas;
dados.shift();
  


const orgonograma_dados=dados.map(function(dado){
 const dados_array=dado.split(",");
 const superior_id=dados_array[1]-1;
 

let superior_nome='';

 if(superior_id<0){
      
    console.log("superior");
   
 }
 else{
     
    superior_nome=csv_linhas[superior_id].split(",")[3];
    console.log(superior_nome);
    
 }
 if(dados_array[1]==0){
    
    if(dados_array[1]==0){
        const divf=dados_array[3]+dados_array[4]+</div>';
    
        return [{'v':dados_array[3], 'f':divf },"",dados_array[4]]
     }
     else{
        const divf= dados_array[3]+dados_array[4]+';
    
        return [{'v':dados_array[3], 'f':divf },superior_nome,dados_array[4]]
    
          }
    });
    

