// Update these two values before publishing.
const SITE_EMAIL = "YOUR_EMAIL@example.com";
const LINKEDIN_URL = "https://www.linkedin.com/in/YOUR-PROFILE/";

document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
document.querySelectorAll("[data-email-link]").forEach(el => {
  el.href = `mailto:${SITE_EMAIL}`;
  el.textContent = `${SITE_EMAIL} ↗`;
});
document.querySelectorAll("[data-linkedin]").forEach(el => {
  el.href = LINKEDIN_URL;
  el.textContent = "View LinkedIn profile ↗";
});

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "✕" : "☰";
  });
}

const form = document.querySelector("#contact-form");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    if (SITE_EMAIL.includes("YOUR_EMAIL")) {
      document.querySelector("#form-note").textContent = "Please replace YOUR_EMAIL@example.com in assets/main.js before using this form.";
      return;
    }
    const data = new FormData(form);
    const subject = encodeURIComponent(`Portfolio inquiry — ${data.get("topic")}`);
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\nTopic: ${data.get("topic")}\n\n${data.get("message")}`);
    window.location.href = `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`;
  });
}
