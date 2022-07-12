const tabs = document.getElementById('crewDots');
const btns = tabs.querySelectorAll(".dot");

const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');
const dot4 = document.getElementById('dot4');

const crewName = document.getElementById('crewName');
const crewTitle = document.getElementById('crewPosition');
const crewText = document.getElementById('crewText');
const crewImage = document.getElementById('crewImage');

// Toggle Active Dot
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btns.forEach(d => d.classList.remove('active'));
    e.target.classList.toggle("active");
  });
});

// Set Initial Active Dot
dot1.classList.add("active");

// Set Initial Text and Image
crewTitle.textContent = 'Commander';
crewName.textContent = 'Douglas Hurley';
crewImage.src = 'assets/images/crew/image-douglas-hurley.webp';
crewImage.alt = 'A very happy Commander Douglas Hurley';
crewImage.width = "177.12";
crewImage.height = '222';
crewText.textContent = 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.';

// Dots
// 1 - Commander Hurley
dot1.addEventListener('click', () => {
  crewTitle.textContent = 'Commander';
  crewName.textContent = 'Douglas Hurley';
  crewImage.src = 'assets/images/crew/image-douglas-hurley.webp';
  crewImage.alt = 'A very happy Commander Douglas Hurley';
  crewImage.width = '514';
  crewImage.height = '700';
  crewText.textContent = 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.';
});

// 2 - Mission Specialist Shuttleworth
dot2.addEventListener('click', () => {
  crewTitle.textContent = 'Mission Specialist ';
  crewName.textContent = 'Mark Shuttleworth';
  crewImage.src = 'assets/images/crew/image-mark-shuttleworth.webp';
  crewImage.alt = 'Mark Shuttleworth speaking in a microphone';
  crewImage.width = '433';
  crewImage.height = '640';
  crewText.textContent = 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.';
});

// 3 - Pilot Glover
dot3.addEventListener('click', () => {
  crewTitle.textContent = 'Pilot';
  crewName.textContent = 'Victor Glover';
  crewImage.src = 'assets/images/crew/image-victor-glover.webp';
  crewImage.alt = 'An image of a smiling Victor Glover';
  crewImage.width = '549';
  crewImage.height = '645';
  crewText.textContent = 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ';
});

// 4 - Flight Engineer Ansari
dot4.addEventListener('click', () => {
  crewTitle.textContent = 'Flight Engineer';
  crewName.textContent = 'Anousheh Ansari';
  crewImage.src = 'assets/images/crew/image-anousheh-ansari.webp';
  crewImage.alt = 'Anousheh Ansari speaking in a microphone';
  crewImage.width = '575';
  crewImage.height = '602';
  crewText.textContent = 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ';
});