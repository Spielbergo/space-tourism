const tabs = document.getElementById('techDots');
const btns = tabs.querySelectorAll(".dot");

const dot1 = document.getElementById('dot1');
const dot2 = document.getElementById('dot2');
const dot3 = document.getElementById('dot3');

const techName = document.getElementById('techName');
const techTitle = document.getElementById('techPosition');
const techText = document.getElementById('techText');
const techImage = document.getElementById('techImage');
const techImageDesk = document.getElementById('source-desk');
const techImageMobile = document.getElementById('source-mobile');

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
techName.textContent = 'Launch Vehicle';
techText.textContent = 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth&#39;s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it&#39;s quite an awe-inspiring sight on the launch pad!';
techImageDesk.srcset = 'assets/images/technology/image-launch-vehicle-portrait.jpg';
techImageMobile.src = 'assets/images/technology/image-launch-vehicle-landscape.jpg';
techImageMobile.alt = 'Soyuz Rocket blasting off';

// Dots
// 1 - Moon
dot1.addEventListener('click', () => {
  techName.textContent = 'Launch Vehicle';
  techText.textContent = 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth&#39;s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it&#39;s quite an awe-inspiring sight on the launch pad!';
  techImageDesk.srcset = 'assets/images/technology/image-launch-vehicle-portrait.jpg';
  techImageMobile.src = 'assets/images/technology/image-launch-vehicle-landscape.jpg';
  techImageMobile.alt = 'Soyuz Rocket blasting off';
});

// 2 - Mars
dot2.addEventListener('click', () => {
  techName.textContent = 'Spaceport';
  techText.textContent = 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.';
  techImageDesk.srcset = 'assets/images/technology/image-spaceport-portrait.jpg';
  techImageMobile.src = 'assets/images/technology/image-spaceport-landscape.jpg';
  techImageMobile.alt = 'Soyuz Rocket blasting off';
});

// 3 - Europa
dot3.addEventListener('click', () => {
  techName.textContent = 'Space Capsule';
  techText.textContent = 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth&#39;s atmosphere without wings. Our capsule is where you&#39;ll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.';
  techImageDesk.srcset = 'assets/images/technology/image-space-capsule-portrait.jpg';
  techImageMobile.src = 'assets/images/technology/image-space-capsule-landscape.jpg';
  techImageMobile.alt = 'Soyuz Rocket blasting off';
});
