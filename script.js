(function(){
    "use strict";
    const images=['image1.jpg','image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
    const currentImage=document.querySelector("img");
    const container=document.getElementById("content");
    let currentID=0;

    const next=document.getElementById("next");
    next.addEventListener("click",function(event){
        event.preventDefault();
        currentID++;
        if(currentID>images.length-1){ currentID=0;}
        swapImage();
    });
    
    const previous=document.querySelector("#previous");
    previous.addEventListener("click",function(event){
        event.preventDefault();
        currentID--;
        if(currentID<0){ currentID=images.length-1;}
        swapImage();
    });

    function swapImage(){
        const newSlide=document.createElement("img");
        newSlide.setAttribute("src","slides/"+images[currentID]);
        newSlide.className="fadeinimg";
        container.appendChild(newSlide);
        if(container.children.length>2){
            container.removeChild(container.children[0]);
        }
    }

})();

