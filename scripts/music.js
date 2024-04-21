var beats = []; 
var currentAudio = null;
var currentImg = null;

function toggleBeat(beatNumber) {
    var beatIndex = beatNumber - 1;
    var beat = beats[beatIndex];
    var audio = beat.querySelector('audio');
    var img = beat.querySelector('img');
    
    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        currentImg.src = "images/volume.png";
    }

    if (audio.paused) {
        audio.play();
        img.src = "images/pause.png";
        currentAudio = audio;
        currentImg = img;
    } else {
        audio.pause();
        img.src = "images/volume.png";
        currentAudio = null;
        currentImg = null;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var volumeControls = document.querySelectorAll(".volume-control");
    
    volumeControls.forEach(function(volumeControl, index) {
        var beatNumber = index + 1;
        var audio = document.createElement('audio');
        audio.src = 'audio/beat ' + beatNumber + '.mp3';
        audio.loop = true;
        beats.push(volumeControl);
        
        volumeControl.appendChild(audio);
    });
});
