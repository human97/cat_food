// hover

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


let cardBorder = containerCards.querySelectorAll('.card_border')
let cardLabel
let cardDescr
let cardWeight
let cardBuy
const colorDefault = 'rgb(22, 152, 217)'
const colorDefaultHover = 'rgb(46, 168, 230)'
const colorSelected = 'rgb(217, 22, 103)'
const colorSelectedHover = 'rgb(230, 46, 122)'


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

/*
// функция при клике на карточку
 function click(e) {
    e.addEventListener('click', function () {
        e.classList.toggle('selected')
        cardLabel = e.querySelector('.card_label')
        cardWeight = e.querySelector('.card_weight')
        let cardBuy = e.parentNode.querySelector('.card_buy')

        if (cardLabel.textContent === 'Котэ не одобряет?') {
            cardLabel.style.color = '#666'
            cardLabel.textContent = 'Сказочное заморское яство'
        }
        let colorBorder = e.style.backgroundColor
        if (colorBorder === colorDefaultHover || colorBorder === colorDefault) {
            e.style.backgroundColor = colorSelected
            cardWeight.style.backgroundColor = colorSelected

            if (e.classList.contains('chicken')) {
                cardBuy.textContent = 'Филе из цыплят с трюфелями в бульоне.'
            }
            if (e.classList.contains('fish')) {
                cardBuy.textContent = 'Головы щучьи с чесноком да свежайшая сёмгушка.'
            }
            if (e.classList.contains('fua')) {
                cardBuy.textContent = 'Печень утки разварная с артишоками.'
            }
        } else if (colorBorder === colorSelected || colorBorder === colorSelectedHover) {
            e.style.backgroundColor = colorDefault
            cardWeight.style.backgroundColor = colorDefault
            cardBuy.innerHTML = `Чего сидишь? Порадуй котэ,
        <a href="#" class="buy">купи</a><span>.</span>`

        }
    })
}
*/

// повесил на карточки логику поведения при наведении
cardBorder.forEach((e) => {
    mouseEnter(e);
    mouseLeave(e);
    //click(e)
})