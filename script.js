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

  //------mousedown --------
window.addEventListener('mousedown',
  () => {
  mousemove.style.transform = "scale(3) translate(-25%, -25%)";
  });

  //---------mouseup --------
window.addEventListener('mouseup',
  () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});

//-------mouseenter -------
questionContainer.addEventListener(
"mouseenter", () => {
questionContainer.style.background = "pink";
});

//------------mouseout ------
questionContainer.addEventListener(
  "mouseout", () => {
  questionContainer.style.background = "rgba(0,0,0,0.3)";
  });

  //-------------mouseover -------
response.addEventListener('mouseover',
  () => {
  response.style.transform = "rotate(1deg)";
  });