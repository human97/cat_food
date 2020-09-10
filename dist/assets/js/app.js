// hover

const containerCards = document.querySelector('.container_cards')
let cardBorder = containerCards.querySelectorAll('.card_border')
let cardLabel
let cardWeight
let cardBuy
//let buy = containerCards.querySelectorAll('.buy')
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


// функция клике на карточке
function click(e) {
    e.addEventListener('click', function () {
        e.classList.toggle('selected')
        cardLabel = e.querySelector('.card_label')
        cardWeight = e.querySelector('.card_weight')
        cardBuy = e.parentNode.querySelector('.card_buy')

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

cardBorder.forEach(mouseEnter) // повесил на карточки логику при наведении
cardBorder.forEach(mouseLeave) // повесил на карточку логику при уходе курсора
cardBorder.forEach(click) // повесил на карточку логику при клике

/*

buy.addEventListener('click', function () {
    cardBorder.classList.add('selected')
    cardBorder.style.backgroundColor = colorSelected
    cardWeight.style.backgroundColor = colorSelected
    cardBuy.textContent = 'Печень утки разварная с артишоками.'
})
*/
"use strict";