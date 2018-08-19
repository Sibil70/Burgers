const myForm = document.querySelector ('#orderForm');    
const orderButton = document.querySelector ('#order-button');

orderButton.addEventListener ('click', function(event){
    event.preventDefault();
    
    if (validateForm (myForm)) {
        const data = {
            name: myForm.elements.name.value,
            phone: myForm.elements.phone.value,
            email: myForm.elements.email.value,
            comment: myForm.elements.comment.value
        };

        const xhr = new XMLHttpRequest ();
            xhr.responseType = 'json';
            xhr.open ('POST', 'https://webdev-api.loftschool.com/sendmail');
            xhr.send(JSON.stringify(data));
            xhr.addEventListener ('load', () => {
                console.log (xhr.response);
            });

                const successOverlay = openOverlay("Сообщение отправлено");

                document.body.appendChild(successOverlay);

                function openOverlay(content) {
                const overlayElement = document.createElement("div");
                overlayElement.classList.add("orderoverlay");

                const containerElement = document.createElement("div");
                containerElement.classList.add("overlaycontainer");

                const contentElement = document.createElement("div");
                contentElement.classList.add("content");

                const textElement = document.createElement("div");
                textElement.classList.add("overlaytext");
                textElement.innerHTML = content;

                const closeElement = document.createElement("button");
                closeElement.classList.add("button");
                closeElement.classList.add("button--red");
                closeElement.classList.add("button--marginbottom");
                closeElement.textContent = "закрыть";
                closeElement.addEventListener("click", function(e) {
                    e.preventDefault ();
                    document.body.removeChild(overlayElement);
                });

                overlayElement.appendChild(containerElement);
                containerElement.appendChild(contentElement);
                contentElement.appendChild(textElement);
                contentElement.appendChild(closeElement);

                 return overlayElement;
                }

    } else {
        console.log ('smth wrong!');
        const failOverlay = openOverlay("Сообщение не отправлено!");

        document.body.appendChild(failOverlay);

        function openOverlay(content) {
        const overlayElement = document.createElement("div");
        overlayElement.classList.add("orderoverlay");

        const containerElement = document.createElement("div");
        containerElement.classList.add("overlaycontainer");

        const contentElement = document.createElement("div");
        contentElement.classList.add("content");

        const textElement = document.createElement("div");
        textElement.classList.add("overlaytext");
        textElement.innerHTML = content;

        const closeElement = document.createElement("button");
        closeElement.classList.add("button");
        closeElement.classList.add("button--red");
        closeElement.classList.add("button--marginbottom");
        closeElement.textContent = "закрыть";
        closeElement.addEventListener("click", function(e) {
            e.preventDefault ();
            document.body.removeChild(overlayElement);
        });

        overlayElement.appendChild(containerElement);
        containerElement.appendChild(contentElement);
        contentElement.appendChild(textElement);
        contentElement.appendChild(closeElement);

         return overlayElement;
        }
    };

    function validateForm (myForm) {
        let valid = true;
        if (!myForm.checkValidity(myForm.elements.name)){
            valid = false;
        }
        if (!myForm.checkValidity(myForm.elements.phone)){
            valid = false;
        }
        if (!myForm.checkValidity(myForm.elements.email)){
            valid = false;
        }
        return valid;
    }
})