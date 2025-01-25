const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const response = document.querySelector("p");


btn1.addEventListener("click", () => {
  // Code à exécuter lorsque btn1 est cliqué
  // Console.log( "click sur le bouton") ;
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

    // console.log(e.pageX);
    
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

  // Dépréciation : L'événement keypress est déprécié dans les versions récentes de JavaScript. Il est recommandé d'utiliser keydown ou keyup à la place.

// Propriétés de l'événement :

// event.key : Renvoie la valeur de la touche pressée.
// event.code : Renvoie le code physique de la touche.
// Alternatives
// keydown : Détecte quand une touche est enfoncée.
// keyup : Détecte quand une touche est relâchée.
// Exemple avec keydown

document.addEventListener('keydown', function(event) {
    // console.log('Touche enfoncée :', event.key);
});

// Keydown event

const KeydownContainer = document.querySelector(".Keydown");
// console.log(KeydownContainer);
// window.addEventListener("keydown", (e)=>{
//   console.log(e);

document.addEventListener("keydown", (e) => {
  // console.log(e);
  // console.log(e.key)
  key.textContent = e.key;

  if (e.key === "j") {
  KeydownContainer.style.background = "pink";
  } else if (e.key === "h") {
  KeydownContainer.style.background = "teal";
  } else {
  KeydownContainer.style.background = "red";
  }
  });

const menu = document.querySelector("#menu");
// console.log(menu);

  window.addEventListener("scroll",
    () => {
    // console.log(window.scrollY);
    if (window.scrollY > 425) {
      menu.style.top = 0;
    }else{
      menu.style.top = "-50px";
      menu.style.visibility = "visible";

    }
});

//  Formulaire 
const inputName= document.querySelector("input[type='text']");
const inputSelect = document.querySelector("select");
const form = document.querySelector("form");
const userName = document.querySelector("#userName");
const langage = document.querySelector("#langage");
let lang ;
let user;
 inputName.addEventListener("input", (e) => {
   user = e.target.value;
  // userName.textContent = e.target.value;
  // userName.innerHTML = `
  //                       <div style="color:yellow">
  //                          ${ e.target.value}
  //                        </div>
  //                       `;
 })

 inputSelect.addEventListener("input", (e) => {
     lang = e.target.value;
  // langage.textContent = e.target.value;
 })

 const cgu = document.querySelector("#cgu");
//  console.log(cgu);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (cgu.checked){
  alert(`Merci ${user} pour votre selection du langage ${lang}`);
  }else{
    alert("Veuilez acceptez les CGU");
  }
});

// Load event

const image = document.getElementById("image");
// console.log(image);

function loadResouce() {
  // console.log("Page entièrement chargée");
}

window.addEventListener("load", loadResouce);

// image.addEventListener('load', () => console.log('Image chargée'))

//blur event : Se produit lorsqu'un élément perd le focus.

document.getElementById('inpute').addEventListener('blur', function() {
  this.style.backgroundColor ='red'
})


//focus event : Se produit lorsqu'un élément obtient le focus.

const inputNom =document.getElementById('nom')

 inputNom.addEventListener('focus', function(){
   inputNom.classList.add('green')
 })
 inputNom.addEventListener('blur', function(){
   inputNom.classList.remove('green')

 })

    // Ajoute un écouteur d'événement 'focus' au champ de saisie
   

    // Ajoute un écouteur d'événement 'blur' au champ de saisie
    

    //ForEach
   
const boxes =document.querySelectorAll('.box')
// console.log(boxes);

boxes.forEach((box) =>{
  box.addEventListener('click', (e)=>{
    // console.log(e.target);
    e.target.style.transform= 'scale(0.5)'
    
  })
})


    //BOM
    // Le BOM (Browser Object Model) en JavaScript est une interface qui permet d’interagir avec le navigateur. Contrairement au DOM (Document Object Model) qui gère la structure et le contenu d’une page HTML, le BOM concerne tout ce qui est lié au navigateur, comme la fenêtre, l’historique, l’emplacement (URL), et d’autres fonctionnalités.

// 1- window

// console.log(window.innerWidth) // Largeur de la fenêtre visible;

console.log(window.innerHeight); // Hauteur de la fenêtre visible

// window.alert('Hello world')

// 2. document
// •  Bien que le document soit techniquement lié au DOM, il fait partie de l’objet window dans le BOM.

console.log(window.document.title) // Titre de la page;
// 3. navigator
// •	Fournit des informations sur le navigateur et l'environnement de l'utilisateur.
// •	Principales propriétés :
// o	userAgent : Chaîne identifiant le navigateur.
// o	language : Langue préférée de l'utilisateur.
// o	onLine : Vérifie si l'utilisateur est connecté.
// •	Exemple :
console.log(navigator.userAgent);
console.log(navigator.language);
console.log(navigator.onLine);

// 4. location : URL de la page
// •	Donne des informations sur l'URL actuelle et permet de rediriger ou manipuler l'URL.
// •	Principales propriétés :
console.log(location.href);

Location.href = 'https://www.google.com';

console.log(location.hostname);
console.log(location.pathname);

// history : Navigation dans l'historique
// •	Permet de naviguer dans l’historique de navigation du navigateur.
// •	Principales méthodes :
// o	back() : Revient à la page précédente.
// o	forward() : Avance à la page suivante.
// o	go(n) : Déplace de n pages (positif ou négatif).
// o	length : Nombre d’entrées dans l’historique.
// •	Exemple :

// console.log(history.back());
history.forward()
console.log('Tentative de navigation en avant');

//Nombre d'entrées dans l'historique
console.log(history.length);

//  history.back(); // Revient à la page précédente
// 6. screen
// •	Donne des informations sur l'écran de l'utilisateur.
// •	Principales propriétés :
// o	width : Largeur totale de l'écran.
// o	height : Hauteur totale de l'écran.
// o	availWidth : Largeur disponible (sans barre des tâches).
// o	availHeight : Hauteur disponible.
// •	Exemple :
console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth );
console.log(screen.availHeight); 


// 7. Méthodes pratiques dans le BOM


// •	Dialogues :
//      	alert(message) : Affiche une alerte.
//      confirm(message) : Demande une confirmation (retourne true ou false).
//      prompt(message) : Demande une entrée utilisateur.
// o	Exemple :
// const name = prompt('Quel est votre nom ?');
// alert('Bonjour ' + name + ' !');










