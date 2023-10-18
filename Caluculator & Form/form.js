function submitForm(event) {
    event.preventDefault();

    // Gather form values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;

    const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
    const genders = Array.from(genderCheckboxes).map(checkbox => checkbox.value);

    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Validate form
    if (!firstName || !lastName || !dob || !country || genders.length === 0 || !profession || !email || !mobile) {
        alert('All fields are required.');
        return;
    }

    // Display popup with survey results
    const popupResults = document.getElementById('popupResults');
    popupResults.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${genders.join(', ')}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;

    // Show the popup
    document.getElementById('popup').style.display = 'flex';

    // Reset the form
    resetForm();
}

function resetForm() {
    document.getElementById('surveyForm').reset();
}

function closePopup() {
    // Hide the popup
    document.getElementById('popup').style.display = 'none';
}
