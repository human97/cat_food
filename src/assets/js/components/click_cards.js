// click cards

// функция для замены текста в параграфе(.card_descr) под карточкой товара
const changeText = () => {
    if (cardDescr.textContent === 'с курой') {
        cardBuy.textContent = 'Филе из цыплят с трюфелями в бульоне.'
    }
    if (cardDescr.textContent === 'с рыбой') {
        cardBuy.textContent = 'Головы щучьи с чесноком да свежайшая сёмгушка.'
    }
    if (cardDescr.textContent === 'с фуа-гра') {
        cardBuy.textContent = 'Печень утки разварная с артишоками.'
    }
}

// действия при клике на карточку или ссылку "купи"
containerCards.addEventListener('click', (e) => {
    let card = e.target.closest('.card_border') //элемент в карточке или карточка на которой кликнули
    let link = e.target.closest('.buy') // ссылка купи

    // если клик на карточке
    if (card) {
        card.classList.toggle('selected')
        cardLabel = card.querySelector('.card_label')
        cardWeight = card.querySelector('.card_weight')
        cardBuy = card.parentNode.querySelector('.card_buy')
        cardDescr = card.querySelector('.card_descr')

        if (cardLabel.textContent === 'Котэ не одобряет?') {
            cardLabel.style.color = '#666'
            cardLabel.textContent = 'Сказочное заморское яство'
        }
        let colorBorder = card.style.backgroundColor
        if (colorBorder === colorDefaultHover || colorBorder === colorDefault) {
            card.style.backgroundColor = colorSelected
            cardWeight.style.backgroundColor = colorSelected

            changeText()

        } else if (colorBorder === colorSelected || colorBorder === colorSelectedHover) {
            card.style.backgroundColor = colorDefault
            cardWeight.style.backgroundColor = colorDefault
            cardBuy.innerHTML = `Чего сидишь? Порадуй котэ,
            <span class="buy">купи</span><span>.</span>`
        }
    }

    // если клик на ссылке "купи"
    if (link) {
        let cardWrapper = link.parentNode.parentNode

        card = cardWrapper.querySelector('.card_border')
        card.classList.add('selected')
        card.style.backgroundColor = colorSelected

        cardWeight = cardWrapper.querySelector('.card_weight')
        cardWeight.style.backgroundColor = colorSelected

        cardBuy = cardWrapper.querySelector('.card_buy')
        cardDescr = cardWrapper.querySelector('.card_descr')

        changeText()
    }
})