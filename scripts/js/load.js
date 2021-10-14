function load(){

  document.body.appendChild(loadingMount());
  document.body.appendChild(ad());
  document.body.setAttribute('open','0');
  document.body.setAttribute('logged','0');
  //fail
  pagesLoad((data)=>{
    
    localStorage.suitesinfo   = JSON.stringify(data.suiteinfo);
    localStorage.languages    = JSON.stringify(data.languages);
    localStorage.language    = "ptbr";
    //startIndexedDB(data.users);
  //  pagesMount(data);
    document.getElementsByTagName("pages")[0].append(mountLogin());
  });
//firebaseSnapshot();

}

function loopCheck(){
  
  setTimeout(function(){

    if(document.body.getAttribute('open')=='1'){
      
      if (navigator.onLine) {loadNotifications();} else {console.log('offline');}
      
    }
   
    loopCheck();
    
  }, 15000);  
    
}

window.onblur = function() {
  document.body.setAttribute('open','0');
}

window.onfocus = function() {
  document.body.setAttribute('open','1');
}

document.onkeydown = function(evt) {
	
	var teste=evt.keyCode;
   
	if(teste==27){
    formClose();
    navClose();
	}
	
}
window.onload=load;
