
const sceneData = [
    {
        title: "Scenic Sunset",
        description: "As the sun dips below the horizon, painting the sky with hues of orange, pink, and purple, the tranquil waters of the lake gently ripple with the breeze. The soft rustling of leaves in the trees, the distant call of a loon, and the rhythmic lapping of water against the shore create a symphony of nature's finest sounds. This ASMR experience transports you to the edge of a peaceful lake, where the day's warmth fades into the cool embrace of twilight. Close your eyes and let the serene ambiance wash over you, easing your mind and body into a state of deep relaxation.",
        imageUrl: "images/m-morning.jpg",
        altText: "morning.jpeg",
        viewName: "sunset-video"
    },
    {
        title: "Scenic Waterfall",
        description: "As you approach the cascading waterfall, the gentle roar of the water fills your ears, and the misty breeze cools your face. The crystal-clear water flows effortlessly over the rocky ledges, creating a mesmerizing display of nature's power and beauty. Surrounding the waterfall, lush greenery thrives, with the soft rustling of leaves and the occasional chirp of birds harmonizing with the water's rhythmic flow. This ASMR experience invites you to immerse yourself in the tranquil ambiance, where the stresses of daily life wash away, leaving you refreshed and at peace with the serene wilderness.",
        imageUrl: "images/waterfall.jpeg",
        altText: "waterfall.jpg",
        viewName: "waterfall"
    },
    {
        title: "Scenic Forest",
        description: "Step into the heart of a serene forest, where the towering trees stretch towards the sky, their leaves whispering in the gentle breeze. The forest floor is blanketed with soft moss and fallen leaves, muffling your footsteps as you walk deeper into nature’s embrace. Birds sing melodious tunes from the treetops, while the distant sound of a babbling brook adds to the calming symphony of the woods. Rays of sunlight filter through the canopy, creating a dance of light and shadow that soothes the mind and spirit.",
        imageUrl: "images/forest.jpg",
        altText: "forest.jpg",
        viewName: "forest"
    },
    {
        title: "Snow Mountain",
        description: "Imagine yourself in a tranquil winter wonderland, where the ground is covered in a soft blanket of pristine snow. The air is crisp, and each breath you take fills your lungs with the refreshing coolness of the season. The world around you is hushed, with only the gentle crunch of snow underfoot and the occasional rustling of snow-laden branches breaking the silence. As delicate snowflakes drift down from the sky, they land softly, creating a serene and peaceful atmosphere. This ASMR experience transports you to a snowy landscape, where the calm and stillness of winter bring a deep.",
        imageUrl: "images/snow.jpg",
        altText: "snow.jpg",
        viewName: "snow"
    },
    {
        title: "Sound Therapy",
        description: "Immerse yourself in the healing world of sound therapy, where soothing tones and vibrations resonate through your entire being. This ASMR experience envelops you in a symphony of therapeutic sounds—from the deep, grounding hum of Tibetan singing bowls to the gentle chimes of wind bells. Each sound is carefully chosen to balance your energy, calm your mind, and release tension from your body. Close your eyes and let the harmonious frequencies wash over you, guiding you into a state of deep relaxation and inner peace. This is a journey into the power of sound, where each note is a step closer to tranquility.",
        imageUrl: "images/meditation.jpg",
        altText: "meditation.jpg",
        viewName: "meditation"
    },
    {
        title: "Rain",
        description: "Immerse yourself in the healing world of sound therapy, where soothing tones and vibrations resonate through your entire being. This ASMR experience envelops you in a symphony of therapeutic sounds—from the deep, grounding hum of Tibetan singing bowls to the gentle chimes of wind bells. Each sound is carefully chosen to balance your energy, calm your mind, and release tension from your body. Close your eyes and let the harmonious frequencies wash over you, guiding you into a state of deep relaxation and inner peace. This is a journey into the power of sound, where each note is a step closer to tranquility.",
        imageUrl: "images/rain.jpeg",
        altText: "rain.jpeg",
        viewName: "rain"
    }
];
const sceneList = document.querySelector('.scene-list');
sceneData.forEach(s=>{
    const sceneDiv = document.createElement('div');
    sceneDiv.className='scene w-full h-full absolute inset-0';
    sceneDiv.innerHTML =`  <img src="./${s.imageUrl}" class="w-full h-full object-cover" alt="${s.altText}">
                <div class="content absolute   ">
                <div class="scene-title md:text-5xl font-bold  mb-6">${s.title}</div>  
                <div class="scene-description md:text-2xl text-[white] font-semibold">${s.description}</div>
                 <button class="text-5xl bg-transparent  px-3 py-2 md:px-5 md:py-3 text-[white] play flex  rounded-md mt-8" data-viewName="${s.viewName}">Pl<i class="fa-solid fa-circle-play fa-beat-fade px-1" style="color: #87ec00;"></i></i>y</button>
                </div>`;
        sceneList.appendChild(sceneDiv);        
});

const thumbnail = document.querySelector('.thumbnail');
sceneData.forEach(s=>{
    const itemDiv =document.createElement('div');
    itemDiv.className='item';
    itemDiv.innerHTML=`<img src="${s.imageUrl}">
                <div class="content">
                    <div class="title">
                       ${s.title}
                    </div>
                 
                </div>`
thumbnail.appendChild(itemDiv);
});

function moveThumbnailNext() {
    const carousellist= document.querySelectorAll('.scene');
    const thumbnailList = document.querySelector('.scene-carousel .thumbnail');
    const firstThumbnail = thumbnailList.querySelector('.item:first-child');
    firstThumbnail.classList.add('moving');
    firstThumbnail.addEventListener('animationend', function() {
        thumbnailList.removeChild(firstThumbnail);
        thumbnailList.appendChild(firstThumbnail);
        firstThumbnail.classList.remove('moving'); 
        firstThumbnail.classList.add('appearing'); 
        firstThumbnail.addEventListener('animationend', function() {
            firstThumbnail.classList.remove('appearing');
        }, { once: true });
    }, { once: true });
    
    carouselListItem.appendChild(carousellist[0]);
    console.log(carouselListItem);

   
}

function moveThumbnailPrevious() {
    const carousellist= document.querySelectorAll('.scene');
    const thumbnailList = document.querySelector('.scene-carousel .thumbnail');
    const lastThumbnail = thumbnailList.querySelector('.item:last-child');
    lastThumbnail.classList.add('movingBack');
    lastThumbnail.addEventListener('animationend', function() {
        thumbnailList.removeChild(lastThumbnail);
        thumbnailList.insertBefore(lastThumbnail, thumbnailList.firstChild);
        lastThumbnail.classList.remove('movingBack');
        lastThumbnail.classList.add('appearing');
        lastThumbnail.addEventListener('animationend', function() {
            lastThumbnail.classList.remove('appearing');
        }, { once: true });
    }, { once: true });
    const carouselContainer = document.querySelector('.scene-list');
    carouselContainer.prepend(carousellist[carousellist.length - 1]);
}

document.querySelector('.fa-circle-chevron-right').addEventListener('click', moveThumbnailNext);
document.querySelector('.fa-circle-chevron-left').addEventListener('click', moveThumbnailPrevious);


console.log("hariom SIngh")


/********* VIDEO selction ************* */
const videoContainer = document.querySelector(".video-container");
const mainVideo = document.querySelector("video");
const playPauseBtn =document.querySelector(".play-pause i");
const skipBackWard =document.querySelector(".backward i");
const skipForWard =document.querySelector(".forward i");
const playPause =document.querySelector(".play-pause");
const progressBar = document.querySelector(".progress-bar");
const volumeBtn =document.querySelector(".volume i");
const volumeRange =document.querySelector(".volume-range");
const speedBtn =document.querySelector(".time-slider");
const speedTimerOptions =document.querySelector(".timer-options");
let carouselListItem = document.querySelector('.scene-list');
const playButtons = document.querySelectorAll('.scene-carousel .play');
const closeVideoButton = document.querySelector('.close-video-player');






mainVideo.addEventListener('timeupdate',(e)=>{
    let { currentTime , duration}= e.target;
    progressBar.style.width=`${(currentTime/duration) * 100}%`;
    // console.log((currentTime/duration) * 100)
});
skipForWard.addEventListener('click',()=>{
    mainVideo.currentTime +=30;
});
skipBackWard.addEventListener('click',()=>{
    mainVideo.currentTime -=30;
});
playPauseBtn.addEventListener('click',()=>{
    mainVideo.paused ? mainVideo.play() :mainVideo.pause();
})
mainVideo.addEventListener('play',()=>{
    playPauseBtn.classList.replace("fa-play","fa-pause")
})

mainVideo.addEventListener('pause',()=>{
    playPauseBtn.classList.replace("fa-pause","fa-play")
})

volumeBtn.addEventListener('click',()=>{
if(volumeBtn.classList.contains("fa-volume-high")){
    mainVideo.volume=0.0;
    volumeBtn.classList.replace("fa-volume-high","fa-volume-xmark");
}else{
    mainVideo.volume=0.5;
    volumeBtn.classList.replace("fa-volume-xmark","fa-volume-high");
}
volumeRange.value = mainVideo.volume;
})

volumeRange.addEventListener("input",(e)=>{
    const volume = e.target.value / 100;
    mainVideo.volume=volume;
    if(volume===0)volumeBtn.classList.replace("fa-volume-high","fa-volume-xmark");
    else volumeBtn.classList.replace("fa-volume-xmark","fa-volume-high");
})

// Selecting elements


// Toggle options on button click
speedBtn.addEventListener('click', (e) => {
    e.stopPropagation();  // Prevent the click from propagating to the document
    speedTimerOptions.classList.toggle("show");
 
});

// Close options if clicking outside
document.addEventListener('click', (e) => {
    

    if (!speedBtn.contains(e.target) && !speedTimerOptions.contains(e.target)) {
        speedTimerOptions.classList.remove("show");
        
    } 
});

speedTimerOptions.querySelectorAll("li").forEach(value=>{
    value.addEventListener("click",()=>{
        mainVideo.playbackRate =value.dataset.speed;
        speedTimerOptions.querySelector(".active").classList.remove("active");
        value.classList.add("active");
    })
})





playButtons.forEach(button => {
    button.addEventListener('click',(e) => {
        const videoContainerBody = document.querySelector('.video-container-body');
        const video = videoContainerBody.querySelector('video');
           const targetButton = e.target.closest('.play');
           console.log(targetButton.dataset.viewname);
           mainVideo.src=`./videos/${targetButton.dataset.viewname}.mp4`
       
        videoContainerBody.style.display = 'flex';
        video.play(); 

       
      
    });
});

closeVideoButton.addEventListener('click', () => {
    const videoContainerBody = document.querySelector('.video-container-body');
    const video = videoContainerBody.querySelector('video');

    
    video.pause();
    videoContainerBody.style.display = 'none';

    
});

