const tabs = document.getElementById('destinationTabs');
const btns = tabs.querySelectorAll(".tab");

const planetImage = document.getElementById('planetImage');
const planetTitle = document.getElementById('planetTitle');
const planetText = document.getElementById('planetText');
const stats1 = document.getElementById('stats1');
const stats2 = document.getElementById('stats2');

const data = {
  tab1: {
    title: 'Moon',
    imgSrc: 'assets/images/destination/image-moon.webp',
    alt: 'Moon',
    text: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
    stat1: '384,400 KM',
    stat2: '3 Days'
  },
  tab2: {
    title: 'Mars',
    imgSrc: 'assets/images/destination/image-mars.webp',
    alt: 'Mars',
    text: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    stat1: '225 MIL. KM',
    stat2: '9 Months'
  },
  tab3: {
    title: 'Europa',
    imgSrc: 'assets/images/destination/image-europa.webp',
    alt: 'Europa',
    text: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    stat1: '628 MIL. KM',
    stat2: '3 Years'
  },
  tab4: {
    title: 'Titan',
    imgSrc: 'assets/images/destination/image-titan.webp',
    alt: 'Titan',
    text: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    stat1: '1.6 BIL. KM',
    stat2: '7 Years'
  },
};

// Toggle Active Tab and Set Tab Content
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btns.forEach(t => t.classList.remove('active'));
    e.target.classList.add("active");
    
    const id = e.target.id;
    if (data[id]) {
      planetTitle.textContent = data[id].title;
      planetImage.src = data[id].imgSrc;
      planetImage.alt = data[id].alt;
      planetText.textContent = data[id].text;
      stats1.textContent = data[id].stat1;
      stats2.textContent = data[id].stat2;
    }
  });
});

// Set Initial Active Tab and content
document.getElementById('tab1').click();