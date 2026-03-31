// Email js
src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"


joinForFreeBtn = document.getElementById("hero-join-btn");
joinBtn = document.getElementById("join-btn");
popUpForm = document.getElementById("pop-up-form");


joinForFreeBtn.addEventListener("click", () => {
    popUpForm.classList.remove("hide");
});
joinBtn.addEventListener("click", () => {
    popUpForm.classList.remove("hide");
})




closeBtn = document.getElementById("closeForm");

closeBtn.addEventListener("click", () => {
    popUpForm.classList.add("hide");
});






// Send email

submitBtn = document.getElementById("submit-button");
submitBtn.addEventListener("click", () => {
    sendMail()
})


function sendMail(){
    let params = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value
    }

    emailjs.send("service_yoy5cyk", "template_l3v563l", params).then(alert("Email sent."));
}