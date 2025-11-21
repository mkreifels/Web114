// Mood Changer using event delegation on the document

const moodDisplay = document.getElementById('moodDisplay');

const moods = {
    happy: { bg: '#ff9800', text: '#3e2723', message: 'Pumpkin spice everything!' },
    calm: { bg: '#4caf50', text: '#1b5e20', message: 'Nature is so soothing.' },
    excited: { bg: '#f44336', text: '#b71c1c', message: 'Let\'s get this party started!' },
    chill: { bg: '#2196f3', text: '#0d47a1', message: 'Just relaxing and enjoying the vibes.' },
    mysterious: { bg: '#9c27b0', text: '#4a148c', message: 'The unknown is intriguing.' },
    reset: { bg: '#ffffff', text: '#000000', message: 'Choose a mood...' }
    };

document.addEventListener('click', function(event) {
    if (event.target.classList.contains('mood-btn')) {
        const mood = event.target.getAttribute('data-mood');
        const config = moods[mood];
        document.body.style.backgroundColor = config.bg;
        document.body.style.color = config.text;
        moodDisplay.textContent = config.message;
    }
});

        