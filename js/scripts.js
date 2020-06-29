const closeModal = document.querySelector('.close-modal');
const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');
const modalContent = document.querySelector('.modal-content');

for(let card of cards) {
  card.addEventListener('click', () => {
    const idRecipes = card.getAttribute('id');
    const titleRecipes = card.querySelector(".title").textContent;
    const infoRecipes = card.querySelector('.info').textContent;

    modalOverlay.classList.add('active');
    modalContent.querySelector('img').src=`../assets/${idRecipes}.png`;
    document.querySelector('#title-modal').innerHTML = titleRecipes;
    document.querySelector('#info-modal').innerHTML = infoRecipes;
    
  })
}

closeModal.addEventListener('click', () => {
  modalOverlay.classList.remove('active');
})

