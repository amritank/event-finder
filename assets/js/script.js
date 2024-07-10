function renderResults() {
  // Get events from localStorage
  const events = JSON.parse(localStorage.getItem('events'));

  // Loop through events and render a card for each event
  for (const event of events) {
    renderCard(event);
  }
}

function renderCard(eventObj) {
  // Get results container
  const resultsContainerEl = document.getElementById('eventResultsContainer');

  // Results card
  const cardEl = document.createElement('div');
  cardEl.setAttribute('class', 'p-5 mb-5');
  cardEl.style.border = '2px solid black';

  // Main row
  const mainRowEl = document.createElement('div');
  mainRowEl.setAttribute('class', 'is-flex is-flex-direction-row mb-4');

  // Thumbnail
  const thumbnailEl = document.createElement('div');
  thumbnailEl.style.backgroundImage = `url(${eventObj.thumbnail})`;
  thumbnailEl.style.backgroundSize = 'cover';
  thumbnailEl.style.height = '150px';
  thumbnailEl.style.width = '150px';
  thumbnailEl.setAttribute('class', 'mr-5');
  mainRowEl.append(thumbnailEl);

  // Main Info container
  const mainInfoContainerEl = document.createElement('div');
  mainRowEl.append(mainInfoContainerEl);

  // Title
  const titleEl = document.createElement('h3');
  titleEl.textContent = eventObj.title;
  titleEl.setAttribute('class', 'mb-2');
  titleEl.style.fontWeight = 'bold';
  titleEl.style.fontSize = '175%';
  mainInfoContainerEl.append(titleEl);

  // Info
  const infoEl = document.createElement('div');
  const dateEl = document.createElement('p');
  dateEl.textContent = 'Date: ' + eventObj.date;
  const timeEl = document.createElement('p');
  timeEl.textContent = 'Time: ' + eventObj.time;
  const addressEl = document.createElement('p');
  addressEl.textContent = 'Address: ' + eventObj.address;
  infoEl.append(dateEl, timeEl, addressEl);
  mainInfoContainerEl.append(infoEl);

  // Bottom row
  const bottomRow = document.createElement('div');
  bottomRow.setAttribute('class', 'is-flex is-flex-direction-row is-justify-content-space-between is-align-items-flex-end');

  // Source
  const sourceEl = document.createElement('img');
  sourceEl.src = './assets/images/ticketmaster-logo.png';
  sourceEl.style.height = '20px';
  sourceEl.style.width = '20px';
  bottomRow.append(sourceEl);

  // More info
  const moreInfoEl = document.createElement('button');
  moreInfoEl.textContent = 'More Info';
  moreInfoEl.classList.add('button');
  moreInfoEl.addEventListener('click', (event) => openModal(event, eventObj)); // Call openModal function and pass eventObj
  bottomRow.append(moreInfoEl);

  // Append info to card and append card to results container
  cardEl.append(mainRowEl, bottomRow);
  resultsContainerEl.append(cardEl);
}

function openModal(event, eventObj) {
  console.log(eventObj);
}

const eventsMockup = [
  {
    title: 'Event Title',
    description: 'This is the event description.',
    address: '123 Address Ln, City, ST 12345',
    date: '07-10-2024',
    time: '5:00 pm',
    thumbnail: 'https://picsum.photos/200/300',
    source: 'Ticketmaster',
    link: 'https://www.ticketmaster.com/'
  },
  {
    title: 'Second Event',
    description: 'This is the second event description.',
    address: '456 Address Ln, City, ST 98765',
    date: '07-11-2024',
    time: '8:00 pm',
    thumbnail: 'https://picsum.photos/200/300',
    source: 'Ticketmaster',
    link: 'https://www.ticketmaster.com/'
  },
];

localStorage.setItem('events', JSON.stringify(eventsMockup));

renderResults();
