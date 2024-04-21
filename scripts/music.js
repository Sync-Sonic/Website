var beats = []; 
var currentAudio = null;
var currentImg = null;

function toggleBeat(beatNumber) {
    var beatIndex = beatNumber - 1;
    var beat = beats[beatIndex];
    var audio = beat.querySelector('audio');
    var img = beat.querySelector('img');
    
    if (!audio) {
        console.error('Audio element not found for beat ' + beatNumber);
        return;
    }

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
    var categoryContainers = document.querySelectorAll(".category");

    categoryContainers.forEach(function(category) {
        var categoryBeats = category.querySelectorAll(".beat");
        beats.push(categoryBeats);
    });

    beats = beats.flat(); // Flatten the array

    beats.forEach(function(beat, index) {
        beat.addEventListener("click", function() {
            var categoryIndex = Math.floor(index / 4); // Since there are 4 beats per category
            var beatIndex = index % 4; // Index of the beat within the category
            var beatNumber = categoryIndex * 4 + beatIndex + 1; // Calculate the beat number
            toggleBeat(beatNumber);
        });
    });
});
