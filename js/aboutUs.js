
function loadAboutUsPage(){
        var main = document.querySelector("#main");
        var section = main.querySelector("section");
        var aboutUs_Obj = new aboutUs();
        
        //먼저 nav를 닫는다.
        closeNav();
        
   
        
        if(section.innerHTML != ""){
            sectionNameChange();
        }
    
        //html을 바꾼다.
        section = main.querySelector("section");
        aboutUs_Obj.setHTML(section);
    
        //section element들을 vertical center로 위치
        setSectionDivPos();
    
        //애니메이션 구현
        var disappear = document.querySelector("#disappear");
       
        if(disappear != null)
            animateSection_disappear.animate();
        
        animateSection.animate();
        
        
}
    
    
function aboutUs(){
    this.comment = "Van de Oost is pioneering in supporting and introducing artists from Asia to the world.<br>We are bringing new and unworn music to the saturated EDM scene.<br><br><br><br>Since 2014, Van de Oost"
    this.imgSrc = "./image/index/logo.png";
    this.setHTML =  function(section){
        var sectionOuterHtml = section.outerHTML;
        var template = htmlTemplate.aboutUs_section;
        template = template.replace("<%aboutUsComment%>",this.comment);
        section.outerHTML = sectionOuterHtml.replace(sectionOuterHtml,template);
    }
}



function setSectionDivPos(){
    var sectionTmp =  document.querySelector("section");    
    var sectionTmp2 =  document.querySelector("#sectionWrapper");
    if(sectionTmp != null)
        setDivVerticalPosMid.operate_position(sectionTmp);
    if(sectionTmp2 != null)
    setDivVerticalPosMid.operate_position(sectionTmp2);
}
