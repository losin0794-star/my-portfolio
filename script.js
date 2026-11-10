const sections = document.querySelectorAll(
    ".about, .skills, .projects"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

sections.forEach((section) => {
    observer.observe(section);
});
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️ Light Mode";
    } else {
        themeToggle.textContent = "🌙 Dark Mode";
    }
});
function welcomeVisitor() {
    const name = document.getElementById("visitorName").value.trim();

    const message = document.getElementById("welcomeMessage");

    if (name === "") {
        message.textContent = "Please enter your name! 🌸";
    } else {
        message.textContent = `Welcome to my portfolio, ${name}! 💜`;
    }
}