const myForm = document.querySelector ('#orderForm'),    
    orderButton = document.querySelector ('#order-button'),
    template = document.querySelector('#modal-tmp').innerHTML,
    popup = createModal();

orderButton.addEventListener ('click', function(event){
    event.preventDefault();

    let formValid = validateForm (myForm);

    if (formValid) {
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
            
            popup.open();
            popup.setContent('Сообщение отправлено');           

    } else {
        console.log ('smth wrong!');
        popup.open();
        popup.setContent('Сообщение не отправлено');
    };


});
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
};
function createModal () {
    const container = document.createElement('div');
    container.className = 'orderoverlay';
    container.innerHTML = template;
    
    const contentBlock = container.querySelector('.overlaytext');
    

    const closeBtn = container.querySelector('.button');
    closeBtn.addEventListener('click', e=>{
        document.body.removeChild(container);
    })
    container.addEventListener('click', e=> {
        if(e.target === container) {
            closeBtn.click();
        }
    })

    return {
        open() {
            document.body.appendChild(container);
        },
        close(){
            closeBtn.click(); 
        },
        setContent(message){
            contentBlock.innerHTML = message;
        }

    };
}
