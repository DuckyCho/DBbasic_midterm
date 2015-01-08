var wrapper = document.querySelector("#wrapper");
wrapper.style.width = window.innerWidth +"px";
wrapper.style.height = window.innerHeight+100 +"px";
var htmlTemplate = new htmlTemplate();
var setDivVerticalPosMid = new setDivVerticalPosMid();

document.querySelector("#introduction").addEventListener('click',navControl,false);
document.querySelector("nav").addEventListener('click',loadPages,false);
var newsObj = new news();
var releasesObj = new releases();
document.querySelector("#logo").addEventListener('click',clearSection,false);

function clearSection(){
    document.querySelector("#main").innerHTML = "<section></section>";
    var nav = document.querySelector("nav");
    var status = nav.getAttribute('status');
    if(status ==='open'){
        navControl();
    }
}

function navControl(){
    var nav = document.querySelector("nav");
    var menuIcon = document.querySelector("#introduction");
    var status = nav.getAttribute('status');
    
    if(status === 'close'){
        menuIcon.style.webkitTransform = "rotate(90deg)"
        menuIcon.style.transform = "rotateZ(90deg)"
        nav.style.transform = "translateX(0px)";
        nav.style.webkitTransform = "translateX(0px)";
        nav.setAttribute('status','open');
    }
    else{
        menuIcon.style.webkitTransform = "rotate(0deg)"
        menuIcon.style.transform = "rotateZ(0deg)"
        nav.style.transform = "translateX(1800px)";
        nav.style.webkitTransform = "translateX(1800px)";
        nav.setAttribute('status','close');
    }
}




function loadPages(ev){
    
     if(ev.target.tagName === "LI"){
            var liName = ev.target.innerText;
            var curTarget = document.querySelector("#youChooseMe");
            var pageButton = document.querySelector("#news-pageButton");
            if(pageButton != null)
                pageButton.outerHTML ="";
            if(curTarget != null)
                curTarget.removeAttribute('id');
            ev.target.setAttribute("id","youChooseMe");
            navControl();
            switch(liName){
                case "ABOUT US":
                        if(document.querySelector("#aboutus") == null)
                            loadAboutUsPage();
                        break;
                case "ARTISTS":
                        if(document.querySelector("#artists") == null)
                            loadArtistsPage();
                        break;
                case "NEWS":
                        if(document.querySelector("#news") == null)
                            loadNewsPage();
                        break;
                case "RELEASES":
                        if(document.querySelector("#releases") == null)
                            loadReleasesPage();
                        break;
                case "CONTACT":
                        if(document.querySelector("#contact") == null)
                            loadContactPage();
                        break;
            }
    }
    else{return;}
    
        
}


function htmlTemplate(){
    this.section = "<section> <%template%> </section>";
    this.aboutUs_section = "<section id=\"aboutus\"><div id=\"sectionWrapper\"><div id=\"aboutUsLogo\"></div><div id=\"aboutUsComment\"><p><%aboutUsComment%></p></div></div></section>";
    this.artists_section = "<a href=\"<%url%>\" target=\"_blank\"><div class=\"artists\" id=\"<%artistname%>\"></div></a>";
    this.contact_section = "<section id=\"contact\"><div id=\"sectionWrapper\"><div id=\"contactWrapper\"><div id=\"contactLocation\">Seoul<br>South Korea<br></div><div id=\"contactCollab\">x<br></div><div id=\"contactEmail\">info@vandeoost.com</div><div id=\"sns\"><a href=\"https://www.facebook.com/vandeoost\" target=\"_blank\"><div class=\"snsicon\" id=\"fb\"></div></a><a href=\"https://instagram.com\" target=\"_blank\"><div class=\"snsicon\" id=\"insta\"></div></a><a href=\"https://soundcloud.com/vandeoost\" target=\"_blank\"><div class=\"snsicon\" id=\"soundcl\"></div></a></div></div></div></section>";
    
}


function setDivVerticalPosMid(){
    
    this.operate_padding = function(ele,num){
        var elementHeight = ele.offsetHeight;
        var elementChildHeight = ele.children[num].offsetHeight;
        
        ele.style.paddingTop  = ( elementHeight - elementChildHeight ) / 2  + "px";
        
    }
    this.operate_position = function(ele){
        var eleParentHeight = ele.parentElement.offsetHeight;
        var eleHeight = ele.offsetHeight;
        
        ele.style.top = ( eleParentHeight - eleHeight ) / 2  + "px";
    }
}