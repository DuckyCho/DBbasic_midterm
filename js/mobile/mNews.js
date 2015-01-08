function loadNewsPage(){
    var section = document.querySelector("section");
    section.removeAttribute('id');
    section.innerHTML = "";
    
    if(newsObj.json === "")
        jsonRequest("news",newsObj,newsSetHtml,null);
    else
        newsSetHtml();
    
}
function newsSetHtml(){
    newsObj.setHTML(newsObj.json,0);
    document.querySelector("#sectionWrapper").style.background = "rgba(0,0,0,0.5)";
    var titles = document.querySelectorAll(".articleBox-title");
    var length = titles.length;
    for(var i = 0 ; i < length ; i++){
        setDivVerticalPosMid.operate_position(titles[i]);
    }
    var pageButton = document.querySelector("#news-pageButton");
    pageButton.style.top = document.querySelector("section").offsetHeight - document.querySelector("footer").offsetHeight - 103 + "px";
    pageButtonHorizonCenter();
   
    var articles = document.querySelectorAll("article");
    articleEventRegister();
    if(articles.length != 1)
        swipeEventRegister();
    
}

function news(){
    this.json="";
    this.setHTML = function(json,curPage){
        
         var templateSection =  "<section id=\"news\"><div id=\"sectionWrapper\"><%article%></div></section><div id=\"news-pageButton\"><%pagePointer%></div>";
    
        var templateArticle = "<article id=\"article<%articlePageNum%>\" style=\"transform : translateX(<%position%>px); -webkit-transform : translateX(<%wposition%>px)\"><%articleBoxes%></article>";
        
        var templateArticleBox =  "<div class=\"articleBoxWrapper\" id=\"ib\" idx=\"<%ID%>\" > <div class=\"articleBox-image\"<%background%>\"></div><div class=\"articleBox\"><div class=\"articleBox-meta\"><div class=\"articleBox-title\"><%title%></div></div></div></div>";
  
        
        var jsonLength = json.length;
        var pageCount = Math.ceil(jsonLength / 4);
        
        var j = jsonLength-1;
        var loop = j - 3 <= 0  ? 0 : j - 3;
        var finalHtml = "";
        var articleBoxHtml = "";
        var sectionWidth = document.querySelector("section").offsetWidth;
        var tmpTemplateSection = "";
        
        
        for(var i = 0 ; i < pageCount ; i++){
            
                if(curPage == i)
                    tmpTemplateSection+="<div class=\"PagePointer\" id=\"curPage\" idx=\""+i+"\"></div>";
                else
                    tmpTemplateSection+= "<div class=\"PagePointer\" idx=\""+i+"\"></div>";
            }

        templateSection = templateSection.replace("<%pagePointer%>",tmpTemplateSection);
        
        for(var i = 0 ; i < pageCount ; i++){
            finalHtml += templateArticle.replace("<%articlePageNum%>",i+"");
            
            
            for(  ; j >= loop && j >= 0 ; j--){

                articleBoxHtml += templateArticleBox.replace("<%ID%>",json[j]['ID']);
                articleBoxHtml = articleBoxHtml.replace("<%title%>",json[j]['post_title']);
                articleBoxHtml = articleBoxHtml.replace("<%background%>", "style=\"background-image : url(" +json[j]['post_img'] + ")");
        }
            
        loop =  j - 3;    
        finalHtml = finalHtml.replace("<%articleBoxes%>",articleBoxHtml);
        finalHtml = finalHtml.replace("<%position%>",i * sectionWidth);
        finalHtml = finalHtml.replace("<%wposition%>",i * sectionWidth);
        articleBoxHtml = "";
    }
        templateSection = templateSection.replace("<%article%>",finalHtml);
        var mainInnerHtml = document.querySelector("#main").innerHTML;
        mainInnerHtml =  mainInnerHtml.replace("<section></section>",templateSection);
        
        document.querySelector("#main").innerHTML = mainInnerHtml;
        
        
    
    }
    
}

function jsonRequest(tableName,Obj,afterWork,parameter){
    var xmlhttp;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();

    } else {// code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xmlhttp.onreadystatechange = function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var result = xmlhttp.responseText;
            var resp = JSON.parse(result);
            Obj.json = resp;
            if(afterWork != null && parameter == null)
                afterWork(Obj);
            else if(afterWork != null && parameter != null)
                afterWork(parameter);
        }
    }
    
    xmlhttp.open("GET", './loadData.php?page='+tableName);
    xmlhttp.send();
    return false;

}


function pageButtonHorizonCenter(){
    var pageButton = document.querySelector("#news-pageButton");
    var section = document.querySelector("section");
    var margin = (( section.offsetWidth - pageButton.offsetWidth ) * 0.5 )-10+"px"
    pageButton.style.marginLeft = margin;
}