let website = document.body;
let container = document.getElementById("flex-container");

// retrieve the data in your JSON file and save it as a variable
let collection;
fetch("./collection.json")
  .then((response) => response.json())
  .then((json) => {
    (collection = json), renderTemplate();
  });

function renderTemplate() {
  // create a string where your dynamic HTML will be stored
  let html = "";

  for (let item of collection.molds) {
    html +=
      // this is where you define you template
      `<div class="child">
              <nam class="name"> ${item.name} </nam>
              <nam class="dutch"> ${item.dutch} </nam> 
              <br> <dat> ${item.date} </dat>
              <br><img src= "${item.imageURL}" />
            </div>`;
  }

  // insert the dynamic HTML in the website!
  container.innerHTML = html;
};

const moldyWorld = document.querySelector('#flex-container');



moldyWorld.addEventListener('click', (event) => {
  const clickedChild = event.target.closest('.child');

  if (clickedChild) {
    let text = clickedChild.querySelector('.text');
    if (!text) {
      text = document.createElement('div');
      text.classList.add('text');
      text.innerHTML = '<b>Do you want to grow this mold?</b> <br>Just let them alone in somewhere for a few weeks...';
      
      clickedChild.appendChild(text);
    } else {
      clickedChild.removeChild(text);
    }
  }
});