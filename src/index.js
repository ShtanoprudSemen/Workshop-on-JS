// checkbox
function toggleCheckbox() {
    const checkbox = document.querySelectorAll('.filter-check_checkbox');
    // Перебираем елементі с помощью for

    // for (let i = 0; i < checkbox.length; i++) {
    //     checkbox[i].addEventListener('change', function(){
    //         if ( this.checked ){
    //             this.nextElementSibling.classList.add('checked')
    //         } else{
    //             this.nextElementSibling.classList.remove('checked')
    //         }
    //     });
    // }

    // Перебираем елементі с помощью forEach
    checkbox.forEach((element) => {
        element.addEventListener('change', function () {
            if (this.checked) {
                this.nextElementSibling.classList.add('checked')
            } else {
                this.nextElementSibling.classList.remove('checked')
            }
        });
    });
}
toggleCheckbox();
// end checkbox
// Корзина

function toggleCard() {
    const btnCart = document.getElementById('cart'),
        modalCart = document.querySelector('.cart'),
        btnClose = document.querySelector('.cart-close');

    btnCart.addEventListener('click', () => {
        modalCart.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    });

    btnClose.addEventListener('click', () => {
        modalCart.style.display = 'none';
        document.body.style.overflow = '';
    });
}
toggleCard();
// end Корзина

// работа с корзиной

function addCard() {
    const cards = document.querySelectorAll('.goods .card'),
        cartWrapper = document.querySelector('.cart-wrapper'),
        cartEmpty = document.getElementById('cart-empty'),
        countGoods = document.querySelector('.counter');


    cards.forEach((card) => {
        const btn = card.querySelector('button');

        btn.addEventListener('click', () => {
            const cardClone = card.cloneNode(true);
            cartWrapper.appendChild(cardClone);
            showData();

            const removeBtn = cardClone.querySelector('.btn');
            removeBtn.textContent = 'Удалить из корзины';
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                showData();
            });
        });
    });


    function showData() {
        const cardsCart = cartWrapper.querySelectorAll('.card'),
            cardsPrice = cartWrapper.querySelectorAll('.card-price'),
            cardTotal = document.querySelector('.cart-total span');
        let sum = 0;
        countGoods.textContent = cardsCart.length;
        

        cardsPrice.forEach((cardPrice) => {
            let price = parseFloat(cardPrice.textContent);
            sum += price;
            console.log(sum);
        });
        cardTotal.textContent = sum;
        if (cardsCart.length !== 0) {
            cartEmpty.remove();
        } else {
            cartWrapper.appendChild(cartEmpty);
        }

    }
}
addCard();
// end работа с корзиной
