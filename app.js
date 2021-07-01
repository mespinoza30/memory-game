document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'beach',
            img: 'images/beach.jpeg'
        },
        {
            name: 'butterfly',
            img: 'images/butterfly.jpeg'
        },
        {
            name: 'camera',
            img: 'images/camera.jpeg'
        },
        {
            name: 'succulent',
            img: 'images/succulent.jpeg'
        },
        {
            name: 'sunflower',
            img: 'images/sunflower.jpeg'
        },
        {
            name: 'tea',
            img: 'images/tea.jpeg'
        },
        {
            name: 'beach',
            img: 'images/beach.jpeg'
        },
        {
            name: 'butterfly',
            img: 'images/butterfly.jpeg'
        },
        {
            name: 'camera',
            img: 'images/camera.jpeg'
        },
        {
            name: 'succulent',
            img: 'images/succulent.jpeg'
        },
        {
            name: 'sunflower',
            img: 'images/sunflower.jpeg'
        },
        {
            name: 'tea',
            img: 'images/tea.jpeg'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId [0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!')
            cards[optionOneId].setAttribute('src', 'images/white.jpeg')
            cards[optionTwoId].setAttribute('src', 'images/white.jpeg')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.jpg')
            cards[optionTwoId].setAttribute('src', 'images/blank.jpg')
            alert('Try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) {
            resultDisplay.textContent = 'CONGRATULATIONS! You found all the matches!'
        }
    }

    function flipCard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()


})