/* Menu */
const bgMenuBtn = document.querySelector('#bg-menu-btn');
const menuContainer = document.querySelector('.menu-container');
const menuTabClose = document.querySelector('.menu-tab-close');
const arrowClose = document.querySelector('#arrowClose');
const arrowClose2 = document.querySelector('#arrowClose2');

bgMenuBtn.addEventListener('click', () => {
  menuContainer.style.display = 'block';
  menuContainer.style.position = 'fixed';
});

menuTabClose.addEventListener('click', () => {
  menuContainer.style.display = 'none';
});

arrowClose.addEventListener('click', () => {
  menuContainer.style.display = 'none';
});

arrowClose2.addEventListener('click', () => {
  menuContainer.style.display = 'none';
});

/* Dynamic Html */
const talkers = [
  {
    photo: 'photos/person-icon.png',
    name: 'Ruben Arnoldi',
    occupation: 'Software Engineer',
    message: 'He travel around the world looking for some people that make the thins possible.',
  },
  {
    photo: 'photos/person-icon.png',
    name: 'Rosío Rosco',
    occupation: 'Full Stack',
    message: 'Working since she was a child in a deep programming language like assembler and C language.',
  },
  {
    photo: 'photos/person-icon.png',
    name: 'Alberto Rockefeller',
    occupation: 'Web Development',
    message: 'Starting his new company in the market like one of the most bigger entusiastic men in the world.',
  },
  {
    photo: 'photos/person-icon.png',
    name: 'Mario Rothschild',
    occupation: 'Software Developer',
    message: 'Mario is a leader and interprenaur. He likes to hired people around the world',
  },
  {
    photo: 'photos/person-icon.png',
    name: 'Esteban Antenna',
    occupation: 'Engineer',
    message: 'He is encourage people to find all kinds of solutions in his country and all around the world',
  },
  {
    photo: 'photos/person-icon.png',
    name: 'Omar Caspio',
    occupation: 'Software Engineer',
    message: 'Leader of his own company he likes to talk with his employees to know what kind of people is working in his company.',
  },
];

const featureSpeakers = document.querySelector('#feature-speakers-container');

const divHeaderSection = document.createElement('div');
const header1 = document.createElement('h1');
const divRedLine = document.createElement('div');

divHeaderSection.className = 'divHeader';
featureSpeakers.appendChild(divHeaderSection);

header1.className = 'header1';
header1.textContent = 'Feature Speakers';
divHeaderSection.appendChild(header1);

divRedLine.className = 'divRedLine';
divHeaderSection.appendChild(divRedLine);

const divSpeakers = document.createElement('div');
divSpeakers.className = 'divSpeakers';
featureSpeakers.appendChild(divSpeakers);

for (let i = 0; i < talkers.length; i += 1) {
  const divSpeaker = document.createElement('div');
  const imgSpeaker = document.createElement('img');
  const speakerInfo = document.createElement('div');
  const divh1 = document.createElement('h1');
  const divh2 = document.createElement('h2');
  const grayLine = document.createElement('div');
  const paragraph = document.createElement('p');

  divSpeaker.className = 'divSpeaker';
  divSpeakers.appendChild(divSpeaker);

  imgSpeaker.className = 'imgSpeaker';
  imgSpeaker.src = `${talkers[i].photo}`;
  imgSpeaker.alt = 'speaker-photo';
  divSpeaker.appendChild(imgSpeaker);

  speakerInfo.className = 'speakerInfo';
  divSpeaker.appendChild(speakerInfo);

  divh1.className = 'divh1';
  divh1.textContent = `${talkers[i].name}`;
  speakerInfo.appendChild(divh1);

  divh2.className = 'divh2';
  divh2.textContent = `${talkers[i].occupation}`;
  speakerInfo.appendChild(divh2);

  grayLine.className = 'grayLine';
  speakerInfo.appendChild(grayLine);

  paragraph.className = 'paragraph';
  paragraph.textContent = `${talkers[i].message}`;
  speakerInfo.appendChild(paragraph);

  if (i > 1) {
    divSpeaker.classList.add('target');
  }
}

// Here we create our button and the id 'toggle-button' for the same.
// We add an innerHtml to the same to set our arrow icon. Then we appendix all.
const seeMoreBtn = document.createElement('button');
seeMoreBtn.id = 'toggle-button';
seeMoreBtn.innerHTML = 'More <i class="fas fa-chevron-down"></i>';
featureSpeakers.appendChild(seeMoreBtn);

/* Start to apply the instructions in the function */
function toggle(elements, specifiedDisplay) {
  let element;
  let index;

  // With this function we compared if the value of the display is equal to none.
  function isElementHidden(element) {
    return window.getComputedStyle(element, null).getPropertyValue('display') === 'none';
  }

  // elements = elements.length ? elements : [elements];
  for (index = 0; index < elements.length; index += 1) {
    element = elements[index];

    // Here we call the the function "isElementHidden" to return true or false.
    // If false we set display empty with single quotes.
    if (isElementHidden(element)) {
      element.style.display = '';

      // If the element is still hidden after removing.
      if (isElementHidden(element)) {
        element.style.display = specifiedDisplay || 'inherit';
      }
    } else {
      element.style.display = 'none';
    }
  }

  if (seeMoreBtn.innerHTML === 'More <i class="fas fa-chevron-down"></i>') {
    seeMoreBtn.innerHTML = 'Less <i class="fas fa-chevron-up"></i>';
  } else {
    seeMoreBtn.innerHTML = 'More <i class="fas fa-chevron-down"></i>';
  }
}

/* We've create and select all the class "target" we have added before */
document.getElementById('toggle-button').addEventListener('click', () => {
  toggle(document.querySelectorAll('.target'));
});