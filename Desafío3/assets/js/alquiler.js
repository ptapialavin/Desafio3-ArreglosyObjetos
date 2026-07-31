document.addEventListener('DOMContentLoaded', () => {
  const contenedorAlquiler = document.getElementById('listado-alquiler');

  if (contenedorAlquiler) {
    let html = '';
    for (const propiedad of propiedades_alquiler) {
      html += crearTarjeta(propiedad);
    }
    contenedorAlquiler.innerHTML = html;
  }
});
