function loadReleasesPage(){

        var main = document.querySelector("#main");
        var section = main.querySelector("section");
        
        if(releasesObj === ""){
            releasesObj = new releasesClass();
        }
           
        //먼저 nav를 닫는다.
        closeNav();
    
        if(section.innerHTML != ""){
            sectionNameChange();
        }
        
        if(releasesObj.json === ""){
            jsonRequest("releases",releasesObj,releasesObjAft)
        }
        else{
            releasesObjAft(releasesObj);
        }    
    
   
        
       

}

function releasesObjAft(releasesObj){
    
    setReleasesPageHtml();
    setPagePointer();
    setSectionDivPos();
    var albumPageAll = document.querySelectorAll(".albumPage");
    var albumPageLength = albumPageAll.length;
    for(var i = 0 ; i  < albumPageLength  ;i++)
        setDivVerticalPosMid.operate_position(albumPageAll[i]);
    
    //pageButtonEventListener
    var pageButtons = document.querySelectorAll(".PagePointer");
    if(pageButtons.length != 1)
        releasesPageButtonEventRegister();
    
    //albumClickEventListener
    articleEventRegister();
    
    //애니메이션 구현
    var disappear = document.querySelector("#disappear");
               
    if(disappear != null)
        animateSection_disappear.animate();
        
    animateSection.animate();
}



function releasesPageButtonEventRegister(){

    var pageButton = document.querySelector("#news-pageButton");
    pageButton.addEventListener('click',function(ev){
        if(ev.target.getAttribute('class') != 'PagePointer')
            return;
        
        var difference = getDifference();
        
        var targetIdx = ev.target.getAttribute('idx')*1;
        var curPageIdx = document.querySelector("#curPage").getAttribute('idx')*1;
        
        var movingAmount = (curPageIdx - targetIdx) * difference;
        
        var albumPages = document.querySelectorAll(".albumPage");
        var length = albumPages.length;
        
        var finalValue;
        var curValue;
        var tmp;
        var curPage = document.querySelector("#curPage")
        if(curPage != null){
            curPage.removeAttribute('id');
            ev.target.setAttribute('id','curPage');
        }
        
        for(var i = 0 ; i < length  ; i++){
            tmp = albumPages[i];
            curValue = tmp.style.transform;
            curValue = curValue.replace("translateX(","");
            curValue = curValue.replace("px)","") *1;
            finalValue = curValue+movingAmount;
            tmp.style.transform = "translateX("+finalValue+"px)";
        }
    },false);
}

function getDifference(){
    var albumPageAll = document.querySelectorAll(".albumPage");
    var albumPage0 = albumPageAll[0].style.transform;
    var albumPage1 = albumPageAll[1].style.transform;
    albumPage0 = albumPage0.replace("translateX(","");
    albumPage0 = albumPage0.replace("px)","") *1;
    albumPage1 = albumPage1.replace("translateX(","");
    albumPage1 = albumPage1.replace("px)","") *1;
    
    return albumPage1-albumPage0;
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
}


function releasesClass() {

    this.json = ""
    
}


function setReleasesPageHtml(){
    var json = releasesObj.json;
    
    var totalLength = json.length;
    var albumPerPage = 8;
    var pageNum = Math.ceil(totalLength / albumPerPage);
    
    var i = 0 ;
    var j = totalLength -1;
    
    var tmpLoopVar;
    
    var templateSection  = 
"<section id=\"releases\"><div id=\"sectionWrapper\" class=\"albumSectionWrapper\"><%albumPage%></div></section>"
        
    var templateAlbumPage = "<div class=\"albumPage\" pageidx=\"<%pageNum%>\" style=\"transform : translateX(<%posX%>px)\"><%album%></div>"
    var templateAlbum = "<div class=\"album\" idx=\"<%idx%>\" style=\"background-image:url(<%imgsrc%>)\"></div>"
    
    var tmpTemplateAlbumPage ="";
    var tmpTemplateAlbum ="";
    
    var curWindowWidth = window.outerWidth;
    
    for( ; i < pageNum;i++){
        tmpTemplateAlbumPage += templateAlbumPage.replace("<%pageNum%>",i+"");
        
        tmpLoopVar = j-albumPerPage+1;
        for( ; j >= tmpLoopVar && j >= 0 ; j--){
            
            tmpTemplateAlbum += templateAlbum.replace("<%idx%>",releasesObj.json[j]["ID"]+"");
            tmpTemplateAlbum = tmpTemplateAlbum.replace("<%imgsrc%>",releasesObj.json[j]["img_src"]);
        
        }
        
        tmpTemplateAlbumPage = tmpTemplateAlbumPage.replace("<%album%>",tmpTemplateAlbum);
        tmpTemplateAlbumPage = tmpTemplateAlbumPage.replace("<%posX%>",i*curWindowWidth+"");
        tmpTemplateAlbum = "";
    
    }
    
    templateSection = templateSection.replace("<%albumPage%>",tmpTemplateAlbumPage);
    document.querySelector("section").outerHTML = templateSection;
}
