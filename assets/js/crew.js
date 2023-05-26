const tabs = document.getElementById('crewDots');
const btns = tabs.querySelectorAll(".dot");

const crewName = document.getElementById('crewName');
const crewTitle = document.getElementById('crewPosition');
const crewText = document.getElementById('crewText');
const crewImage = document.getElementById('crewImage');

const data = {
  dot1: {
    title: 'Commander',
    name: 'Douglas Hurley',
    imgSrc: 'assets/images/crew/image-douglas-hurley.webp',
    alt: 'A very happy Commander Douglas Hurley',
    width: '514',
    height: '700',
    text: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
  },
  dot2: {
    title: 'Mission Specialist',
    name: 'Mark Shuttleworth',
    imgSrc: 'assets/images/crew/image-mark-shuttleworth.webp',
    alt: 'Mark Shuttleworth speaking in a microphone',
    width: '433',
    height: '640',
    text: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
  },
  dot3: {
    title: 'Pilot',
    name: 'Victor Glover',
    imgSrc: 'assets/images/crew/image-victor-glover.webp',
    alt: 'An image of a smiling Victor Glover',
    width: '549',
    height: '645',
    text: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
  },
  dot4: {
    title: 'Flight Engineer',
    name: 'Anousheh Ansari',
    imgSrc: 'assets/images/crew/image-anousheh-ansari.webp',
    alt: 'Anousheh Ansari speaking in a microphone',
    width: '575',
    height: '602',
    text: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
  },
};

// Toggle Active Dot and Set Dot Content
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btns.forEach(d => d.classList.remove('active'));
    e.target.classList.add("active");

    const id = e.target.id;
    if (data[id]) {
      crewTitle.textContent = data[id].title;
      crewName.textContent = data[id].name;
      crewImage.src = data[id].imgSrc;
      crewImage.alt = data[id].alt;
      crewImage.width = data[id].width;
      crewImage.height = data[id].height;
      crewText.textContent = data[id].text;
    }
  });
});

// Set Initial Active Dot and content
document.getElementById('dot1').click();
