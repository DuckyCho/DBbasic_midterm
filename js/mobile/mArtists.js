function loadArtistsPage(){
    var section = document.querySelector("section");
    var artistsObj = new artists();
    section.innerHTML = "";
    artistsObj.setHTML(section);
     
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