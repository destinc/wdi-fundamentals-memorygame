console.log("up and running!");

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

function checkForMatch () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		console.log('You found a match!');
	} else {
		console.log('Sorry, try again');
	}
}

function flipCard(cardId){
	cardsInPlay.push(cards[cardId]);
if (cardsInPlay.length === 2) {
	checkForMatch();
	
	}
}

console.log(cardsInPlay);

flipCard(0)
flipCard(1)
	console.log('User flipped' + cards[cardId]);

