const manualBtn = document.getElementById("manual-btn");
    const autoBtn = document.getElementById("auto-btn");
    const manualControls = document.getElementById("manual-controls");
    const modoTexto = document.getElementById("modo");

    manualBtn.addEventListener("click", () => {
      manualControls.style.display = "flex";
      modoTexto.textContent = "Manual";
    });

    autoBtn.addEventListener("click", () => {
      manualControls.style.display = "none";
      modoTexto.textContent = "Automático";
    });