function loadContactPage(){
        var main = document.querySelector("#main");
        var section = main.querySelector("section");
        var contact_Obj = new contact();
        
        //먼저 nav를 닫는다.
        closeNav();
        
   
        
        if(section.innerHTML != ""){
            sectionNameChange();
        }
    
        //html을 바꾼다.
        section = main.querySelector("section");
        contact_Obj.setHTML(section);
    
    
        //section element들을 vertical center로 위치
        setSectionDivPos();
        var k = document.querySelector("#contactWrapper");
        setDivVerticalPosMid.operate_position(k);
    
        //애니메이션 구현
        var disappear = document.querySelector("#disappear");
       
        if(disappear != null)
            animateSection_disappear.animate();
        
        animateSection.animate();

}

   
function contact(){
    
    this.setHTML =  function(section){
        section.outerHTML = htmlTemplate.contact_section;
    }
}


