build = () => {
  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      alert(`Thank you, ${name}! Your message has been sent.`);
      this.reset();
    });

  const toggleBtn = document.getElementById("toggleResumeBtn");
  const resumeCollapse = document.getElementById("resumePDF");

  resumeCollapse.addEventListener("shown.bs.collapse", () => {
    toggleBtn.textContent = "Hide Resume";
  });

  resumeCollapse.addEventListener("hidden.bs.collapse", () => {
    toggleBtn.textContent = "Show Resume";
  });
};

build();
