const checkEmail = () => {
    const emailToCheck = document.getElementById("email-input").value
    const errorBall = document.getElementById("error-ball")
    if (
        emailToCheck &&
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailToCheck)
    ) {
        errorBall.classList.add("error")
    } else {
        errorBall.classList.remove("error")
    }
}
