function articleEventRegister(){
    var article = document.querySelector("#sectionWrapper");
    article.addEventListener('click',function(ev){
                    this.removeEventListener('click', arguments.callee);
                    articleClicked(ev.target);
     },false);   

}

function articleClicked(target){
                
        var targetClass =  target.getAttribute("class") ;
        var newsNum;
        
        if( targetClass === "articleBoxWrapper"){
            newsNum = target.getAttribute("idx") * 1;
        }
        else if( targetClass === "articleBox-image"||
                    targetClass === "articleBox-summary"||
                    targetClass === "articleBox-meta"||
                    targetClass === "articleBox" ||
                    targetClass === "articleBox-title"){
            target = findArticleBoxWrapper(target);
            newsNum = target.getAttribute("idx") * 1;
        }
        else if(targetClass === "album"){
            newsNum = target.getAttribute("idx") * 1;
        }
        else{
            return;
        }
    
        
     if(newsObj.json === ""){
        newsObj = new newsClass();
        jsonRequest("news",newsObj,setArticlePageHtml,newsNum)
    }
    else
        setArticlePageHtml(newsNum);
                
}

function setArticlePageHtml(newsNum){
    console.log(newsNum)
    var template = "<div id=\"newsDetail\"><div id=\"sectionWrapperNewsDetail\" class=\"nd\"><div id=\"exit\"></div><div id=\"newsDetail_title\"><div id=\"newsDetail_title_title\"><h1><%title%></h1></div><div id=\"newsDetail_title_date\"><h4><%date%></h4></div></div><div id=\"newsDetail_contentWrapper\"><div id=\"newsDetail_content\"><p><%content%></p></div></div></div></div>"
    
    var jsonIdx;
    jsonIdx = binarySearchInJson(newsNum,newsObj.json,0,newsObj.json.length-1);
    
    var title = newsObj.json[jsonIdx]["post_title"];
    var date = newsObj.json[jsonIdx]["post_date"];
    var content = newsObj.json[jsonIdx]["post_content"];
    
    template = template.replace("<%title%>",title);
    template = template.replace("<%date%>",date);
    template = template.replace("<%content%>",content);
    
    document.querySelector("#main").innerHTML += template;
    var articleDetail = document.querySelector("#newsDetail");
    var sectionWrapper = document.querySelector(".nd");
    var exit = document.querySelector("#exit");
    articleDetail.style.transform = "translate(0px)";
    exit.addEventListener('click',newsDetailExit,false);
    document.querySelector("#main").removeEventListener('touchstart',touchEndEventRegister);
}

function newsDetailExit(){
    var newsDetail = document.querySelector("#newsDetail");
    newsDetail.outerHTML = "";
    
    swipeEventRegister();
    articleEventRegister();
}

function binarySearchInJson(key,json,startIdx,endIdx){
    
    var mid;
    
    while(startIdx <= endIdx){
       mid = Math.floor((startIdx + endIdx )/ 2);
       
       if(json[mid]['ID']*1 < key){
            startIdx = mid+1;
       }
       else if(json[mid]['ID']*1 > key){
            endIdx = mid;
       }
       else{
           return mid;
       }
   
   }

}


function findArticleBoxWrapper(ele){
    if(ele.getAttribute("class") === "articleBoxWrapper" )
        return ele;
    else
        return findArticleBoxWrapper(ele.parentElement);
}