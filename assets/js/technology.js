const tabs = document.getElementById('techDots');
const btns = tabs.querySelectorAll(".dot");

const techName = document.getElementById('techName');
const techText = document.getElementById('techText');
const techImageDesk = document.getElementById('source-desk');
const techImageMobile = document.getElementById('source-mobile');

const data = {
  dot1: {
    name: 'Launch Vehicle',
    text: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth&#39;s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it&#39;s quite an awe-inspiring sight on the launch pad!',
    deskImg: 'assets/images/technology/image-launch-vehicle-portrait.jpg',
    mobileImg: 'assets/images/technology/image-launch-vehicle-landscape.jpg',
    alt: 'Soyuz Rocket blasting off',
  },
  dot2: {
    name: 'Spaceport',
    text: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    deskImg: 'assets/images/technology/image-spaceport-portrait.jpg',
    mobileImg: 'assets/images/technology/image-spaceport-landscape.jpg',
    alt: 'Soyuz Rocket blasting off',
  },
  dot3: {
    name: 'Space Capsule',
    text: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth&#39;s atmosphere without wings. Our capsule is where you&#39;ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.',
    deskImg: 'assets/images/technology/image-space-capsule-portrait.jpg',
    mobileImg: 'assets/images/technology/image-space-capsule-landscape.jpg',
    alt: 'Soyuz Rocket blasting off',
  },
};

// Toggle Active Dot
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btns.forEach(d => d.classList.remove('active'));
    e.target.classList.add("active");
    
    const id = e.target.id;
    if (data[id]) {
      techName.textContent = data[id].name;
      techText.textContent = data[id].text;
      techImageDesk.srcset = data[id].deskImg;
      techImageMobile.src = data[id].mobileImg;
      techImageMobile.alt = data[id].alt;
    }
  });
});

// Set Initial Active Dot and content
document.getElementById('dot1').click();
