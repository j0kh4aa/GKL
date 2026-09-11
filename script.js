// Mobile nav toggle — shows/hides the nav-links dropdown on small screens
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.textContent = isOpen ? "✕" : "☰";
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.textContent = "☰";
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});

// Roster division filter — only runs if a division bar is present on the page
document.addEventListener("DOMContentLoaded", () => {
  const chips = document.querySelectorAll(".division-chip");
  const cards = document.querySelectorAll(".fighter-card");
  if (!chips.length) return;

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      const div = chip.dataset.div;
      cards.forEach((card) => {
        card.style.display =
          div === "all" || card.dataset.div === div ? "" : "none";
      });
    });
  });
});
