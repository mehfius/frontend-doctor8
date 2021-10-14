function iconReceitaEspecial(element){

  var shortcut = createObject('{"tag":"shortcut"}');
  
  document.body.append(shortcut);
  
  var icon = cE("icon");
      icon.setAttribute("class","icon-file-text2");

     tooltip(icon,"Documentos");
  
  var userinfo   = JSON.parse(localStorage.userinfo);
  var systeminfo = JSON.parse(localStorage.systeminfo);
  var jsonshortcut   = JSON.parse(localStorage.shortcut);
  var jsonshortcut   = JSON.parse(jsonshortcut[0].json); 
  
        icon.onclick=(function(){

            if(document.body.getAttribute("shortcut")=="1"){
              
              document.body.setAttribute("shortcut","0");
              
            }else{
              
              document.body.setAttribute("shortcut","1");
              
            }
        
        });

  element.appendChild(icon);

        let label = "";
        let url   = "";

        shortcut.append(createObject('{"tag":"label","innerhtml":"Receitas"}'));
  
        let list = jsonshortcut[0].receitas;
  
        for (var x in list) {

          label = list[x].label;
          url = list[x].url;

          if(url !== undefined && label!== undefined){
            
            shortcut.append(shortcutItem(url,label));
            
          }

        }
  
        shortcut.append(createObject('{"tag":"label","innerhtml":"Protocolos"}'));
  
        list = jsonshortcut[1].protocolos;
  
        for (var x in list) {

          label = list[x].label;
          url = list[x].url;

          if(url !== undefined && label!== undefined){
            
            shortcut.append(shortcutItem(url,label));
            
          }

        }
  
        shortcut.append(createObject('{"tag":"label","innerhtml":"Outros"}'));
  
        list = jsonshortcut[2].outros;
  
        for (var x in list) {

          label = list[x].label;
          url = list[x].url;

          if(url !== undefined && label!== undefined){
            
            shortcut.append(shortcutItem(url,label));
            
          }

        }
       
  
}

function shortcutItem(link,label){
 
  var div1      = createObject('{"tag":"div"}');
  var icon1     = createObject('{"tag":"icon","class":"icon-file-text2"}');
  var label1    = createObject('{"tag":"label","innerhtml":"'+label+'"}');
  
  div1.append(icon1,label1);
  
  div1.onclick=(function(){
    window.open(link);
  });
  
  return div1;

}


  