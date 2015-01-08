function loadReleasesPage(){
    var section = document.querySelector("section");
    section.removeAttribute('id');
    section.innerHTML = "";
    
    if(newsObj.json === "")
        jsonRequest("news",newsObj,null,null);
    if(releasesObj.json === "")
        jsonRequest("releases",releasesObj,releasesSetHtml,null);
    else
        releasesSetHtml();
    
    
}

function releases(){
    this.json="";
}

function releasesSetHtml(obj) {
    var json = releasesObj.json;
    
    var totalLength = json.length;
    var albumPerPage = 8;
    var pageNum = Math.ceil(totalLength / albumPerPage);
    
    var i = 0 ;
    var j = totalLength -1;
    
    var tmpLoopVar;
    
    var templateSection  = 
"<section id=\"releases\"><div id=\"sectionWrapper\" class=\"albumSectionWrapper\"><%albumPage%></div></section>"
        
    var templateAlbumPage = "<div class=\"albumPage\" pageidx=\"<%pageNum%>\" style=\"transform : translateX(<%posX%>px);-webkit-transform : translateX(<%wposX%>px)\"><%album%></div>"
    var templateAlbum = "<div class=\"album\" idx=\"<%idx%>\" style=\"background-image:url(<%imgsrc%>)\"></div>"
    
    var tmpTemplateAlbumPage ="";
    var tmpTemplateAlbum ="";
    
    var curWindowWidth = window.innerWidth;
    
    for( ; i < pageNum;i++){
        tmpTemplateAlbumPage += templateAlbumPage.replace("<%pageNum%>",i+"");
        
        tmpLoopVar = j-albumPerPage+1;
        for( ; j >= tmpLoopVar && j >= 0 ; j--){
            
            tmpTemplateAlbum += templateAlbum.replace("<%idx%>",releasesObj.json[j]["ID"]+"");
            tmpTemplateAlbum = tmpTemplateAlbum.replace("<%imgsrc%>",releasesObj.json[j]["img_src"]);
        
        }
        
        tmpTemplateAlbumPage = tmpTemplateAlbumPage.replace("<%album%>",tmpTemplateAlbum);
        tmpTemplateAlbumPage = tmpTemplateAlbumPage.replace("<%wposX%>",i*curWindowWidth+"");
        tmpTemplateAlbumPage = tmpTemplateAlbumPage.replace("<%posX%>",i*curWindowWidth+"");
        tmpTemplateAlbum = "";
    
    }
    
    templateSection = templateSection.replace("<%albumPage%>",tmpTemplateAlbumPage);
    document.querySelector("#main").innerHTML = templateSection;
   
    setPagePointer();
}

function setPagePointer(){
    var releasesPage = document.querySelectorAll(".albumPage");
    var pageNum = releasesPage.length;
    var pagePointerWrapperTemplate = "<div id=\"news-pageButton\"><%pagePointer%></div>"
    var pagePointerTemplate = "";
    pagePointerTemplate +="<div class=\"PagePointer\" id=\"curPage\" idx=\""+0+"\"></div>";
    for(var i = 1 ; i < pageNum ; i++){
        pagePointerTemplate +="<div class=\"PagePointer\" idx=\""+i+"\"></div>";
    }
    document.querySelector("#main").innerHTML += pagePointerWrapperTemplate.replace("<%pagePointer%>",pagePointerTemplate);
    var pageButtonEle = document.querySelector("#news-pageButton");
    var section = document.querySelector("section");
    pageButtonEle.style.marginLeft = (section.offsetWidth - pageButtonEle.offsetWidth ) / 2 + 9 + "px";
    
    var albums = document.querySelectorAll(".album");
    var length = albums.length;
    var width = albums[0].offsetWidth;
    for(var i = 0 ; i < length ; i++){
        albums[i].style.height = width+"px";
    }
    
    
    var albumPages = document.querySelectorAll(".albumPage");
    length = albumPages.length;
    var wrapper = document.querySelector("#sectionWrapper");

    wrapper.style.background = "rgba(0,0,0,0.5)"
    var pageButton = document.querySelector("#news-pageButton");
    pageButton.style.top = document.querySelector("section").offsetHeight - document.querySelector("footer").offsetHeight - 103 + "px";
    pageButtonHorizonCenter();
    
    articleEventRegister();
    
    if(albumPages.length != 1)
        swipeEventRegister();
}