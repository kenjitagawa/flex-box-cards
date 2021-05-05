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
const btnsMore = document.querySelectorAll(".card__front");
console.log(btnsMore);

// "Less" button
const btnsClose = document.querySelectorAll(".card__close");
console.log(btnsClose);

// cards.forEach((e)=> {
//     console.log(e)
// })

for (let i = 0; i < cards.length; i++) {
    // Getting individual button
    const btnMore = btnsMore[i];
    const btnClose = btnsClose[i];

    // Getting individual front and back pannels
    const front = cardsFront[i];
    const back = cardsBack[i];

    btnMore.addEventListener("click", (e) => {
        front.classList.add('hidden');
        back.classList.remove('hidden');
    })

    btnClose.addEventListener("click", (e) => {
        front.classList.remove('hidden');
        back.classList.add('hidden');
    })
}

// Adding event listeners
// for (let i = 0; i < cards.length; i++) {

// };

// btnsMore.forEach((e) => {
//     e.addEventListener('click', (e) => {
//         console.log(e);
//     })
// });

// btnsClose.forEach((e) => {
//     e.addEventListener('click', (e) => {
//         console.log(e);
//     })
// });




