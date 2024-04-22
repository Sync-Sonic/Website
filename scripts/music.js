var beats = {};
var currentAudio = null;

function toggleBeat(category, beatNumber) {
    var beatIndex = beatNumber - 1;
    var categoryBeats = beats[category];

    if (!categoryBeats) {
        console.error('Category not found: ' + category);
        return;
    }

    var beat = categoryBeats[beatIndex];
    var audio = beat.querySelector('audio');
    var img = beat.querySelector('img');

    if (!audio) {
        return;
    }

    if (currentAudio && currentAudio !== audio) {
        currentAudio.pause();
        var currentImg = currentAudio.parentElement.querySelector('img');
        currentImg.src = "images/volume.png";
    }

    if (audio.paused) {
        audio.play();
        img.src = "images/pause.png";
        currentAudio = audio;
    } else {
        audio.pause();
        img.src = "images/volume.png";
        currentAudio = null;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    var categoryContainers = document.querySelectorAll(".category");

    categoryContainers.forEach(function(categoryContainer) {
        var categoryName = categoryContainer.classList[1];
        var categoryBeats = categoryContainer.querySelectorAll(".beat");
        beats[categoryName] = categoryBeats;
    });

    for (const category in beats) {
        if (Object.hasOwnProperty.call(beats, category)) {
            beats[category].forEach(function(beat, index) {
                var beatNumber = index + 1;
                var audio = document.createElement('audio');
                audio.src = 'audio/' + category + '/beat ' + beatNumber + '.mp3';
                audio.loop = true;
                beat.appendChild(audio);
            });
        }
    }
});