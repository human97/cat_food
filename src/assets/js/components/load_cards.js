/* load_cards */

const containerCards = document.querySelector('.container_cards')

for (let card of cards) {
 
  containerCards.innerHTML +=
    `<div class="card_wrapper ${card.availability}">
      <div class="shadow"></div>
      <div class="card_border ">
              
      <!-- card -->
      <div class="card">
      <div class="card--info">
      <p class="card_label">Сказочное заморское яство</p>
      <p class="card_title">Нямушка</p>
      <p class="card_descr">${card.card_descr}</p>
      <p class="card_specs">
        <b>${card.card_specs[0]}</b> ${card.card_specs[1]}
        <br><b>${card.card_specs[2]}</b>${card.card_specs[3]+card.card_specs[4]}
        </p>                     
      </div>
      <div class="card_img"></div>
      <div class="card_weight">
        <p class="card_weight--count">${card.cardWeightCount}</p>
        <p class="card_weight--measure">кг</p>
      </div>                 
      </div>
      <!-- /.card -->
                    
      </div>
      <!-- /.card_border -->
              
        <p class="card_buy ">Чего сидишь? Порадуй котэ,
         <span class="buy">купи</span><span>.</span>
        </p>
      </div>
      <!-- /.card_wrapper -->`
}