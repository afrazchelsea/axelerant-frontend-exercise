const navSlide = () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".links");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
};

navSlide();
