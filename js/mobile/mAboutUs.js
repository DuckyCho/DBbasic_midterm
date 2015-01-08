function loadAboutUsPage(){
    var section = document.querySelector("section");
    var aboutUsObj = new aboutUs();
    section.removeAttribute('id');
    section.innerHTML = "";
    aboutUsObj.setHTML(section);
     
}


function aboutUs(){
    this.comment = "Van de Oost is pioneering in supporting and introducing artists from Asia to the world.<br>We are bringing new and unworn music to the saturated EDM scene.<br><br><br><br>Since 2014, Van de Oost"
    this.imgSrc = "./image/index/logo.png";
    this.setHTML =  function(section){
        section.outerHTML = htmlTemplate.aboutUs_section.replace("<%aboutUsComment%>",this.comment);
    }
}