
function formEdit(modules,id){
	
		formMount(modules,id,function(){
			
			document.body.setAttribute("loading","0");
      
      var user  = JSON.parse(localStorage.user);
      
			if(id==user.id && (modules=="users" || modules=="formcovid")){
        //Edicao do proprio Profile
      }else{

        var item  = gibc(id);

        item.setAttribute("open","1");
			  localStorage.openedformcodigo=id;
        
      }

			gridShow();
			
		});

}