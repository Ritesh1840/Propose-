function showResponse(answer) {
    const messageDiv = document.getElementById('response-message');
    const heartsContainer = document.getElementById('hearts-container');
    heartsContainer.innerHTML = ''; // Clear previous animations

    if (answer === 'yes') {
        messageDiv.innerHTML = "<p>Yay! I'm the happiest person in the world! 💖💖💖</p>";
        // Add happy hearts and sparkles animation
        document.body.style.background = "linear-gradient(to right, #fbc2eb, #a6c1ee)";
        document.querySelector('.proposal-card').style.transform = 'scale(1.05)';
        createHeartsAndSparkles();
    } else {
        messageDiv.innerHTML = "<p>It's okay, I’ll always cherish you! 😢</p>";
        // Change to sad theme
        document.body.style.background = "linear-gradient(to right, #c31432, #240b36)";
        document.querySelector('.proposal-card').style.transform = 'scale(0.95)';
    }
    messageDiv.scrollIntoView({ behavior: 'smooth' });
}

function createHeartsAndSparkles() {
    const heartsContainer = document.getElementById('hearts-container');
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heartsContainer.appendChild(heart);

        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        sparkle.style.left = Math.random() * 100 + 'vw';
        sparkle.style.top = Math.random() * 100 + 'vh';
        sparkle.style.animationDuration = Math.random() * 2 + 2 + 's';
        heartsContainer.appendChild(sparkle);
    }
}