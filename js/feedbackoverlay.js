
var openFeedback = document.querySelectorAll ('.button__black');


    function openOverlay(name, content) {
        const overlayElement = document.createElement("div");
            overlayElement.classList.add("feedbackoverlay");
    
        const containerElement = document.createElement("div");
            containerElement.classList.add("overlaycontainer");
    
        const contentElement = document.createElement("div");
            contentElement.classList.add("content");
    
        const nameElement = document.createElement("div");
            nameElement.classList.add("content__user");
            nameElement.innerHTML = name;

        const textElement = document.createElement("div");
            textElement.classList.add("content__text");
            textElement.innerHTML = content;
        
        const closeWrapper = document.createElement("div");
            closeWrapper.classList.add("content__close");
        
        const closeElement = document.createElement("div");
            closeElement.classList.add("content__close-img");
    
            overlayElement.addEventListener('click', e =>{
                if (e.target === overlayElement) {
                    closeElement.click();
                }
            })
            
            closeWrapper.addEventListener("click", function(e) {
        e.preventDefault ();
        document.body.removeChild(overlayElement);
    });

    overlayElement.appendChild(containerElement);
    containerElement.appendChild(contentElement);
    contentElement.appendChild(closeWrapper);
    contentElement.appendChild(nameElement);
    closeWrapper.appendChild(closeElement);
    contentElement.appendChild(textElement);

    
     return overlayElement;
    };

    for (var i=0; i<openFeedback.length; i++) {
        openFeedback[i].addEventListener('click', function(e) {   // вот так мы пробежались по всем кнопочкам и навесили на каждую обработчик
            var feedBackContent = this.previousElementSibling;
            var feedBackUser = feedBackContent.previousElementSibling;
            var createOverlay = openOverlay(feedBackUser.innerHTML, feedBackContent.innerHTML);
        
            document.body.appendChild(createOverlay);     //тут код обработчика
        });
    }

