// getting all elements into the pages

const buttons = document.querySelectorAll("h1 button");
const description = document.querySelectorAll("dd");

description[2].classList.add("acordion--active");
buttons[2].classList.add("active");

const openAcord = (event, i) => {
  document.querySelector(".active")?.classList.remove("active");
  event.target.classList.add("active");
  description.forEach((descript) =>
    descript.classList.remove("acordion--active")
  );
  description[i].classList.add("acordion--active");
};
buttons.forEach((btn, i) =>
  btn.addEventListener("click", (event) => openAcord(event, i))
);
