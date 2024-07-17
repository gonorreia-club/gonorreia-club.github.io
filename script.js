
document.addEventListener("DOMContentLoaded", function() {
    const virus = document.getElementById("virus");
    const message = document.getElementById("message");

    setTimeout(() => {
        virus.classList.add("farting");
        message.classList.add("visible");
    }, 2000);
});
