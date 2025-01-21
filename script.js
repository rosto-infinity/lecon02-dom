const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const response = document.querySelector("p");


btn1.addEventListener("click", () => {
  // Code à exécuter lorsque btn1 est cliqué
  Console.log( "click sur le bouton") ;
  });

  questionContainer.addEventListener("click", () => {
    questionContainer.classList.toggle('question-click')
    });

    btn1.addEventListener("click", () => {
      btn1.style.background = 'green';
      response.style.background = 'green';
      response.classList.add('show-response');
      });

      btn2.addEventListener("click", () => {
        btn2.style.background = 'red';
        response.style.background = 'red';
        response.classList.add('show-response');
        });


        //------mousemove-----

const mousemove = document.querySelector('.mousemove');
window.addEventListener('mousemove',
  (e) => {

    console.log(e.pageX);
    
   mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
  });

 


