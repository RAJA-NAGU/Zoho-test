const headerSection = document.querySelector(".header");
window.addEventListener("scroll", () => {
  let scrollY = window.scrollY;
  console.log(window.scrollY);
  if (scrollY > 200) {
    headerSection.classList.add("sticky");
  } else {
    headerSection.classList.remove("sticky");
  }
});
