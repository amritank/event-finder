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

  // Thumbnail
  const thumbnailEl = document.createElement('img');
  thumbnailEl.src = event.thumbnail;

  // Title
  const titleEl = document.createElement('div');
  titleEl.textContent = event.title;

  // Info
  const infoEl = document.createElement('div');
  const dateEl = document.createElement('p');
  dateEl.textContent = 'Date: ' + event.date;
  const timeEl = document.createElement('p');
  timeEl.textContent = 'Time: ' + event.time;
  const addressEl = document.createElement('p');
  addressEl.textContent = 'Address: ' + event.address;
  infoEl.append(dateEl, timeEl, addressEl);

  // Source
  // TODO: Get icons for source
  const sourceEl = document.createElement('p');
  sourceEl.textContent = event.source;

  // More info
  const moreInfoEl = document.createElement('button');
  moreInfoEl.textContent = 'More Info';

  // Append info to card and append card to results container
  cardEl.append(thumbnailEl, titleEl, infoEl, sourceEl, moreInfoEl);
  resultsContainerEl.append(cardEl);
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
