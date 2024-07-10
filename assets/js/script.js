function renderResults() {
  // Get events from localStorage
  const events = JSON.parse(localStorage.getItem('events'));

  // Loop through events and render a card for each event
  for (const event of events) {
    renderCard(event);
  }
}


/** event object = {
 *   title: '',
 *   description: '',
 *   address: '',
 *   date: '',
 *   time: '',
 *   thumbnail: '',
 *   source: '',
 *   link: ''
 * }
 */
function renderCard(event) {
  // Get results container
  const resultsContainerEl = document.getElementById('eventResultsContainer');

  // Results card
  const cardEl = document.createElement('div');

  // Title
  const titleEl = document.createElement('div');
  titleEl.textContent = event.title;

  cardEl.appendChild(titleEl);
  resultsContainerEl.appendChild(cardEl);
}
