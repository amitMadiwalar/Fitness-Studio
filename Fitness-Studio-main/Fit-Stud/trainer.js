document.addEventListener("DOMContentLoaded", function () {
    const trainerBoxes = document.querySelectorAll('.trainer-box');

    trainerBoxes.forEach(box => {
        box.addEventListener('click', () => {
            // Toggle active class for clicked trainer box
            box.classList.toggle('active');

            // Hide/display trainer media and information
            const trainerMedia = box.querySelector('.trainer-media');
            trainerMedia.style.display = box.classList.contains('active') ? 'block' : 'none';

            // Pause all other videos when a trainer is clicked
            if (box.classList.contains('active')) {
                trainerBoxes.forEach(otherBox => {
                    if (otherBox !== box) {
                        otherBox.classList.remove('active');
                        const otherTrainerMedia = otherBox.querySelector('.trainer-media');
                        otherTrainerMedia.style.display = 'none';
                    }
                });
            }
        });
    });
});
