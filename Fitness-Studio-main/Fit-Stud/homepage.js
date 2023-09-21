document.addEventListener("DOMContentLoaded", function () {
    // Code for scrolling-triggered reveal of "About Us" section
    const aboutSection = document.getElementById("about");
    const aboutPlaceholder = document.getElementById("about-placeholder");

    const options = {
        root: null, // Use the viewport as the root
        rootMargin: "0px", // No margin
        threshold: 0.5, // Trigger the effect when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // About Us section is in view, reveal it
                aboutPlaceholder.style.height = "auto";
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // Start observing the About Us section
    observer.observe(aboutSection);
});
