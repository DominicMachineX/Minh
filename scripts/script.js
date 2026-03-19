// Toggle menu
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav-menu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Fade-in on scroll
const faders = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

faders.forEach(el => observer.observe(el));

// Load projects
fetch("../json/data.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("project-list");

    data.forEach(p => {
      const div = document.createElement("div");
      div.className = "project-card";

      div.innerHTML = `
        <h4>${p.name}</h4>
        <p>${p.description}</p>
        <p><strong>Tech:</strong> ${p.tech}</p>
        <a href="${p.link}" target="_blank">View Project</a>
      `;

      container.appendChild(div);
    });
  });
