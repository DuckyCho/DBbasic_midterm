function loadNewsPage(){
        
        var main = document.querySelector("#main");
        var section = main.querySelector("section");
        
        if(newsObj === "")
            newsObj = new newsClass();
        
        //먼저 nav를 닫는다.
        closeNav();
    
        if(section.innerHTML != ""){
            sectionNameChange();
        }
       
        if(newsObj.json === ""){
            jsonRequest("news",newsObj,newsJsonRequest_aft);        
        }
        else{
            newsObj.setHtml(newsObj.json,0);
            afterwork();
        }
       
}

function afterwork(){
                
                var pageButton = document.querySelector("#news-pageButton");
                var section = document.querySelector("section");
               
                //pageButton을 가운데 정렬
                pageButtonHorizonCenter();
                
                //pagebutton evenetlistener
                var pageButtons = document.querySelectorAll(".PagePointer");
                if(pageButtons.length != 1)
                    pageButtonEventRegister();
                
    
                //article눌렀을 때 eventListener
                articleEventRegister(); 
                    
                //section element들을 vertical center로 위치
                setSectionDivPos();    


                //애니메이션 구현

                var disappear = document.querySelector("#disappear");

                if(disappear != null){
                    animateSection_disappear.animate();
                }
            
                animateSection.animate();
}

function pageButtonEventRegister(){
    var pageButton = document.querySelector("#news-pageButton");
    pageButton.addEventListener('click',function(ev){
                    newsObj.curPage = pageButtonHandler(ev);
                },false);
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

function newsJsonRequest_aft(obj){
    newsObj.setHtml(obj.json,obj.curPage);
    afterwork();
}



function newsClass() {
   
    
    this.json = "";
    this.curPage = 0;
    
    this.setHtml = function(json,curPage){
         var templateSection =  "<section id=\"news\"><div id=\"sectionWrapper\"><%article%></div></section><div id=\"news-pageButton\"><%pagePointer%></div>";
    
        var templateArticle = "<article id=\"article<%articlePageNum%>\" style=\"transform : translateX(<%position%>px)\"><%articleBoxes%></article>";
        
        var templateArticleBox =  "<div class=\"articleBoxWrapper\" id=\"news<%ID%>\"> <div class=\"articleBox-image\"<%background%>\"></div><div class=\"articleBox\"><div class=\"articleBox-meta\"><div class=\"articleBox-title\"><%title%></div><div class=\"articleBox-date\"><%date%></div></div><div class=\"articleBox-summary\"><%summary%></div></div></div>";
  
        
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
                articleBoxHtml = articleBoxHtml.replace("<%date%>",json[j]['post_date']);
                articleBoxHtml = articleBoxHtml.replace("<%summary%>",json[j]['post_summary'])
                articleBoxHtml = articleBoxHtml.replace("<%background%>", "style=\"background-image : url(" +json[j]['post_img'] + ")");
        }
            
        loop =  j - 3;    
        finalHtml = finalHtml.replace("<%articleBoxes%>",articleBoxHtml);
        finalHtml = finalHtml.replace("<%position%>",i * sectionWidth);
        articleBoxHtml = "";
    }
        templateSection = templateSection.replace("<%article%>",finalHtml);
        var mainInnerHtml = document.querySelector("#main").innerHTML;
        mainInnerHtml =  mainInnerHtml.replace("<section></section>",templateSection);
        
        document.querySelector("#main").innerHTML = mainInnerHtml;
        
        
    }
    
   
  
    
}


function pageButtonHandler(ev){
    
    var curPage = document.querySelector("#curPage");
    var ele = ev.target;
    var newsObj = document.querySelector("#curPage").getAttribute('idx') * 1;
    if( ele.getAttribute('class') === "PagePointer"){
        if( ele.getAttribute('idx') === newsObj+""){
            return;
        }
        else{
            var idx =  ele.getAttribute('idx') * 1;
            var sectionWidth = document.querySelector("section").offsetWidth;
            var movingValue = (  newsObj - idx ) * sectionWidth;
            var articles = document.querySelectorAll("article");
            var articleNum = articles.length;
            var originalValue;
            var tmpValue;
            
            ele.setAttribute('id','curPage');
            curPage.removeAttribute('id');
            
            for(var i = 0 ; i < articleNum ; i++ ){
                originalValue = articles[i].style.transform;
                originalValue = originalValue.replace("translateX(","");
                originalValue = originalValue.replace("px)","");
                originalValue = originalValue * 1;
                
                tmpValue = movingValue + originalValue;
                
                articles[i].style.transform = "translateX("+ tmpValue +"px)";
            }
        }
    }   
    else
        return;

}

function pageButtonHorizonCenter(){
    var pageButton = document.querySelector("#news-pageButton");
    var section = document.querySelector("section");
    var margin = (( section.offsetWidth - pageButton.offsetWidth ) * 0.5 )-10+"px"
    pageButton.style.marginLeft = margin;
}