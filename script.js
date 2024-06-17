document.addEventListener('DOMContentLoaded', () => {
    //create an array of card objects that hold a name and the image for each card
    const cardArray = [ { name: 'fries', img: 'images/fries.png' }, { name: 'cheeseburger', img: 'images/cheeseburger.png' }, { name: 'hotdog', img: 'images/hotdog.png' }, { name: 'ice-cream', img: 'images/ice-cream.png' }, { name: 'milkshake', img: 'images/milkshake.png' }, { name: 'pizza', img: 'images/pizza.png' }, { name: 'white', img: 'images/white.png' }, { name: 'blank', img: 'images/blank.png' } ];
    //this will shuffle the cards at the beginning of the game
    // DON'T CHANGE THE LINE OF CODE BELOW THIS
    cardArray.sort(() => 0.5 - Math.random())
  
    // select the grid from the HTML and save in a variable
 const grid = document.querySelector(".grid");
    // select the HTML element that shows the results and save in a variable
  const results = document.querySelector("#result");
    // create array variables for the cardsChosen, cardsChosenId, and cardsWon
 const cardsChosen = [];
const cardsChosenId = [];
  const cardsWon = [];
    //create your board
    function createBoard() {
      // create a for loop that:
      // 1. creates an img element and saves it in a variable called card
     const card = document.createElement('img');
      // 2. sets the card's src to the blank image
     card.setAttribute('src', 'images/blank.png');
      // 3. sets an attribute of the card called 'data-id' to a unique number
card.setAttribute('data-id', '1')
      // 4. adds an event listener to the card
     card.addEventListener("click", createBoard);
      // 5. appends the card to the grid
 grid.appendChild(card);
    }
  
    //check for matches
    function checkForMatch() {
      // 1. create a variable that holds all of the card elements
      const cards = document.querySelector('name', 'img', 'data-id', )
      // 2. create a variable called optionOneId and set it equal
      // to the data-id of the first card that was clicked
      const optionOneId = [1];
      // 3. create a variable called optionTwoId and set it equal
      // to the data-id of the second card that was clicked
      const optionTwoId = [2];
      // create an IF statement that checks the following:
      //
      // 1. is the first card the same card as the second card picked? ex. they clicked the same card twice
      // if yes:
      // --- a. set the image of two cards chosen to blank.png
      // --- b. create an alert function that says "You have clicked the same card!"
      //
      // 2. is optionOneId the same id as optionTwoID? ex. they found a match
      // if yes:
      // --- a. set the image of two cards chosen to white.png
      // --- b. remove the event listers from the two cards
      // --- c. add the cardsChosen to the array called cardsWon
      // --- d. create an alert function that says "You found a match"
      //
      // 3. if none of the if statements above are true
      // --- a. set the image of two cards chosen to blank.png
      // --- b. create an alert function that says "Sorry, try again"
      // END OF IF STATMENT
  
  
      // reset the chosen cards by setting the variable equal to an empty array
      // reset the chosen ids by setting the variable equal to an empty array
  
      // display the results by showing the cardsWon array's length
      //
      // create an IF statement that checks the following:
      // 1. is the cardsWon length equal to the total number of matches possible?
      // if yes:
      // --- a. create an alert function that says "Congratulations! You found them all!"
    }
  
  
    // DON'T TOUCH CODE BELOW THIS!!!!!
    //flip your card
    function flipCard() {
      let cardId = this.getAttribute('data-id')
      cardsChosen.push(cardArray[cardId].name)
      cardsChosenId.push(cardId)
      this.setAttribute('src', cardArray[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
  