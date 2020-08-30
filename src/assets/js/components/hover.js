// hover

const containerCards = document.querySelector('.container_cards')
const cardLabel = containerCards.querySelector('.card_label')
const cardBorder = containerCards.querySelector('.card_border')
const cardWeight = containerCards.querySelector('.card_weight')
const cardBuy = containerCards.querySelector('.card_buy')
const buy = containerCards.querySelector('.buy')
const colorDefault = 'rgb(22, 152, 217)'
const colorDefaultHover = 'rgb(46, 168, 230)'
const colorSelected = 'rgb(217, 22, 103)'
const colorSelectedHover = 'rgb(230, 46, 122)'


cardBorder.addEventListener('mouseenter', function () {
    if (cardBorder.classList.contains('selected')) {
        cardBorder.style.backgroundColor = colorSelectedHover
        cardWeight.style.backgroundColor = colorSelectedHover
        cardLabel.textContent = 'Котэ не одобряет?'
        cardLabel.style.color = colorSelectedHover
    } else {
        cardBorder.style.backgroundColor = colorDefaultHover
        cardWeight.style.backgroundColor = colorDefaultHover
    }
})

cardBorder.addEventListener('mouseleave', function () {
    if (cardBorder.classList.contains('selected')) {
        cardBorder.style.backgroundColor = colorSelected
        cardWeight.style.backgroundColor = colorSelected
        if (cardLabel.textContent === 'Котэ не одобряет?') {
            cardLabel.style.color = '#666'
            cardLabel.textContent = 'Сказочное заморское яство'
        }
    } else {
        cardBorder.style.backgroundColor = colorDefault
        cardWeight.style.backgroundColor = colorDefault
    }
})


cardBorder.addEventListener('click', function () {
    cardBorder.classList.toggle('selected')
    if (cardLabel.textContent === 'Котэ не одобряет?') {
        cardLabel.style.color = '#666'
        cardLabel.textContent = 'Сказочное заморское яство'
    }
    colorBorder = cardBorder.style.backgroundColor
    if (colorBorder === colorDefaultHover || colorBorder === colorDefault) {
        cardBorder.style.backgroundColor = colorSelected
        cardWeight.style.backgroundColor = colorSelected
        cardBuy.textContent = 'Печень утки разварная с артишоками.'
    } else if (colorBorder === colorSelected || colorBorder === colorSelectedHover) {
        cardBorder.style.backgroundColor = colorDefault
        cardWeight.style.backgroundColor = colorDefault
        cardBuy.innerHTML = `Чего сидишь? Порадуй котэ,
        <a href="#" class="buy">купи</a><span>.</span>`
    }
})

buy.addEventListener('click', function () {
    cardBorder.classList.add('selected')
    if (cardLabel.textContent === 'Котэ не одобряет?') {
        cardLabel.style.color = '#666'
        cardLabel.textContent = 'Сказочное заморское яство'
    }
    cardBorder.style.backgroundColor = colorSelected
    cardWeight.style.backgroundColor = colorSelected
    cardBuy.textContent = 'Печень утки разварная с артишоками.'
})