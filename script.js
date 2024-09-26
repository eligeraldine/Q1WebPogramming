document.addEventListener("DOMContentLoaded", function () {
    // Select all links that will navigate to a new page
    const links = document.querySelectorAll('a.navigate');

    // Loop through each link and add an event listener
    links.forEach(function(link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();  // Prevent the default link action

            const targetUrl = this.href;  // Get the URL of the link
            const pageTransition = document.querySelector('.page-transition');

            // Add exit animation class
            pageTransition.classList.add('exit');

            // Wait for the animation to finish before navigating
            setTimeout(function () {
                window.location.href = targetUrl;
            }, 500);  // The delay should match the CSS animation duration (0.5s)
        });
    });
});
