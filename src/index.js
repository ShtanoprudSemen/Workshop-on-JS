
// checkbox
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

checkbox.forEach( (element) => {
    element.addEventListener('change', () => {
        if ( this.checked ){
            this.nextElementSibling.classList.add('checked')
        } else{
            this.nextElementSibling.classList.remove('checked')
        }
    });
});
// end checkbox
// Корзина

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

// end Корзина

// работа с корзиной
const cards = document.querySelectorAll('.goods .card'),
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartEmpty = document.getElementById('cart-empty'),
    countGoods = document.querySelector('.counter');


cards.forEach((card) => {
    const btn = card.querySelector('button');

    btn.addEventListener('click', () => {
        const cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        cartEmpty.remove();
        showData();
    });
});

function showData(){
    const cardsCart = cartWrapper.querySelectorAll('.card');
    countGoods.textContent = cardsCart.length;
    console.log(cardsCart);
}
// end работа с корзиной

