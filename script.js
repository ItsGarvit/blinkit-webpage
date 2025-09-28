const searchInput = document.getElementById('name-of-dish');
const allCards = document.querySelectorAll('.categories div');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  
  allCards.forEach(card => {
    const cardText = card.querySelector('p').textContent.toLowerCase();

    if (cardText.includes(searchTerm)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
});