// disabled card

// функция отключения карточек
function disabledCards(e) {
    if (e.classList.contains('disabled')) {
        e.querySelector('.card_border').style.backgroundColor = '#b3b3b3'
        e.querySelector('.card_weight').style.backgroundColor = '#b3b3b3'
        e.querySelector('.shadow').style.display = 'block'
        e.querySelector('.card_buy').style.color = '#ffff66'

        // условия замены текста в параграфе(.card_descr) под карточкой товара при отключении карточки
        if (e.querySelector('.card_descr').textContent === 'с курой') {
            e.querySelector('.card_buy').textContent = 'Печалька, с курой закончился.'
        }
        if (e.querySelector('.card_descr').textContent === 'с рыбой') {
            e.querySelector('.card_buy').textContent = ' Печалька, с рыбой закончился.'
        }
        if (e.querySelector('.card_descr').textContent === 'с фуа-гра') {
            e.querySelector('.card_buy').textContent = 'Печалька, с фуа-гра закончился.'
        }
    }
}

const containerCards = document.querySelector('.container_cards')
const cardsWrappers = containerCards.querySelectorAll('.card_wrapper')

// повесил на обертки карточек логику поведения при отключении
cardsWrappers.forEach(disabledCards)
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
"use strict";