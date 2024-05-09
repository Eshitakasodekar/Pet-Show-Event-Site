document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event fired.');

    const registrationForm = document.querySelector('.registration form');
    console.log('Registration form:', registrationForm);

    registrationForm.addEventListener('submit', function (event) {
        console.log('Form submission event fired.');
        event.preventDefault(); // Prevent form submission

        // Simulate form submission success
        // Here you can perform actual form submission via AJAX or fetch
        // For demonstration purposes, we'll just display a success message
        displaySuccessMessage();

        // Reset the form
        registrationForm.reset();
    });

    function displaySuccessMessage() {
        // Display success message
        successMessage.innerHTML = '<p>Registration successful! We will notify you about upcoming events.</p>';

        // Scroll to the success message
        successMessage.scrollIntoView({ behavior: 'smooth' });

        // Clear success message after 5 seconds
        setTimeout(function () {
            successMessage.innerHTML = '';
        }, 5000);
    }
});
