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

const navTab = document.querySelector('.tab--nav')
const tabSection = document.querySelectorAll('.painel')
const init = function(){
  // Getting All Elements into the Dom page
  const activeTab = function(element,index){
    element.addEventListener('click',function(event){
    tabSection.forEach(tab => tab.classList.remove('active'))
    document.querySelector('[data-menu="tab"] li.active')?.classList.remove('active')
    console.log(event.currentTarget.querySelector('.row'))
    console.log(event.currentTarget.classList.toggle('active'),index)
    tabSection[index].classList.toggle('active')
  })
}
  const listTab = document.querySelectorAll('.tab--nav li')
  listTab[0].classList.add('active')
    listTab.forEach((element,index) => activeTab(element,index))



}



if(navTab && tabSection.length){
  init()
}

