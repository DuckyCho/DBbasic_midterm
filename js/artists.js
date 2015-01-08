
function loadArtistsPage(){
        
        var main = document.querySelector("#main");
        var section = main.querySelector("section");
        var artists_Obj = new artists();
        
        //먼저 nav를 닫는다.
        closeNav();
        
    
        if(section.innerHTML != ""){
            sectionNameChange();
        }
       
            
        //html을 바꾼다.
        section = main.querySelector("section");
        artists_Obj.setHTML(section);
    
        //section element들을 vertical center로 위치
        setSectionDivPos();
        
        //애니메이션 구현
        
        var disappear = document.querySelector("#disappear");
               
        if(disappear != null)
            animateSection_disappear.animate();
        
        animateSection.animate();
    
        
        
        
        
}
    
    
function artists(){
  
    this.setHTML =  function(section){
        var artistName =["thenod","liller"];
        var artistSoundcloud = [
            "https://soundcloud.com/officialthenod",
            "https://soundcloud.com/lillerofficial"
        ]
        var artistNum = 2;
        
        var sectionOuterHtml = section.outerHTML;
        
        var sectionTemp = htmlTemplate.section;
        var template = htmlTemplate.artists_section;
        var resultTemplate = "";
        for(var i = 0 ; i < artistNum  ; i++){
            resultTemplate += template.replace("<%artistname%>",artistName[i]);
            resultTemplate = resultTemplate.replace("<%url%>",artistSoundcloud[i]);
        }
        sectionTemp = sectionTemp.replace("<section>","<section id=\"artists\">");
        sectionTemp = sectionTemp.replace("<%template%>",resultTemplate);
        
        section.outerHTML = sectionTemp;
    }
    
}

