const links = document.querySelectorAll(".moving-link");
let currentIndex = 0;

setInterval(() => {
  links.forEach((link, index) => {
    if (index === currentIndex) {
      link.style.display = "inline-block";
    } else {
      link.style.display = "none";
    }
  });
  currentIndex = (currentIndex + 1) % links.length;
}, 5000); // update every 5 seconds