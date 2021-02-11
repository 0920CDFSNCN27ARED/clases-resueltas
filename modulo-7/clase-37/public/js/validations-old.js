let errors = [];

window.addEventListener("load", () => {
    const form = document.getElementById("registerForm");

    form.addEventListener("submit", (event) => {
        errors = [];
        clearValidations();

        validateIsNotEmpty("name", "Nombre no puede ser vacio!");
        validateIsNotEmpty("email", "Email no puede ser vacio!");

        if (checkErrors()) {
            event.preventDefault();
        }
    });
});

function clearValidations() {
    const arrayInputs = document.getElementsByClassName("validate");
    const arrayFeedbacks = document.getElementsByClassName("feedback");

    for (const input of arrayInputs) {
        input.classList.remove("is-invalid");
    }
    for (const feedback of arrayFeedbacks) {
        feedback.classList.remove("alert", "alert-danger");
        feedback.innerHTML = "";
    }
}

function validateIsNotEmpty(inputId, errorMsg) {
    const input = document.getElementById(inputId);
    if (input.value.trim() == "") {
        const error = {
            inputId,
            msg: errorMsg,
        };
        errors.push(error);
    } else {
        input.classList.add("is-valid");
    }
}

function checkErrors() {
    if (errors.length > 0) {
        errors.forEach((e) => {
            const feedbackId = e.inputId + "Feedback";
            const feedbackDiv = document.getElementById(feedbackId);
            const input = document.getElementById(e.inputId);
            input.classList.add("is-invalid");
            feedbackDiv.innerHTML = e.msg;
            feedbackDiv.classList.add("alert", "alert-danger");
        });
        return true;
    }

    return false;
}
