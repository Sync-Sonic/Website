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

var videos = document.querySelectorAll("video");
var overlays = document.querySelectorAll(".play-pause-overlay");
var timeout;
var currentVideo;

videos.forEach(function(video) {
    video.addEventListener("loadedmetadata", function() {
        video.currentTime = 0.1;
    });

    video.addEventListener("click", function(event) {
        event.preventDefault();
        togglePlay(video);
    });

    video.addEventListener("play", function() {
        if (currentVideo && currentVideo !== video) {
            currentVideo.pause();
        }
        currentVideo = video;

        var overlayId = "play" + video.id.slice(-1);
        var overlay = document.getElementById(overlayId);
        overlay.src = "images/pause.png";
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            hidePlayPauseOverlay(video);
        }, 2000);
    });

    video.addEventListener("pause", function() {
        var overlayId = "play" + video.id.slice(-1);
        var overlay = document.getElementById(overlayId);
        overlay.src = "images/play.png";
    });

    video.addEventListener("ended", function() {
        video.currentTime = 0;
        var overlayId = "play" + video.id.slice(-1);
        var overlay = document.getElementById(overlayId);
        overlay.src = "images/play.png";
    });

    video.addEventListener("mousemove", function() {
        clearTimeout(timeout);
        showPlayPauseOverlay(video);
        timeout = setTimeout(function() {
            hidePlayPauseOverlay(video);
        }, 2000);
    });
});

function togglePlay(video) {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function showPlayPauseOverlay(video) {
    var overlayId = "play" + video.id.slice(-1);
    var overlay = document.getElementById(overlayId);
    overlay.style.display = "block";
}

function hidePlayPauseOverlay(video) {
    var overlayId = "play" + video.id.slice(-1);
    var overlay = document.getElementById(overlayId);
    overlay.style.display = "none";
}

var overlays = document.querySelectorAll(".play-pause-overlay");

overlays.forEach(function(overlay) {
    overlay.addEventListener("click", function(event) {
        event.preventDefault();
        var videoId = overlay.id.replace("play", "video");
        var video = document.getElementById(videoId);
        togglePlay(video);
    });
});
