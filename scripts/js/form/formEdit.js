
function formEdit(areas,codigo){
	
		formMount(areas,codigo,function(){
			
			document.body.setAttribute("loading","0");
      
      var userinfo  = JSON.parse(localStorage.userinfo);
      
			if(codigo==userinfo.codigo && (areas=="users" || areas=="formcovid")){
        //Edicao do proprio Profile
      }else{

        var item  = gibc(codigo);
        item.setAttribute("open","1");
			localStorage.openedformcodigo=codigo;
        
      }

			
			gridShow();
			
		});

}