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
fetch("json/projects.json")
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

  // Load experiments
fetch("json/experiments.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("experiment-list");

    data.forEach(p => {
      const div = document.createElement("div");
      div.className = "experiment-card";

      div.innerHTML = `
       <div class="experiment-content">
        <h4>${p.name}</h4>
        <p>${p.description}</p>
        <p><strong>Role:</strong> ${p.role}</p>
        <p><strong>Date:</strong> ${p.date}</p>
        <a href="${p.link}" target="_blank">View Project</a>
       </div>
       <div class="experiment-image">
        <img src="${p.image}" alt="${p.name}">
       </div>
      `

      container.appendChild(div);

      console.log(p.image);
    });
  });


  // Copy function

// Copy phone number
const phoneEl = document.getElementById("phonenumber");

if (phoneEl) {
  phoneEl.addEventListener("click", function () {
    const text = "0375011575";

    navigator.clipboard.writeText(text)
      .then(() => console.log("Copied:", text))
      .catch(err => console.error(err));
  });
}