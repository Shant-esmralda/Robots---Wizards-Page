let currentMusic = 0;



const songName = document.querySelector('.song-name');
const songCover = document.querySelector('.song-cover');
const playBtn = document.querySelector('.play-btn');
const forwardBtn = document.querySelector('.forward-btn');
const backwardBtn = document.querySelector('.backward-btn');
const music = document.querySelector('#audio');

const setMusic = (i) => {
    let song = songs[i];
    currentMusic = i;
    music.src = song.path;

    songName.innerHTML = song.name;
    songCover.style.backgroundImage = "url('../assets/img/" + song.cover + "')";
}

setMusic(0);

const playMusic = () => {
    music.play();
    playBtn.classList.remove('pause');
}

playBtn.addEventListener('click', () => {
    if(playBtn.className.includes('pause')){
        music.play();
        playBtn.classList.remove('pause');
    } else{
        music.pause();
        playBtn.classList.add('pause');
    }
})

forwardBtn.addEventListener('click', () => {
    if(currentMusic >= songs.length - 1){
        currentMusic = 0;
    } else{
        currentMusic++;
    }
    setMusic(currentMusic);
    playMusic();
})

backwardBtn.addEventListener('click', () => {
    if(currentMusic <= 0){
        currentMusic = songs.length - 1;
    } else{
        currentMusic--;
    }
    setMusic(currentMusic);
    playMusic();
})