// Show and hide navigation menu on mobile devices
const toggleNav = () => {
  // Select DOM
  const header = document.querySelector("#header");
  const toggleButton = document.querySelector("#toggle-button");

  toggleButton.addEventListener("click", () => {
    header.classList.toggle("show-menu");
    document.body.classList.toggle("no-scroll");
  });
};

toggleNav();
