function loadContactPage(){
    var section = document.querySelector("section");
    var contactObj = new contact();
   section.removeAttribute('id');
    section.innerHTML = "";
    contactObj.setHTML(section);
     
}


function contact(){
        this.setHTML =  function(section){
        section.outerHTML = htmlTemplate.contact_section;
    }
}