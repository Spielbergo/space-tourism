const tabs = document.getElementById('destinationTabs');
const btns = tabs.querySelectorAll(".tab");

const tab1 = document.getElementById('tab1');
const tab2 = document.getElementById('tab2');
const tab3 = document.getElementById('tab3');
const tab4 = document.getElementById('tab4');

const planetImage = document.getElementById('planetImage');
const planetTitle = document.getElementById('planetTitle');
const planetText = document.getElementById('planetText');
const stats1 = document.getElementById('stats1');
const stats2 = document.getElementById('stats2');

// Toggle Active Tab
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btns.forEach(t => t.classList.remove('active'));
    e.target.classList.toggle("active");
  });
});

// Set Initial Active Tab
tab1.classList.add("active");

// Set Initial Text and Image
planetTitle.textContent = 'Moon';
planetImage.src = 'assets/images/destination/image-moon.png';
planetText.textContent = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
stats1.textContent = '384,400 KM';
stats2.textContent = '3 Days'

// Tabs
// 1 - Moon
tab1.addEventListener('click', () => {
  planetTitle.textContent = 'Moon';
  planetImage.src = 'assets/images/destination/image-moon.png';
  planetText.textContent = 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.';
  stats1.textContent = '384,400 KM';
  stats2.textContent = '3 Days';
});

// 2 - Mars
tab2.addEventListener('click', () => {
  planetTitle.textContent = 'Mars';
  planetImage.src = 'assets/images/destination/image-mars.png';
  planetText.textContent = 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!';
  stats1.textContent = '225 MIL. KM';
  stats2.textContent = '9 Months';
});

// 3 - Europa
tab3.addEventListener('click', () => {
  planetTitle.textContent = 'Europa';
  planetImage.src = 'assets/images/destination/image-europa.png';
  planetText.textContent = 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.';
  stats1.textContent = '628 MIL. KM';
  stats2.textContent = '3 Years';
});

// 4 - Titan
tab4.addEventListener('click', () => {
  planetTitle.textContent = 'Titan';
  planetImage.src = 'assets/images/destination/image-titan.png';
  planetText.src = 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.';
  stats1.textContent = '1.6 BIL. KM';
  stats2.textContent = '7 Years';
});