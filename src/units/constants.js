export const cards = {
    player: [],
    computer: []
}

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const suits = ['\u2661', '\u2662', '\u2664', '\u2667']; //decode: Heart, Diamond, Spade, Club 

const createDeck = () => {
    const deck = [];
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            deck.push({ number: numbers[j], suit: suits[i] });
        }
    }

    return deck;
}

const shuffleDeck = () => {
    const deck = createDeck();
    for (let i = deck.length - 1; i > 0; i--) {
        const temp = deck[i];
        const randomCard = Math.floor(Math.random() * (deck.length - 1));
        deck[i] = deck[randomCard];
        deck[randomCard] = temp;
    }

    return deck;
}

export const cardsDeal = () => {
    const deck = shuffleDeck();
    cards.player = deck.splice(0, deck.length / 2);
    cards.computer = deck;
}