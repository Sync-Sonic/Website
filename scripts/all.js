
document.getElementById("feedback-header").addEventListener("click", openFeedbackPage);

function openFeedbackPage() {
    window.location.href = '/feedback';
}

document.getElementById("home-header").addEventListener("click", openHomePage);

function openHomePage() {
    window.location.pathname = '/';
}


function copyText() {
    var textToCopy = "syncsonics@gmail.com";
    navigator.clipboard.writeText(textToCopy).then(function() {
        alert("Copied the mail: " + textToCopy);
    }, function() {
        return;
    });
}