function iconPlanilha(element){
  
    var icon = cE("icon")
        icon.setAttribute("class","icon-table2");
  tooltip(icon,"Solicitação de contato");
    var userinfo = JSON.parse(localStorage.userinfo);

        icon.onclick=(function(){
          
          //window.open("https://docs.google.com/spreadsheets/d/1nBP4TC-7bqSTSDkye47bZHPe_aRNvV_RWmrQDGZIdlQ/edit#gid=1169328620","_blank");
          window.open("https://docs.google.com/document/d/e/2PACX-1vTHgJvKWd8bfVKjoegbh-cLHcQ-7RrN-d1HOM6kTx9mk6jVGpRqxCKG95yNCsIUU9wJjHyETF7j2t_z/pub","_blank");
          
          
        });

  element.appendChild(icon);
  
}
