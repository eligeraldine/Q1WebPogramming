document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a.navigate');

    links.forEach(function(link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); 

            const targetUrl = this.href;
            const pageTransition = document.querySelector('.page-transition');

            pageTransition.classList.add('exit');

            setTimeout(function () {
                window.location.href = targetUrl;
            }, 500);
        });
    });
});
