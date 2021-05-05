// Cards
const cards = document.querySelectorAll(".card");
console.log(cards);

// Front of cards
const cardsFront = document.querySelectorAll(".card__front");
console.log(cardsFront);

// Back of cards
const cardsBack = document.querySelectorAll(".card__back");
console.log(cardsBack);

// "More" button
const btnsMore = document.querySelectorAll(".card__more");
console.log(btnsMore);

// "Less" button
const btnsClose = document.querySelectorAll(".card__close");
console.log(btnsClose);


for (let i = 0; i < cards.length; i++) {
    let btnClose = btnsClose[i];
    let btnMore = btnsMore[i];
}

// Adding event listeners
btnsMore.forEach((e) => {
    e.addEventListener('click', (e) => {
        console.log(e);
    })
});

btnsClose.forEach((e) => {
    e.addEventListener('click', (e) => {
        console.log(e);
    })
});




