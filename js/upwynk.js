const music= document.querySelector("audio");
const img= document.querySelector("img");
const play= document.getElementById('play');
const artist= document.getElementById('artist');
const title = document.getElementById('title');
const prev = document.getElementById('prev');
const next= document.getElementById('next');
const desc=document.getElementById('text');

const songs =[
    {
    name: "Aaj Se Pehle Aaj Se Jyada",
    title: "Aaj Se Pehle Aaj Se Jyada",
    artist: "K. J. Yesudas",
    desc: "Aaj Se Pehle Aaj Se Jyada",
    },
    {
        name: "Anewala Pal",
        title: "Anewala Pal",
        artist: "Kishore Kumar",
        desc: "Anewala Pal",
        
    },
    {
        name: "Janeman Janeman Tere Do Nayan",
        title: "Janeman Janeman Tere Do Nayan",
        artist: "K.j. Yesudas, Asha Bhosle",
        desc: "Janeman Janeman Tere Do Nayan",
        
    },
    {
        name: "Kehna Hai Male",
        title: "Kehna Hai Male",
        artist: "Kishore Kumar", 
        desc: "Kehna Hai Male",
         
    },
    {
        name: "Kuch Tu Log Kahenge Logo Kam Hai Kehna",
        title: "Kuch Tu Log Kahenge Logo Kam Hai Kehna",
        artist: "Kishore Kumar", 
        desc: "Kuch Tu Log Kahenge Logo Kam Hai Kehna",
         
    },

];


// for playing music 
let isPlaying= false;
const playMusic = () => {
    isPlaying = true;
    music.play();
    gifImage.style.opacity=1;
    play.classList.replace("fa-play","fa-pause");
};
// for pause music
const pauseMusic=() => {
    isPlaying = false;
    music.pause();
    gifImage.style.opacity=0;
    play.classList.replace("fa-pause","fa-play");
};

play.addEventListener('click',()=>{
    if(isPlaying){
        pauseMusic();
    }else{
        playMusic();
    }
})

// changing the music data 

const loadSong = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    desc.textContent=songs.desc;
    music.src = "./Music/"+ songs.name + ".mp3";
    img.src = "./Images/"+ songs.name + ".jpg";
  
};
 
songIndex = 0;


const nextSong = ()=>{
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

const prevSong = ()=>{
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playMusic();
};

next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);

var myprogressbar=document.getElementById('mybar');

music.addEventListener('timeupdate',()=>{
    progress=parseInt((music.currentTime/music.duration)*100);
    myprogressbar.value=progress;
});

myprogressbar.addEventListener('change',()=>{
    music.currentTime= myprogressbar.value*music.duration/100;
})
