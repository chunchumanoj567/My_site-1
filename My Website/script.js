document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(contactForm);

        // You can send the form data to a server or perform other actions here
        // For now, let's just log the data to the console
        for (let [name, value] of formData) {
            console.log(`${name}: ${value}`);
        }
    });
});
