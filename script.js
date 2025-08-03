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

firebase.database().ref("sensores/temperatura").on("value", function(snapshot) {
  const val = snapshot.val();
  document.getElementById("temp").textContent = val !== null ? val.toFixed(1) : "No data";
});

firebase.database().ref("sensores/presion").on("value", function(snapshot) {
  const val = snapshot.val();
  document.getElementById("pres").textContent = val !== null ? val.toFixed(1) : "No data";
});

firebase.database().ref("sensores/humedad").on("value", function(snapshot) {
  const val = snapshot.val();
  document.getElementById("hum").textContent = val !== null ? val.toFixed(1) : "No data";
});

firebase.database().ref("sensores/ph").on("value", function(snapshot) {
  const val = snapshot.val();
  document.getElementById("ph").textContent = val !== null ? val.toFixed(1) : "No data";
});
