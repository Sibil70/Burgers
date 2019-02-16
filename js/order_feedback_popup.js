const myForm = document.querySelector('#orderForm'),
    template = document.querySelector('#modal-tmp').innerHTML,
    orderButton = document.querySelector('#order-button'),
    feedbacksCollection = document.querySelectorAll('.js-feedback-modal');

const popup = createModal();

for (var feedback of feedbacksCollection) {
    feedback.addEventListener('click', function (e) {
        var feedBackContent = this.previousElementSibling;
        var feedBackUser = feedBackContent.previousElementSibling;

        popup.clear();
        popup.open();
        popup.setContent(feedBackContent.innerHTML);
        popup.setTitle(feedBackUser.innerHTML);
        popup.setSmallBtn();
    });
}
orderButton.addEventListener('click', function (event) {
    event.preventDefault();

    let formValid = validateForm(myForm);

    if (formValid) {
        const data = {
            name: myForm.elements.name.value,
            phone: myForm.elements.phone.value,
            email: myForm.elements.email.value,
            comment: myForm.elements.comment.value
        };

        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        xhr.send(JSON.stringify(data));
        xhr.addEventListener('load', () => {
            console.log(xhr.response);
        });
        popup.clear();
        popup.open();
        popup.setContent('Сообщение отправлено');
        popup.setBigBtn();

    } else {
        console.log('smth wrong!');
        popup.clear();
        popup.open();
        popup.setContent('Сообщение не отправлено');
        popup.setBigBtn();
    };

});

function validateForm(myForm) {
    let valid = true;
    if (!myForm.checkValidity(myForm.elements.name)) {
        valid = false;
    }
    if (!myForm.checkValidity(myForm.elements.phone)) {
        valid = false;
    }
    if (!myForm.checkValidity(myForm.elements.email)) {
        valid = false;
    }
    return valid;
};

function createModal() {
    const container = document.createElement('div');

    container.className = 'popup';
    container.innerHTML = template;

    const contentTitle = container.querySelector('.overlay__title'),
        contentBlock = container.querySelector('.overlay__text'),
        closeBtns = container.querySelectorAll('.js-close'),
        bigBtn = container.querySelector('.button'),
        smallBtn = container.querySelector('.overlay__close');

    for (var btn of closeBtns) {
        btn.addEventListener('click', e => {
            document.body.removeChild(container);
        })
    }

    container.addEventListener('click', e => {
        if (e.target === container) {
            btn.click();
        }
    })

    return {
        clear() {
            contentTitle.innerHTML = '';
            contentBlock.innerHTML = '';
            smallBtn.style.display = "block";
            bigBtn.style.display = "block";
        },
        open() {
            document.body.appendChild(container);
        },
        close() {
            closeBtn.click();
        },
        setTitle(title) {
            contentTitle.innerHTML = title;
        },
        setContent(message) {
            contentBlock.innerHTML = message;
        },
        setBigBtn() {
            smallBtn.style.display = "none";
        },
        setSmallBtn() {
            bigBtn.style.display = "none";
        }
    };
}