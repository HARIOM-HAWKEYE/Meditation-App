
//*****************************HEADER*********************** */
/*----Welcome Selection----------*/
const greetings = document.querySelector('.greeting');
const partsOfTheDayBox = document.querySelector('.partsOfTheDayBox');
const messageBox = document.querySelector('.messageBox');
const name = document.querySelector('.name');
const penDesign = document.querySelector('.penDesign');

/*----Tabbed Button Selection----------*/

const buttonContainer = document.querySelector('.button-container');
const tabButton= document.querySelectorAll('.tab-button'); 
const contentContainer= document.querySelectorAll('.content-container');

/*----Welcome Function----------*/
const now = new Date();
const nowHour = now.getHours();


if (nowHour >= 7 && nowHour < 12) {
  greetings.innerHTML = `Good Morning <span class="partsOfTheDayBox"></span>`;
   
} else if (nowHour >= 12 && nowHour < 17) {
  greetings.innerHTML = `Good Afternoon <span class="partsOfTheDayBox"></span>`;
 
  
} else if (nowHour >= 17 && nowHour < 22) {
  greetings.innerHTML = `Good Evening <span class="partsOfTheDayBox"></span>`;

} else {
  greetings.innerHTML = `Good Night <span class="partsOfTheDayBox"></span>`;
}


function getName(){

    if(localStorage.getItem('myName') === null || localStorage.getItem('myName')==null ){

        name.innerHTML = "Enter Your Name";
    }else{
        name.innerHTML = localStorage.getItem('myName'); 
    }


}
function setName(){
const nameInput = prompt("enter your name");

if (nameInput !== null && nameInput.trim() !== "") {
  localStorage.setItem("myName", nameInput);
  name.innerHTML = nameInput; 
}
}
penDesign.addEventListener('click',setName);


getName();

const message = [
    "You matter.",
    "You're awesome!",
    "You did great today!",
    "I believe in you!",
    "You are loved!",
    "You are worthy.",
    "Keep going!",
    "I love you!",
    "Make it happen.",
    "Be a light.",
    "Know your worth.",
    "Things will get better",
    "Be good. Do good.",
    "Follow your heart.",
    "Stay hopeful!",
    "You are strong!",
    "Protect your peace.",
    "Be still.",
    "You are beautiful!",
    "Keep on fighting!",
  ];

  let count=0;
  let messageIndex=0;
  

  const messageDisplay = function(){

    if(messageIndex<message[count].length){
  messageBox.innerHTML += message[count].charAt(messageIndex);
   messageIndex++;
   setTimeout(messageDisplay,100);


    }else{
        setTimeout(()=>{ messageIndex=0;
            count++;
            if(count===message.length) count=0;
            messageBox.innerHTML='';
            messageDisplay();},2000);
       
    }
  }

messageDisplay();



/*----Tabbed Button Function----------*/

buttonContainer.addEventListener('click' ,(e)=>{
    
   const clicked = e.target.closest('.tab-button');
   if(!clicked) return;

   tabButton.forEach((t)=>{
    t.classList.remove('tab-button--active');
   });
   clicked.classList.add('tab-button--active');
   contentContainer.forEach((t)=>{
    t.classList.remove('content-container--active');
   });
   document.querySelector(`.content-container-${clicked.dataset.tab}`).classList.add('content-container--active');

});