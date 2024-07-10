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

const eventsMockup = [
  {
    title: 'Event Title',
    description: 'This is the event description.',
    address: '123 Address Ln, City, ST 12345',
    date: '07-10-2024',
    time: '5:00 pm',
    thumbnail: 'https://picsum.photos/200',
    source: 'Ticketmaster',
    link: 'https://www.ticketmaster.com/'
  }
];

localStorage.setItem('events', JSON.stringify(eventsMockup));

renderResults();
