// Create variables targetting the relevant DOM elements here 👇
const coverImage = document.querySelector('.cover-image');
const coverTitle = document.querySelector('.cover-title');
const taglineOne = document.querySelector('.tagline-1');
const taglineTwo = document.querySelector('.tagline-2');

const homeButton = document.querySelector('.home-button');
const randomCoverButton = document.querySelector('.random-cover-button');
const makeNewButton = document.querySelector('.make-new-button');
const saveCoverButton = document.querySelector('.save-cover-button');
const viewSavedButton = document.querySelector('.view-saved-button');
const createNewBookButton = document.querySelector('.create-new-book-button');

const homeView = document.querySelector('.home-view');
const formView = document.querySelector('.form-view');
const savedView = document.querySelector('.saved-view');

const savedCoverSection = document.querySelector('.saved-covers-section')

const formData = document.querySelectorAll('form input');

// We've provided a few variables below
let savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

let currentCover;

// Add your event listeners here 👇
document.addEventListener('DOMContentLoaded', handleLoad);
homeView.addEventListener('onload', handleHomeViewLoad)
randomCoverButton.addEventListener('click', handleRandomCoverButtonClick);
makeNewButton.addEventListener('click', handleMakeNewButtonClick);
viewSavedButton.addEventListener('click', handleViewSavedButtonClick);
homeButton.addEventListener('click', handleHomeButtonClick);
createNewBookButton.addEventListener('click', handleCreateNewBookButtonClick);

// Create your event handlers and other functions here 👇
function handleLoad() {
  coverImage.src = getRandomCoverImage();
  coverTitle.innerText = getRandomCoverTitle();
  taglineOne.innerText = getRandomDescriptor();
  taglineTwo.innerText = getRandomDescriptor();
}

function handleHomeViewLoad() {
  displayCurrentCover()
}

function handleRandomCoverButtonClick() {
  generateNewCover();
  displayCurrentCover()
}

function handleMakeNewButtonClick() {
  homeView.classList.add('hidden');
  savedView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');

  formView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
}

function handleViewSavedButtonClick() {
  homeView.classList.add('hidden');
  formView.classList.add('hidden');
  randomCoverButton.classList.add('hidden');
  saveCoverButton.classList.add('hidden');

  savedView.classList.remove('hidden');
  homeButton.classList.remove('hidden');
  viewSavedCovers();
}

function handleHomeButtonClick() {
  homeButton.classList.add('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');

  homeView.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');

  displayCurrentCover()
}

function handleCreateNewBookButtonClick() {
  const inputs = [...formData].reduce((object, input) => ({ ...object, [input.id]: input.value }), {}) 

  covers.push(inputs.cover)
  titles.push(inputs.title)
  descriptors.push(inputs.descriptor1, inputs.descriptor2)

  const newCover = new Cover(inputs.cover, inputs.title, inputs.descriptor1, inputs.descriptor2)
  savedCovers.push(newCover)

  currentCover = newCover

  handleHomeButtonClick()
}

function displayCurrentCover() {
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  taglineOne.innerText = currentCover.tagline1;
  taglineTwo.innerText = currentCover.tagline2;
}

// Helper functions
function viewSavedCovers() {
  for (let i = 0; i < savedCovers.length; i++) {
    let elementExists = document.getElementById(`cover${i}`)

    if(elementExists) { continue }

    savedCoverSection.innerHTML += `
      <div class="mini-cover" id="cover${i}">
        <img class="cover-image" src="${savedCovers[i].cover}">
        <h2 class="cover-title">${savedCovers[i].title}</h2>
        <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
      </div>
    ` 
  }
}

function generateNewCover() {
  currentCover = new Cover(getRandomCoverImage(), getRandomCoverTitle(), getRandomDescriptor(), getRandomDescriptor()) 
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function getRandomCoverImage() {
  let index = getRandomIndex(covers);

  return covers[index];
}

function getRandomCoverTitle() {
  let index = getRandomIndex(titles);

  return titles[index];
}

function getRandomDescriptor() {
  let index = getRandomIndex(descriptors);

  return descriptors[index];
}
