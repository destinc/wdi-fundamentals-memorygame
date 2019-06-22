console.log("up and running!");

const cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png",
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png",
	},
	 {
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png",
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png",
	},
	];
const cardsInPlay = [];

function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log('You found a match!');
	} else {
		console.log('Sorry, try again');
	}
}

function flipCard(cardId){
	cardsInPlay.push(cards[cardId].rank);
if (cardsInPlay.length === 2) {
	checkForMatch();
	
	}
};

console.log(cardsInPlay);

flipCard(0)
flipCard(1)
	console.log('User flipped' + cards[cardId],rank);
	console.log(this.cardImage);
	console.log(this.suit);
