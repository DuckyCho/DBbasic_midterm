//t : current time
//b : start value
//c : change in value
//d : duration

function easeInOutExpo (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2 * Math.pow( 2, 10 * (t - 1) ) + b;
	t--;
	return c/2 * ( -Math.pow( 2, -10 * t) + 2 ) + b;
}	

function linear (t, b, c, d) {
	return c*t/d + b;
}

function easeInOutQuart (t, b, c, d) {
    t /= d/2;
	if (t < 1) return c/2*t*t*t*t + b;
	t -= 2;
    return -c/2 * (t*t*t*t - 2) + b;
}

function easeOutCubic (t, b, c, d) {
	t /= d;
	t--;
	return c*(t*t*t + 1) + b;
}

function easeOutExpo (t, b, c, d) {
	return c * ( -Math.pow( 2, -10 * t/d ) + 1 ) + b;
}

function easeInOutQuad  (t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
}


var introAnimation = {
    "header" : document.querySelector("header"),
    "logo" : document.querySelector("#logo"),
    "logoStartValue" : 0,
    "logoCurrentTime" : 0,
    "logoChangeInValue" : 1.0,
    "logoDuration" : 200,
    "resetDuration" : 30,
    
    "headerResetStartValue_width" : 100, 
    "headerResetChangeInValue_width" : -80,
    
    "intiialValueLogo_width" : 20,
    "intiialValueLogo_marginLeft" : 41,
    "intiialValueLogo_marginTop" : 17,
    "reset2StartValue" : -350,
    "reset2ChangeInValue" : 350,
    
    
    
    "operate": function(){
        var header = document.querySelector("header");
        this.header.style.width = this.headerResetStartValue_width + "%";
        this.logo.style.width = this.intiialValueLogo_width + "%";
        this.logo.style.marginLeft = this.intiialValueLogo_marginLeft + "%";
        setDivVerticalPosMid.operate_padding(header,0);
        
         document.querySelector("#introduction > p").style.transform = "translateY("+ (-this.reset2StartValue) +"px)"
        
        var logoInterval = setInterval(function(){
            var value = easeInOutQuart(
                introAnimation.logoCurrentTime,
                introAnimation.logoStartValue,
                introAnimation.logoChangeInValue,
                introAnimation.logoDuration
            );
            introAnimation.logo.style.opacity = value;
            introAnimation.logo.style.webkitFilter = "blur("+(1-value)+"em)";
            introAnimation.logoCurrentTime++;
            
            if(introAnimation.logoDuration === introAnimation.logoCurrentTime){
                introAnimation.logoCurrentTime = 0;
                clearInterval(logoInterval);
                introAnimation.operate2();
            }
        },0.25);
        
    },
    
    "operate2": function(){
        
        var logoInterval2 = setInterval(function(){
            var value = easeInOutQuart(
                introAnimation.logoCurrentTime,
                introAnimation.logoStartValue + introAnimation.logoChangeInValue,
                -introAnimation.logoChangeInValue,
                introAnimation.logoDuration
            );
            introAnimation.logo.style.opacity = value;
            introAnimation.logo.style.webkitFilter = "blur("+(1-value)+"em)";
            introAnimation.logoCurrentTime++;
            
            if(introAnimation.logoDuration === introAnimation.logoCurrentTime){
                introAnimation.logoCurrentTime = 0;
                clearInterval(logoInterval2);
                introAnimation.reset();
            }
        },0.25);
    },
    
    
    "reset" : function(){
        
        var resetInterval = setInterval(function(){
            
            introAnimation.header.style.width = easeInOutQuart(
                introAnimation.logoCurrentTime,
                introAnimation.headerResetStartValue_width,
                introAnimation.headerResetChangeInValue_width,
                introAnimation.resetDuration
            ) + "%";
            introAnimation.logoCurrentTime++;
            
            if(introAnimation.logoCurrentTime === introAnimation.resetDuration){
                introAnimation.logoCurrentTime = 0;
                clearInterval(resetInterval);
                introAnimation.reset2();
            }
        },6);
    },

    "reset2" : function(){
        
        var resetInterval = setInterval(function(){
            introAnimation.header.removeAttribute('style');
            introAnimation.logo.removeAttribute('style');    
            var value = easeInOutQuart(
                introAnimation.logoCurrentTime,
                introAnimation.reset2StartValue,
                introAnimation.reset2ChangeInValue,
                introAnimation.resetDuration
            );
            introAnimation.logo.style.transform = "translateY(" + value + "px)";
            document.querySelector("#introduction > p").style.transform = "translateY(" + -value + "px)";
            introAnimation.logoCurrentTime++;
            
            if(introAnimation.logoCurrentTime === introAnimation.resetDuration){
//                var tmp =  introAnimation.logo.outerHTML;
//                introAnimation.logo.outerHTML = "<a href \"./index.php\">" + tmp + "</a>";
                clearInterval(resetInterval);
            }
        },6);
    }
}



function closeNav(){
    var nav = document.querySelector("nav");
    if(nav.getAttribute("status") === "open"){
        var event = new MouseEvent('click');
        clickNavButton.navButton.dispatchEvent(event);
    }
}

function sectionNameChange(){
    var sectionEle = document.querySelector("section");
    var pageButton = document.querySelector("#news-pageButton");
    sectionEle.outerHTML = sectionEle.outerHTML.replace("<section","<section></section><div id=\"disappear\"");
    if(pageButton != null){
        pageButton.setAttribute('id','news-pageButton-disappear');
    }
}


var animateSection = {
      
    "animate" :  function(){
        setTimeout(function(){
            document.querySelector("section").style.transform = "translateX(0px)";
        },100);
    }
    
}


var animateSection_disappear = {
   
    "animate" :  function(){
        var value = window.outerWidth;
        var disap = document.querySelector("#disappear");
        var pageButton = document.querySelector("#news-pageButton-disappear");
        var sectionId = document.querySelector("section").getAttribute("id");
        
        if(pageButton != null){
            pageButton.style.transform = "translate("+window.outerWidth+"px)";
            setTimeout(function(){
                var pageButton = document.querySelector("#news-pageButton-disappear");
                pageButton.outerHTML = "";},500);
        }
        disap.style.transform = "translateX("+value+"px)";
        setTimeout(function(){
            disap.outerHTML = "";
        },200)
        
    }
    
}

