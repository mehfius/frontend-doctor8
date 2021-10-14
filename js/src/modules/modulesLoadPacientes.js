
function loadPacientes(element,array){
  
   if(array.pacienteslabel!==undefined && array.pacienteslabel!==null){
     
      var pacientes = cE("pacientes");

      if(array.pacienteslabel!==undefined && array.pacienteslabel!==null){

        var div = cE("div");

        var icon = cE("icon");
            icon.setAttribute("class","icon-user");

        var label = cE("label");
            label.appendChild(cT("Paciente: "));

        var pacientesnome = array.pacienteslabel.split(" ");
        
        var label2 = cE("label");
        label2.append(icon);
            //label2.appendChild(cT(pacientesnome[0]+" "+pacientesnome[1]));
        label2.appendChild(cT(array.pacienteslabel));
        
        var nome = array.pacienteslabel;

        div.appendChild(label2);
        pacientes.appendChild(div);

      }
     
      element.appendChild(pacientes);
     
     pacientes.onmouseover=(function(){
            

      var xmlhttp;

      xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

          var json = JSON.parse(xmlhttp.responseText);
          
          let today = new Date().getFullYear();
          
          
          if(json[0].nascimento!==null){
            
            var nasc  = new Date(json[0].nascimento).getFullYear();
            var age   = Math.abs(today - nasc);
            
          }else{
            
            var age="Nao informado";
            
          }
          
          
          
          let texto=json[0].label;
              texto+="\n Telefone: "+json[0].telefone;
              texto+="\n Email: "+json[0].email;          
              texto+="\n CPF: "+json[0].cpf;          
              texto+="\n Endereço: "+json[0].endereco;          
              texto+="\n Idade: "+age;          
       
          pacientes.setAttribute('title',texto);
             // tooltipmenu(label2,texto);
          
        }

      };
       
      var data = new FormData();
       
          data.append('p','users|label|email|telefone|cpf|endereco|nascimento'); 
          data.append('w','codigo|'+array.pacientescodigo);
       
      var url = localStorage.getItem("url")+'/admin/json/jsonGetTableView.php';

      xmlhttp.open("post", url, true);
      xmlhttp.send(data);  
       
       
    });

   }
  
}
