function mostrarMensaje(seccion) {
    alert(`Has hecho clic en la ${seccion}`);
}

// Asociar función a las secciones
document.getElementById("seccion1").onclick = () => mostrarMensaje("Sección 1");
document.getElementById("seccion2").onclick = () => mostrarMensaje("Sección 2");
document.getElementById("seccion3").onclick = () => mostrarMensaje("Sección 3");
