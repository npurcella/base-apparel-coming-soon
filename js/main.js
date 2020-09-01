// Function to check for valid email address
const checkEmail = () => {
    // Get these elements to either set an error or clear it out
    const heroEmail = document.getElementById("hero-email")
    const errorBall = document.getElementById("error-ball")

    // Get email input to get the value to be checked
    const emailInput = document.getElementById("email-input")
    const emailToCheck = emailInput.value

    // If user entered something AND bad email address
    if (
        emailToCheck &&
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailToCheck)
    ) {
        errorBall.classList.add("error")
        emailInput.classList.add("error")
        heroEmail.classList.add("error")
    }
    // Good email address, remove error class and clear out input field
    else {
        errorBall.classList.remove("error")
        emailInput.classList.remove("error")
        heroEmail.classList.remove("error")
        emailInput.value = ""
    }
}

// Function to clear errors when users enters an email again
const toggleError = () => {
    const emailInput = document.getElementById("email-input")
    if (emailInput.value && emailInput.classList.contains("error")) {
        const heroEmail = document.getElementById("hero-email")
        const errorBall = document.getElementById("error-ball")
        emailInput.classList.toggle("error")
        errorBall.classList.toggle("error")
        heroEmail.classList.toggle("error")
    }
}
