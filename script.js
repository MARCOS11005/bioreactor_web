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

// Función segura para actualizar un valor si el elemento existe y el dato es válido
function actualizarElemento(id, valor) {
  const el = document.getElementById(id);
  if (el) {
    if (valor !== null && !isNaN(valor)) {
      el.textContent = parseFloat(valor).toFixed(1);
    } else {
      el.textContent = "No data";
    }
  } else {
    console.warn(`⚠️ El elemento con id "${id}" no existe en el DOM`);
  }
}

// Escuchar todos los sensores de una vez (opcional y eficiente)
firebase.database().ref("sensores").on("value", function(snapshot) {
  const data = snapshot.val();
  console.log("📦 Datos completos:", data);

  actualizarElemento("temperatura", data?.temperatura);
  actualizarElemento("presion", data?.presion);
  actualizarElemento("humedad", data?.humedad);
  actualizarElemento("ph", data?.ph);
});
