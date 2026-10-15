const menuButton = document.querySelector("#menuButton");
const nav = document.querySelector("#nav");

menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const targets = document.querySelectorAll(
  ".intro-grid, .section-title, .skill-card, .next-layer, .project, .journey-card, .recognition-row, .contact-main, .contact-details"
);
targets.forEach((element) => element.classList.add("reveal"));

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, instance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        instance.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  targets.forEach((element) => observer.observe(element));
} else {
  targets.forEach((element) => element.classList.add("visible"));
}
