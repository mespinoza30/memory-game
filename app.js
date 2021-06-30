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

    const grid = document.querySelector('.grid')

    //create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.jpg')
            card.setAttribute('data-id', i)
            // card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }

    createBoard()
})