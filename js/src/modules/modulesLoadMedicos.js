
function loadMedicos(elements,array){
  
   if(array.medicoslabel!==undefined && array.medicoslabel!==null){
     
        var medico = cE("medicos");
            medico.setAttribute("style","background-color:"+array.categorycolors+"20;");
     
        var div = cE("div");

        var icon = cE("icon");
            icon.setAttribute("class","icon-reddit");

        var label = cE("label");
            label.appendChild(cT("Médico: "));

        var label2 = cE("label");
         

            if(array.medicoswhereby!==undefined && array.medicoswhereby!==null){
              
              var a = document.createElement("a");
              var text = cT(array.medicoslabel);
              
              a.appendChild(text);
              a.setAttribute("href","https://whereby.com/"+array.medicoswhereby);
              a.setAttribute("target","_blank");
              
                label2.appendChild(a);
              
            }else{
              
               label2.appendChild(cT(array.medicoslabel));
              
            }
     
        var nome = array.medicoslabel;


        div.appendChild(label);
        div.appendChild(label2);

        medico.appendChild(div);

        elements.appendChild(medico);
     
   }

}
