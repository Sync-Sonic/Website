var videos = document.querySelectorAll("video");
videos.forEach(function(video) {
    video.addEventListener("loadedmetadata", function() {
        video.currentTime = 0.1;
    });
});

function playVideo(videoId) {
    var videos = document.querySelectorAll("video");
    videos.forEach(function(video) {
        if (video.id !== videoId) {
            video.pause();
        }
    });
}