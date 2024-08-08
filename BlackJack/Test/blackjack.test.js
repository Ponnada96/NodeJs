const { createDeck,
    shufftleCards,
    dealCards } = require('../index');

test("should creat a Deck of cards 13", () => {
    expect(createDeck("J")).length.toBeGreaterThanEqualTo(13);
});