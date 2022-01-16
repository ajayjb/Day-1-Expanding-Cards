const images = document.querySelectorAll(".panel");

const expansionRemover = () => {
  images.forEach((item) => {
    item.classList.remove("active");
  });
};

images.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});
