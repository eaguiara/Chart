
     const ajax = new XMLHttpRequest();

     ajax.open("GET","organogramatxt.txt", false);
     ajax.send();

     var csv = ajax.responseText;
	 
	 //document.write(csv);

     var csv_linhas=csv.split("\n");
	 
	 //document.write(csv_linhas);

     var cabecalho=csv_linhas[0].split(",");
	 //document.write(cabecalho.length);
	 
     //document.write(csv_linhas.length);
	 
     var dados= csv_linhas;
     dados.shift();
    
             

    const orgonograma_dados=dados.map(function(dado,index){
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
      return [{'v':dados_array[3], 'f': dados_array[3]+dados_array[4]+'<div style="color:blue ; font-style:italic; font-weight: bolder">'+'<br>'+dados_array[2]+'</div>'},"",dados_array[4]]
      }
      else{
          return [{'v':dados_array[3], 'f': dados_array[3]+dados_array[4]+'<div style="color:blue ; font-style:italic; font-weight: bolder">'+'<br>'+dados_array[2]+'</div>'},superior_nome,dados_array[4]]

           }
     });
     







     
   


