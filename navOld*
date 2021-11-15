function navMount(array){

	if(gotFind("nav")){
    
		rE(got(document,"nav")[0]);

	}
	
	var html = '';
	var grade   = cE('grade');
	var nav  	= cE('nav');
	    nav.appendChild(profile(array.userinfo));

	var body = got(document,'body')[0];
	
	var anav = [];
	
	var arraynav = array.nav;

    localStorage.anav=JSON.stringify(arraynav);

  
    for(var x = 0; x < arraynav.length; x++) {

      if(x===0 || arraynav[x].groups!==arraynav[x-1].groups){

        var span = cE('span');
        span.appendChild(cT(arraynav[x].groups));
        nav.appendChild(span);

      }

      var a 			= cE('a');
      var count 	= cE('count');


     // count.appendChild(cT("("+arraynav[x].count+")"));

      //a.setAttribute('href','#'+arraynav[x].name);
      a.setAttribute('modules',arraynav[x].name);
      a.setAttribute('premium',arraynav[x].premium);
      a.setAttribute('c',arraynav[x].codigo);
      a.appendChild(cT(arraynav[x].label));
      a.appendChild(count);

      a.onclick=(function(){
        resetHeaderOptions();
        modulesOpen(this);
        navClose();
        gridHide();
       
        //mountRanking();

        document.body.setAttribute("loading","1");
      });

      nav.appendChild(a);

    }
		
	var a = cE('a');

	a.onclick=(function(){
 
		//logout();
    //navClose();
		//formClose();
    
    window.open('/','_self');

	});
	
	a.appendChild(cT('Sair'));

	nav.appendChild(a);
	
	nav.setAttribute('id','nav');

	grade.onclick=(function(){
		
		navClose();
		formClose();

	});
	
	body.appendChild(nav);
	body.appendChild(grade);
	
	
}

function navClose(){
	
		var nav=got(document,"nav")[0];
	
				nav.setAttribute('class','hide');
	
}