
function htmlTemplate(){
    this.section = "<section> <%template%> </section>";
    this.aboutUs_section = "<section id=\"aboutus\"><div id=\"sectionWrapper\"><div id=\"aboutUsLogo\"></div><div id=\"aboutUsComment\"><p><%aboutUsComment%></p></div></div></section>";
    this.artists_section = "<a href=\"<%url%>\" target=\"_blank\"><div class=\"artists\" id=\"<%artistname%>\"></div></a>";
    this.contact_section = "<section id=\"contact\"><div id=\"sectionWrapper\"><div id=\"contactWrapper\"><div id=\"contactLocation\">Seoul,South Korea<br></div><div id=\"contactCollab\">x<br></div><div id=\"contactEmail\">info@vandeoost.com</div></div></div></section>"
    
}



function setDivWindowFull(){
    this.width_window;
    this.height_window;
    
    this.operate = function(ele,ratioX,ratioY){
        this.setValue_window();
        
        if(ratioX != 0)
            ele.style.width = this.width_window * ratioX + "px";
        if(ratioY != 0)
            ele.style.height = this.height_window * ratioY + "px";
        
    }
    
    this.setValue_window = function(){
        
        if(this.width_window < this.height_window){
            this.width_window = this.width_window;
            this.height_window = Math.floor( this.width_window * ( 9 / 16) ) ;
        }
        else{
            this.width_window = window.innerWidth;
            this.height_window = window.innerHeight;
        }
    }
    
    
}




function initializeIndex (){
    this.body = document.querySelector("body");
    this.wrapper = document.querySelector("#wrapper");
    this.header = document.querySelector("header");
    this.nav = document.querySelector("nav");
    this.main = document.querySelector("#main");
    
    this.fullHeight = 1;
   
    
    this.operate = function(){
        setDivWindowFull.operate(this.body,1,this.fullHeight);
        var pageButton = document.querySelector("#news-pageButton");
        if(pageButton != null){
            pageButtonHorizonCenter();
        }
    }
    
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


function clickNavButton(){
    this.nav = document.querySelector("nav");
    
    this.navButton = document.querySelector("#nav_button");
    this.currentTime = 0;
    this.startValue = this.nav.offsetLeft;
    this.changeInValue = Math.floor(this.nav.offsetWidth * 0.8);
    this.duration = 100;
    
    this.navAnimation = function(){
        
        if(clickNavButton.nav.getAttribute("status") == "close"){
            clickNavButton.currentTime = 0;
            document.querySelector("nav").querySelector("ul").style.opacity  = 1;
            clickNavButton.startValue = clickNavButton.nav.offsetLeft;
            clickNavButton.changeInValue = Math.floor(clickNavButton.nav.offsetWidth * 0.8);
            
            var myInterval = setInterval(function(){
                
                nav.style.left = easeInOutQuart(
                    clickNavButton.currentTime,
                    clickNavButton.startValue,
                    clickNavButton.changeInValue,
                    clickNavButton.duration) + "px";
                
                clickNavButton.currentTime++;
                if(clickNavButton.nav.offsetLeft ===
                   clickNavButton.changeInValue + clickNavButton.startValue){
                    clickNavButton.nav.setAttribute("status","open");
                    clearInterval(myInterval);
                    if( clickNavButton.nav.offsetLeft < 16){
                            
                            clickNavButton.nav.style.left = "16px";
                    }
                }
                
            },1);
        }
        else{
            clickNavButton.currentTime = 0;
            clickNavButton.startValue = clickNavButton.nav.offsetLeft;
            clickNavButton.changeInValue = - (clickNavButton.startValue - 16);
            
            var myInterval = setInterval(function(){
                
                nav.style.left = easeInOutQuart(
                    clickNavButton.currentTime,
                    clickNavButton.startValue,
                    clickNavButton.changeInValue,
                    clickNavButton.duration) + "px";
                
                clickNavButton.currentTime++;
                if(clickNavButton.nav.offsetLeft ===
                   clickNavButton.changeInValue + clickNavButton.startValue){
                    clickNavButton.nav.setAttribute("status","close");
                    document.querySelector("nav").querySelector("ul").style.opacity  = 0;
                    clearInterval(myInterval);
                    if( clickNavButton.nav.offsetLeft != 16){
                            
                            clickNavButton.nav.style.left = "16px";
                    }
                }
                
            },1);
        }
    }
    
    this.registerEvent = function(){
        this.navButton.addEventListener('click',this.navAnimation,false);
    }
    
}


function initializeEventListener(){
    var navUl = document.querySelector("nav > ul");
    navUl.addEventListener('click',function(ev){
        
        if(ev.target.tagName === "LI"){
            var liName = ev.target.innerText;
            var newsDetail = document.querySelector("#newsDetail");
            if(newsDetail != null)
                newsDetail.outerHTML = "";
            liPickStatusChange(ev.target);
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
        
        else{
            return;
        }
        
    },false);
    
    document.addEventListener('click',function(ev){
        if(ev.target.tagName != "LI" && document.querySelector("nav").getAttribute('status') != "close"){
             closeNav();
        }
        
    },false);
    
    
    document.querySelector("#logo").addEventListener('click',function(){
     
        
        var section = main.querySelector("section");
        
        
        //먼저 nav를 닫는다.
        closeNav();
        
        if(section.innerHTML != ""){
            sectionNameChange();
        }
        
        //애니메이션 구현
        var disappear = document.querySelector("#disappear");
        
        if(disappear != null)
            setTimeout(animateSection_disappear.animate,20);
        
        
        document.querySelector("#picked").removeAttribute('id');
        
    },false);

}



function liPickStatusChange(ele){
    var ulEle = ele.parentElement;
    var pickedEle = document.querySelector("#picked");
    if(pickedEle != null){
      pickedEle.removeAttribute("id");  
    }
    ele.setAttribute("id","picked");
}





var initializeIndex = new initializeIndex();
var setDivWindowFull = new setDivWindowFull();
var setDivVerticalPosMid = new setDivVerticalPosMid();
var clickNavButton = new clickNavButton();
var htmlTemplate = new htmlTemplate();
var wrapper = document.querySelector("#wrapper");
var nav = document.querySelector("nav");
var navButton = document.querySelector("#nav_button");
var newsObj="";
var releasesObj="";




window.onload = function(){
    
    
    initializeIndex.operate();
    setDivVerticalPosMid.operate_position(wrapper,0);

    clickNavButton.registerEvent();
    window.onresize = function(){
        if(nav.getAttribute("status") === "open")
            closeNav();
        initializeIndex.operate();
    };
    
    introAnimation.operate();
    
    initializeEventListener();
    
}

