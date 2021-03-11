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

//const containerCards = document.querySelector('.container_cards')
const cardsWrappers = containerCards.querySelectorAll('.card_wrapper')

// повесил на обертки карточек логику поведения при отключении
cardsWrappers.forEach(disabledCards)
