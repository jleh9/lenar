document.addEventListener('DOMContentLoaded', () => {
    const carLinks = {
        'lexus-link': 'lexus',
        'bmw-link': 'bmw',
        'merc-link': 'merc'
    };

    const gifImage = document.getElementById('current-gif');

    let currentCar = 'lexus';
    let currentWheel = '';

    function changeGif() {
        const newGif = `gif/${currentCar}${currentWheel}.gif`; // Path to the GIF folder

        gifImage.classList.add('slide-out');

        setTimeout(() => {
            gifImage.src = newGif;
            gifImage.classList.remove('slide-out');
            gifImage.classList.add('slide-in');

            setTimeout(() => {
                gifImage.classList.remove('slide-in');
            }, 1000); // Animation duration 1 second
        }, 1000); // Animation duration 1 second
    }

    Object.keys(carLinks).forEach(linkId => {
        document.getElementById(linkId).addEventListener('click', (e) => {
            e.preventDefault();
            currentCar = carLinks[linkId];
            currentWheel = '';
            changeGif();
        });
    });

    const wheelLinks = document.querySelectorAll('.wheel-link');
    wheelLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            currentWheel = link.getAttribute('data-wheel');
            changeGif();
        });
    });
});
