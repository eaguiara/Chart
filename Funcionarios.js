let orgonograma_dados_funcionario = [] ;

function showPeople(id){
    orgonograma_dados_funcionario = dados.map(function(dado,index){
      const dados_array=dado.split(",");
      const superior_id=dados_array[1]-1;
     indexs.push(index);

     let superior_nome='';

      if(superior_id<0){
           
        
      }
      else{
          
         superior_nome=csv_linhas[superior_id].split(",")[3];
         
      }
      


      
      

      if(dados_array[1]==0){
         const divf=dados_array[3]+dados_array[4]+'<div class="divfclass" id="divfid'+index+'" style="color:blue ;font-style:italic; font-weight: bolder">'+'<br><button onclick="showPeople('+dados_array[0]+')">Visualizar</button></div>';

         return [{'v':dados_array[3], 'f':divf },"",dados_array[4]]
      }
      else{
         const divf= dados_array[3]+dados_array[4]+'<div class="divfclass" id="divfid'+index+'" style="color:blue ;  font-style:italic; font-weight: bolder">'+'<br><button onclick="showPeople('+dados_array[0]+')">Visualizar</button></div>';

         return [{'v':dados_array[3], 'f':divf },superior_nome,dados_array[4]]

           }
     });
     


}