
const createDeck = (suite) => {
    let cards = [];
    let values = ["A", "J", "Q", "K", 2, 3, 4, 5, 6, 7, 8, 9, 10];

    values.forEach((val) => {
        let card = suite;
        if (val === 10) {
            card = "T" + card;
        }
        else {
            card = val + card;
        }

        cards.push(card);
    })
    return cards;
}

const shufftleCards = (deck) => {
    let n = deck.length - 1;
    for (let i = n; i >= 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

function dealCards(deck, n) {
    const hand = deck.splice(0, n

    );
    return hand;
};

const suite1 = createDeck("S");
const suite2 = createDeck("H");
const suite3 = createDeck("C");
const suite4 = createDeck("D");
const deck = [...suite1, ...suite2, ...suite3, ...suite4];
const shuffledDeck = shufftleCards(deck);
console.log(shuffledDeck);

const hand = dealCards(shuffledDeck, 10);
console.log(hand);

module.exports = {
    createDeck,
    shufftleCards,
    dealCards
}