// Create variables targetting the relevant DOM elements here 👇
let coverImage = document.querySelector('.cover-image');
let coverTitle = document.querySelector('.cover-title');
let taglineOne = document.querySelector('.tagline-1');
let taglineTwo = document.querySelector('.tagline-2');


// We've provided a few variables below
let savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
let currentCover;

// Add your event listeners here 👇
document.addEventListener('DOMContentLoaded', handleLoad)

// Create your event handlers and other functions here 👇
function handleLoad() {
  coverImage.src = getRandomCoverImage();
  coverTitle.innerText = getRandomCoverTitle();
  taglineOne.innerText = getRandomDescriptor();
  taglineTwo.innerText = getRandomDescriptor();
}

// We've provided one function to get you started
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
