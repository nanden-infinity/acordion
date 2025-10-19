// getting all elements into the pages

const buttons = document.querySelectorAll("h1 button");
const description = document.querySelectorAll("dd");

description[0].classList.add("acordion--active");
buttons[0].classList.add("active");

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

// const openAcordion = function ( target,index ) {
//   const {target:button} = target
// button.onfocus = (target) => {
//    if(!target){
//         console.log(document.activeElement === target);
//         description[index].classList.toggle("acordion--active");
//    }

//   else{
//     description[index].classList.remove("acordion--active");

//   }
// };
//   const {description} = target
//   button.classList.toggle('active')
//   description[index].classList.toggle("acordion--active");
// };

// buttons.forEach((button,index) => button.addEventListener('click',({target})=>openAcordion({target,description},index,button)))



// description.forEach(descr => descr.classList.remove("acordion--active"));
// const openAccordion = (button, index) => {
//   // alterna a classe ativa no botão
//   button.classList.toggle("active");

//   // alterna a descrição correspondente
//   description[index].classList.toggle("acordion--active");
// };

// // Aplica o evento de clique em todos os botões
// buttons.forEach((button, index) => {
//   button.addEventListener("click", () => openAccordion(button, index));

//   // Quando o botão ganha foco (por teclado, tab, etc.)
//   button.addEventListener("focus", () => {
//     document.querySelector(".acordion--active")?.classList.remove("acordion--active")
//     description[index].classList.add("acordion--active");
//   });

//   // Quando o botão perde foco
//   button.addEventListener("blur", () => {
//     document
//       .querySelector(".acordion--active")
//       ?.classList.remove("acordion--active");
//     description[index].classList.remove("acordion--active");
//   });
// });
