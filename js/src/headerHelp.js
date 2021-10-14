function iconHelp(element){
  
var icon = cE("icon")
    icon.setAttribute("class","icon-question");

tooltip(icon,"Tutorial");

var userinfo = JSON.parse(localStorage.userinfo);

    icon.onclick=(function(){

      if(userinfo.areas==50){

        window.open("https://docs.google.com/document/d/11vkmBO-ovp7A62Nhuw6HNbVein3BJ-EM9SsDIL-ziM0");

      }else if(userinfo.areas==100){

        window.open("https://docs.google.com/document/d/1TPVpbdkPpjq83AwdchXUCgK6yTUyxTd2YNTqsiajN6A");

      }

    });

    element.appendChild(icon);
  
}
