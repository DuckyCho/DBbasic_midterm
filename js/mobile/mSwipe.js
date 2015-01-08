
function swipeEventRegister(){
    var main = document.querySelector("#main");
    main.addEventListener('touchstart', touchEndEventRegister,false);
}


function touchEndEventRegister(ev){
    var main = document.querySelector("#main");
    startX =ev.touches[0].clientX;
    startY =ev.touches[0].clientY;
    main.addEventListener('touchend',endPosRegister,false);

}



function endPosRegister(evt){
    var main = document.querySelector("#main");
    main.removeEventListener('touchend',endPosRegister);
    endX =evt.changedTouches[0].clientX;
    endY =evt.changedTouches[0].clientY;
    isSwipe(evt);

}

function isSwipe(evt){
    var differX = endX-startX;
    var differY = endY-startY;
    var curPage = document.querySelector("#curPage");
    var lastIdx = document.querySelectorAll(".PagePointer").length - 1;
    
    if(Math.abs(differX) > 150 && Math.abs(differY) < 150){
        if( !( (curPage.getAttribute('idx')*1 == 0 && differX > 0) || (curPage.getAttribute('idx')*1 == lastIdx && differX < 0) ) ){
            doSwipe(differX,differY);
        }
        else{
            swipeEventRegister();
        }
    }
    else if(differX === 0 && differY ===0){
        articleClicked(evt.target);
    }
    else{
        swipeEventRegister();
    }
    

}


function doSwipe(differX, differY){
    var windowSize = differX > 0 ? 1 : -1;
    var cur = document.querySelector("#curPage");
    if(windowSize < 0){
        var next = cur.nextElementSibling;
        cur.removeAttribute('id');
        next.setAttribute('id','curPage');
    }
    else{
        var prev = cur.previousElementSibling;
        cur.removeAttribute('id');
        prev.setAttribute('id','curPage');
    }
    var choosedLi = document.querySelector("#youChooseMe").innerText;
    if(choosedLi == "RELEASES"){
        var eles = document.querySelectorAll(".albumPage");
    }
    else{
        var eles = document.querySelectorAll("article");
    }
    
    var length = eles.length;
    var pos;
 
    if(eles[1].style.transform === undefined){
        windowSize *= getPos(eles[1].style.webkitTransform) - getPos(eles[0].style.webkitTransform);
        for(var i = 0 ; i < length ; i++ ){
            pos = getPos(eles[i].style.webkitTransform);
            eles[i].style.transform = "translateX("+ (pos + windowSize )+"px)"
            eles[i].style.webkitTransform = "translateX("+ (pos + windowSize )+"px)"
        }
    }
    else{
         windowSize *= getPos(eles[1].style.transform) - getPos(eles[0].style.transform);
        for(var i = 0 ; i < length ; i++ ){
            pos = getPos(eles[i].style.transform);
            eles[i].style.transform = "translateX("+ (pos + windowSize )+"px)"
            eles[i].style.webkitTransform = "translateX("+ (pos + windowSize )+"px)"
        }
    }
    
    
    swipeEventRegister();
}

function getPos(text){
    text = text.replace("translateX(","");
    text = text.replace("px)","");
    return text*1;
}