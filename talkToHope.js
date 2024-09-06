const chatboxContainer = document.querySelector('.chatbox-message');
const messagebtn = document.querySelector('.fa-microphone');

function userSayDiv(message){
    
    const userSayContainer = document.createElement('div');
    userSayContainer.className = 'aiResponse flex items-center justify-start my-4';
    userSayContainer.innerHTML=`  <i class="fa-solid fa-circle-user mx-2 text-3xl"></i>
    <div class="userMessage text-xl bg-[#E2BFD9] px-4 py-2 rounded-[50px] "> ${message}</div>
            
            
`;
  return userSayContainer;
}

function aiResponseDiv(message){
    
  const userSayContainer = document.createElement('div');
  userSayContainer.className = 'aiResponse flex items-center justify-end my-4';
  userSayContainer.innerHTML=` <div class="userMessage text-xl bg-[#A1D6B2] px-4 py-2 rounded-[50px] "> ${message}</div>
  <i class="fa-solid fa-headset mx-2 text-3xl"></i>
         
          
`;
return userSayContainer;
}


messagebtn.addEventListener('click',()=>{

console.log("hariom singh");
})

import {allCommand,readOut} from './command.js';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert('Speech Recognition API is not supported in this browser.');
} else {
    const recognition = new SpeechRecognition();

 
    recognition.onstart = function() {
        console.log("Listening...");
        messagebtn.style.backgroundColor = "green";
    };


    recognition.onend = function() {
        console.log("Stopped listening.");
        messagebtn.style.backgroundColor = "red";
    };
   

    recognition.onresult = function(event) {
        const transcript = Array.from(event.results)
            .map(result => result[0].transcript)

            .join('');
            console.log(event);
            // console.log('Transcript:', transcript);
            chatboxContainer.appendChild(userSayDiv(transcript));
       setTimeout(()=>{ commandResponse(transcript.toLowerCase());},1000);
        
    };

   
    messagebtn.addEventListener('click', () => {
        recognition.start();
    });

    // stopbtn.addEventListener('click', () => {
    //     recognition.stop();
    // });
}


function commandResponse(command) {
    
    const commandAction = allCommand[command];
    if(commandAction) {
      const response = commandAction();
      chatboxContainer.appendChild(aiResponseDiv(response));
      readOut(response);
    }
    else {
      chatboxContainer.appendChild(aiResponseDiv("Command not recognised"));
      readOut('Command not recognised');
    }

}

const toggleButton = document.querySelector('.toggle-btn');
const commandList = document.querySelector('.m_command_list');

toggleButton.addEventListener('click', () => {
  commandList.classList.toggle('hidden');
  commandList.classList.toggle('show');

  if (commandList.classList.contains('show')) {
    toggleButton.textContent = 'Hide Commands';
  } else {
    toggleButton.textContent = 'Show Commands';
  }
});
