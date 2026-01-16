const messages = [
      "Welcome to my space.",
      "No boxes. No frames.",
      "Just words, floating freely.",
      "One thought at a time."
    ];

    const target = document.getElementById("message");
    let index = 0;

    function showMessage() {
      if (index >= messages.length) {
        setTimeout(showNamePopup, 600);
        return;
      }

      target.textContent = messages[index];
      target.style.opacity = 0;
      target.style.transform = "translateY(16px)";
      target.style.transition = "opacity 1.2s ease, transform 1.2s ease";

      requestAnimationFrame(() => {
        target.style.opacity = 1;
        target.style.transform = "translateY(0)";
      });

      setTimeout(() => {
        target.style.opacity = 0;
        target.style.transform = "translateY(-16px)";

        setTimeout(() => {
          index++;
          showMessage();
        }, 1200);
      }, 2000);
    }

    function showNamePopup() {
      document.getElementById("nameOverlay").style.display = "flex";
    }

    function saveName() {
      const name = document.getElementById("nameInput").value.trim();
      if (!name) return;
      localStorage.setItem("userName", name);
      document.getElementById("nameOverlay").style.display = "none";
      // name is saved for later use
      // no message is shown now
    }

    showMessage();