// Create variables targetting the relevant DOM elements here 👇
let coverImage = document.querySelector('.cover-image');
let coverTitle = document.querySelector('.cover-title');
let taglineOne = document.querySelector('.tagline-1');
let taglineTwo = document.querySelector('.tagline-2');

let homeButton = document.querySelector('.home-button');
let randomCoverButton = document.querySelector('.random-cover-button');
let makeNewButton = document.querySelector('.make-new-button');
let saveCoverButton = document.querySelector('.save-cover-button');
let viewSavedButton = document.querySelector('.view-saved-button');

let homeView = document.querySelector('.home-view')
let formView = document.querySelector('.form-view')
let savedView = document.querySelector('.saved-view')

// We've provided a few variables below
let savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

let currentCover;

// Add your event listeners here 👇
document.addEventListener('DOMContentLoaded', handleLoad);
randomCoverButton.addEventListener('click', handleRandomCoverButtonClick);
makeNewButton.addEventListener('click', handleMakeNewButtonClick);
viewSavedButton.addEventListener('click', handleViewSavedButtonClick);
homeButton.addEventListener('click', handleHomeButtonClick);

// Create your event handlers and other functions here 👇
function handleLoad() {
  coverImage.src = getRandomCoverImage();
  coverTitle.innerText = getRandomCoverTitle();
  taglineOne.innerText = getRandomDescriptor();
  taglineTwo.innerText = getRandomDescriptor();
}

function handleRandomCoverButtonClick() {
  generateNewCover();

  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  taglineOne.innerText = currentCover.tagline1;
  taglineTwo.innerText = currentCover.tagline2;
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
}

function handleHomeButtonClick() {
  homeButton.classList.add('hidden');
  formView.classList.add('hidden');
  savedView.classList.add('hidden');

  homeView.classList.remove('hidden');
  randomCoverButton.classList.remove('hidden');
  saveCoverButton.classList.remove('hidden');
}

// Helper functions
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
