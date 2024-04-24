document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const message = document.getElementById('message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = form.name.value;
        const id = form.id.value;
        const phone = form.phone.value;
        const gender = form.gender.value;
        const languages = Array.from(form.querySelectorAll('input[name="language"]:checked')).map(el => el.value);

        // Validation
        if (name.trim() === '' || id.trim() === '' || phone.trim() === '' || gender.trim() === '' || languages.length === 0) {
            message.textContent = 'Please fill out all fields';
            message.style.color = 'red';
            return;
        }

        // Redirect to details page
        const detailsUrl = `details.html?name=${encodeURIComponent(name)}&id=${encodeURIComponent(id)}&phone=${encodeURIComponent(phone)}&gender=${encodeURIComponent(gender)}&languages=${encodeURIComponent(languages.join(','))}`;
        window.location.href = detailsUrl;
    });
});
