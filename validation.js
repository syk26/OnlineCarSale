// validation.js - Client-side form validation using Regular Expressions

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearError(elementId) {
    document.getElementById(elementId).textContent = '';
}

function validateRegistration(event) {
    event.preventDefault();
    let isValid = true;

    // Name: Only alphabetical letters and space
    const name = document.getElementById('regName').value.trim();
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
        showError('regNameError', 'Name must contain only alphabetical letters and spaces.');
        isValid = false;
    } else {
        clearError('regNameError');
    }

    // Address: Only alphanumeric characters and space
    const address = document.getElementById('regAddress').value.trim();
    const addressRegex = /^[A-Za-z0-9\s]+$/;
    if (!addressRegex.test(address)) {
        showError('regAddressError', 'Address must contain only alphanumeric characters and spaces.');
        isValid = false;
    } else {
        clearError('regAddressError');
    }

    // Phone number: China phone number
    const phone = document.getElementById('regPhone').value.trim();
    const phoneRegex = /^(\+86)?1[3-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
        showError('regPhoneError', 'Please enter a valid China phone number (e.g., 13800138000 or +8613800138000).');
        isValid = false;
    } else {
        clearError('regPhoneError');
    }

    // Email: Must end with .cn or .com, must contain @ exactly once
    const email = document.getElementById('regEmail').value.trim();
    const emailRegex = /^[^@]+@[^@]+\.(cn|com)$/;
    const atCount = (email.match(/@/g) || []).length;
    if (atCount !== 1 || !emailRegex.test(email)) {
        showError('regEmailError', 'Email must contain @ exactly once and end with .cn or .com.');
        isValid = false;
    } else {
        clearError('regEmailError');
    }

    // Username: At least 6 alphanumeric characters
    const username = document.getElementById('regUsername').value.trim();
    const usernameRegex = /^[A-Za-z0-9]{6,}$/;
    if (!usernameRegex.test(username)) {
        showError('regUsernameError', 'Username must be at least 6 alphanumeric characters.');
        isValid = false;
    } else {
        clearError('regUsernameError');
    }

    // Password: At least 6 alphanumeric characters
    const password = document.getElementById('regPassword').value;
    const passwordRegex = /^[A-Za-z0-9]{6,}$/;
    if (!passwordRegex.test(password)) {
        showError('regPasswordError', 'Password must be at least 6 alphanumeric characters.');
        isValid = false;
    } else {
        clearError('regPasswordError');
    }

    if (isValid) {
        alert('Registration successful! (Demo only)');
        document.getElementById('registerForm').reset();
    }
    return false;
}

function validateLogin(event) {
    event.preventDefault();
    let isValid = true;

    // Username: At least 6 alphanumeric characters
    const username = document.getElementById('loginUsername').value.trim();
    const usernameRegex = /^[A-Za-z0-9]{6,}$/;
    if (!usernameRegex.test(username)) {
        showError('loginUsernameError', 'Username must be at least 6 alphanumeric characters.');
        isValid = false;
    } else {
        clearError('loginUsernameError');
    }

    // Password: At least 6 alphanumeric characters
    const password = document.getElementById('loginPassword').value;
    const passwordRegex = /^[A-Za-z0-9]{6,}$/;
    if (!passwordRegex.test(password)) {
        showError('loginPasswordError', 'Password must be at least 6 alphanumeric characters.');
        isValid = false;
    } else {
        clearError('loginPasswordError');
    }

    if (isValid) {
        alert('Login successful! (Demo only)');
        document.getElementById('loginForm').reset();
    }
    return false;
}

function validateAddCar(event) {
    event.preventDefault();
    let isValid = true;

    // Colour: Required, letters and spaces only
    const colour = document.getElementById('carColour').value.trim();
    const colourRegex = /^[A-Za-z\s]+$/;
    if (!colourRegex.test(colour)) {
        showError('carColourError', 'Colour must contain only letters and spaces.');
        isValid = false;
    } else {
        clearError('carColourError');
    }

    // Model: Required, alphanumeric and spaces
    const model = document.getElementById('carModel').value.trim();
    const modelRegex = /^[A-Za-z0-9\s]+$/;
    if (!modelRegex.test(model)) {
        showError('carModelError', 'Model must contain only alphanumeric characters and spaces.');
        isValid = false;
    } else {
        clearError('carModelError');
    }

    // Year: Required, 4 digits between 1900 and current year + 1
    const year = document.getElementById('carYear').value.trim();
    const yearRegex = /^\d{4}$/;
    const currentYear = new Date().getFullYear();
    if (!yearRegex.test(year) || parseInt(year) < 1900 || parseInt(year) > currentYear + 1) {
        showError('carYearError', `Year must be a 4-digit number between 1900 and ${currentYear + 1}.`);
        isValid = false;
    } else {
        clearError('carYearError');
    }

    // Location: Required
    const location = document.getElementById('carLocation').value.trim();
    if (location.length === 0) {
        showError('carLocationError', 'Location is required.');
        isValid = false;
    } else {
        clearError('carLocationError');
    }

    // Price: Required, positive number
    const price = document.getElementById('carPrice').value.trim();
    const priceRegex = /^[1-9]\d*$/;
    if (!priceRegex.test(price)) {
        showError('carPriceError', 'Price must be a positive whole number.');
        isValid = false;
    } else {
        clearError('carPriceError');
    }

    // Image: Required
    const image = document.getElementById('carImage').value;
    if (image.length === 0) {
        showError('carImageError', 'Please upload an image of the car.');
        isValid = false;
    } else {
        clearError('carImageError');
    }

    if (isValid) {
        alert('Car added successfully! (Demo only)');
        document.getElementById('addCarForm').reset();
    }
    return false;
}
