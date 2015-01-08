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
            newsJsonRequest(newsObj);        
        }
        else{
            newsObj.setHtml(newsObj.json);
            afterwork();
        }
       
}

function afterwork(){
    
                //pagebutton evenetlistener
    
    
                //section element들을 vertical center로 위치
                setSectionDivPos();    


                //애니메이션 구현

                var disappear = document.querySelector("#disappear");

                if(disappear != null)
                    animateSection_disappear.animate();

                animateSection.animate();
}

    
function newsJsonRequest(newsObj){
        
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
                        console.log("request");
                        newsObj.json = resp;
                        newsObj.setHtml(newsObj.json);
                        afterwork();
                    }
                }    
                var userObj = new Object();
                xmlhttp.open("GET", './loadData.php?page=news');
                xmlhttp.send();
                return false;
              
}

function newsClass() {
   
    
    this.json = "";
    
    this.setHtml = function(json){
         var templateSection =  "<section><div id=\"sectionWrapper\"><div id=\"news\"><div id=\"news-title\"><div id=\"news-comment\">NEWS</div><div id=\"news-pageButton\"><div class=\"PagePointer\" id=\"curPage\"></div></div></div></div><%article%></div></section>";
    
        var templateArticle = "<article id=\"article<%articlePageNum%>\"><div id=\"news_blank\"></div><%articleBoxes%></article>";
    
        var templateArticleBox =  "<div class=\"articleBoxWrapper\" id=\"news<%ID%>\"\"> <div class=\"articleBox-image\"<%background%>\"></div><div class=\"articleBox\"><div class=\"articleBox-meta\"><div class=\"articleBox-title\"><%title%></div><div class=\"articleBox-date\"><%date%></div></div><div class=\"articleBox-summary\"><%summary%></div></div></div>";
  
        
        var jsonLength = json.length;
        var articlePageNum = Math.ceil(json.length / 6);
        var articleBoxNum = jsonLength;
        var backImg;
        var articleBoxHtml = "";
        var finalHtml = "";
        
        var j = articleBoxNum-1;
        var loop = j - 5;
        
        for(var i = 0 ; i < articlePageNum ; i++){
            
            finalHtml += templateArticle.replace("<%articlePageNum%>",i+"");
            
            for(  ; j >  loop && j >= 0  ; j--){
                
                articleBoxHtml += templateArticleBox.replace("<%ID%>",json[j]['ID']);
                articleBoxHtml = articleBoxHtml.replace("<%title%>",json[j]['post_title']);
                articleBoxHtml = articleBoxHtml.replace("<%date%>",json[j]['post_date']);
                articleBoxHtml = articleBoxHtml.replace("<%summary%>",json[j]['post_summary'])
                articleBoxHtml = articleBoxHtml.replace("<%background%>", "style=\"background-image : url(" +json[j]['post_img'] + ")");
            }
            
            finalHtml = finalHtml.replace("<%articleBoxes%>",articleBoxHtml);
            articleBoxHtml ="";
            loop += 6;
            
        }
        
        document.querySelector("section").outerHTML = templateSection.replace("<%article%>",finalHtml);
    };  
  
    
}