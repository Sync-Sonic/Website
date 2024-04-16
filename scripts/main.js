var videos = document.querySelectorAll("video");
videos.forEach(function(video) {
    video.addEventListener("loadedmetadata", function() {
        video.currentTime = 0.1;
    });
});

function copyText() {
    var textToCopy = "syncsonics@gmail.com";
    navigator.clipboard.writeText(textToCopy).then(function() {
        alert("Copied the mail: " + textToCopy);
    }, function() {
        return;
    });
}

var beats = []; 

function toggleBeat(beatNumber) {
    var beatIndex = beatNumber - 1;
    var beat = beats[beatIndex];
    var audio = beat.querySelector('audio');
    var img = beat.querySelector('img');
    
    if (audio.paused) {
        audio.play();
        img.src = "images/pause.png";
    } else {
        audio.pause();
        img.src = "images/volume.png";
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