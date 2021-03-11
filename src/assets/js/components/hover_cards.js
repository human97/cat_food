// hover

const cardBorder = containerCards.querySelectorAll('.card_border')
let cardLabel
let cardDescr
let cardWeight
let cardBuy
const colorDefault = 'rgb(22, 152, 217)'
const colorDefaultHover = 'rgb(46, 168, 230)'
const colorSelected = 'rgb(217, 22, 103)'
const colorSelectedHover = 'rgb(230, 46, 122)'


// функция наведения курсора на карточку
function mouseEnter(e) {
    e.addEventListener('mouseenter', function () {
        cardWeight = e.querySelector('.card_weight')
        if (e.classList.contains('selected')) {
            cardLabel = e.querySelector('.card_label')
            e.style.backgroundColor = colorSelectedHover
            cardWeight.style.backgroundColor = colorSelectedHover

            cardLabel.textContent = 'Котэ не одобряет?'
            cardLabel.style.color = colorSelectedHover
        } else {
            e.style.backgroundColor = colorDefaultHover
            cardWeight.style.backgroundColor = colorDefaultHover
        }
    })
}


// функция курсор покидает карточку
function mouseLeave(e) {
    e.addEventListener('mouseleave', function () {
        cardWeight = e.querySelector('.card_weight')
        if (e.classList.contains('selected')) {
            cardLabel = e.querySelector('.card_label')
            e.style.backgroundColor = colorSelected
            cardWeight.style.backgroundColor = colorSelected
            if (cardLabel.textContent === 'Котэ не одобряет?') {
                cardLabel.style.color = '#666'
                cardLabel.textContent = 'Сказочное заморское яство'
            }
        } else {
            e.style.backgroundColor = colorDefault
            cardWeight.style.backgroundColor = colorDefault
        }
    })
}


// повесил на карточки логику поведения при наведении
cardBorder.forEach((e) => {
    mouseEnter(e)
    mouseLeave(e)
})