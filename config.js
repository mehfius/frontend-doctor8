/* //localStorage.clear(); 
// Se ativar, toda vez que entrar no site a outra sessão irá ser desativada

//Admin
localStorage.setItem("newusers", "1");

// Store
localStorage.setItem("url", "https://suite8.com.br");

// Image Store

localStorage.setItem("imagestore", "https://suite8filesdev2021.ga");
localStorage.setItem("urlimagerotate", "https://suite8filesdev2021.ga/uploads/image-rotate.php");

localStorage.setItem("upload", localStorage.getItem("imagestore")+"/uploads/upload.php");

localStorage.setItem("imgp", localStorage.getItem("imagestore")+"/uploads/jpg/300/");
localStorage.setItem("imgm", localStorage.getItem("imagestore")+"/uploads/jpg/500/");

localStorage.setItem("img", localStorage.getItem("imagestore")+"/uploads/jpg/1280/");
localStorage.setItem("pdf", localStorage.getItem("imagestore")+"/uploads/pdf/");
localStorage.setItem("png", localStorage.getItem("imagestore")+"/uploads/png/");


//Json
localStorage.setItem("urljson",localStorage.getItem("url")+'/admin/json/');
localStorage.setItem("urljsonpages",localStorage.getItem("url")+'/admin/jsonPages/');

// Words
localStorage.setItem("systemname", "Suite8");

// Colors
localStorage.setItem("bgcolor", "#273848");
localStorage.setItem("fontcolor", "#ffffff");

// Facebook
localStorage.setItem("facebookapi", "");


//Json
var systeminfo = {
  urllogo:localStorage.getItem("url")+"/sistema8/img/logo/",
  urlfiles:localStorage.getItem("url")+"/files/"
};

localStorage.systeminfo=JSON.stringify(systeminfo);
 */