
document.getElementById("feedback-header").addEventListener("click", openFeedbackPage);

function openFeedbackPage() {
    window.location.href = '/feedback';
}

document.getElementById("home-header").addEventListener("click", openHomePage);

function openHomePage() {
    window.location.pathname = '/';
}

document.getElementById("videos-header").addEventListener("click", openVideosPage);

function openVideosPage() {
    window.location.pathname = '/videos';
}


function copyText() {
    var textToCopy = "syncsonics@gmail.com";
    
    navigator.clipboard.writeText(textToCopy).then(function() {
        var overlay = document.createElement('div');
        overlay.classList.add('overlay');

        var messageContainer = document.createElement('div');
        messageContainer.classList.add('message-container');
        
        var message = document.createElement('div');
        message.textContent = "Copied: " + textToCopy;
        
        var doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });

        messageContainer.appendChild(message);
        messageContainer.appendChild(doneButton);
        overlay.appendChild(messageContainer);
        document.body.appendChild(overlay);

        setTimeout(function() {
            document.body.removeChild(overlay);
        }, 5000);

        window.addEventListener('keydown', function() {
            document.body.removeChild(overlay);
        });
    }, function() {
        console.error("Unable to copy text.");
    });
}

function openYouTube(url) {
    window.open(url, '_blank');
}
