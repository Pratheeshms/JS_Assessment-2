document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);

    const detailsContainer = document.getElementById('details');

    const name = params.get('name');
    const id = params.get('id');
    const phone = params.get('phone');
    const gender = params.get('gender');
    const languages = params.get('languages').split(',');

    detailsContainer.innerHTML = `
        <strong>Name:</strong> ${name}<br>
        <strong>ID:</strong> ${id}<br>
        <strong>Phone No:</strong> ${phone}<br>
        <strong>Gender:</strong> ${gender}<br>
        <strong>Languages:</strong> ${languages.join(', ')}
    `;
});
