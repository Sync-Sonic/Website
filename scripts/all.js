
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

document.getElementById("music-header").addEventListener("click", openMusicPage);

function openMusicPage() {
    window.location.pathname = '/music';
}

function scrollToBottom() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}



function copyText() {
    var textToCopy = "syncsonics@gmail.com";

    navigator.clipboard.writeText(textToCopy).then(function() {
        
        var audio = new Audio('audio/pling.mp3');
        audio.play();

        var overlay = document.createElement('div');
        overlay.classList.add('copy-overlay');

        var messageContainer = document.createElement('div');
        messageContainer.classList.add('message-container');

        var checkmarkIcon = document.createElement('i');
        checkmarkIcon.classList.add('fa-solid', 'fa-check', 'checkmark-icon');

        var successMessage = document.createElement('div');
        successMessage.textContent = "Success!";
        successMessage.classList.add('success-message');

        var emailText = document.createElement('div');
        emailText.textContent = textToCopy;
        emailText.classList.add('email-text');

        var copiedText = document.createElement('div');
        copiedText.textContent = "Copied to clipboard";
        copiedText.classList.add('copied-text');

        var closeButton = document.createElement('button');
        closeButton.textContent = 'Close';
        closeButton.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });

        messageContainer.appendChild(checkmarkIcon);
        messageContainer.appendChild(document.createElement('br')); 
        messageContainer.appendChild(document.createElement('br')); 
        messageContainer.appendChild(successMessage);
        messageContainer.appendChild(document.createElement('br')); 
        messageContainer.appendChild(emailText);
        messageContainer.appendChild(document.createElement('br')); 
        messageContainer.appendChild(copiedText);
        messageContainer.appendChild(document.createElement('br')); 
        messageContainer.appendChild(closeButton);
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
