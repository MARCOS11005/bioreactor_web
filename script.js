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

let ultimaData = {};

function actualizarElemento(id, valor) {
  const el = document.getElementById(id);
  if (!el) {
    console.warn(`⚠️ El elemento con id "${id}" no existe en el DOM`);
    return;
  }

  // Evitar actualizar si el valor no cambió
  if (ultimaData[id] !== valor) {
    if (valor !== null && !isNaN(valor)) {
      el.textContent = parseFloat(valor).toFixed(1);
    } else {
      el.textContent = "No data";
    }
    ultimaData[id] = valor;
  }
}

firebase.database().ref("sensores").on("value", function(snapshot) {
  const data = snapshot.val();
  if (!data) return;
  
  console.log("📦 Datos completos:", data);

  actualizarElemento("temperatura", data.temperatura);
  actualizarElemento("presion", data.presion);
  actualizarElemento("humedad", data.humedad);

  const phEl = document.getElementById("ph");
  if (phEl && data.ph !== null) {
    phEl.textContent = data.ph + " s";   // ejemplo: "12 s"
  }
  
});
