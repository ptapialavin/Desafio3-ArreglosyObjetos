document.addEventListener('DOMContentLoaded', () => {
  const contenedorAlquiler = document.getElementById('alquiler-todas-container');

  if (contenedorAlquiler) {
    let html = '';
    for (const propiedad of propiedades_alquiler) {
      html += renderizarTarjetaPropiedad(propiedad);
    }
    contenedorAlquiler.innerHTML = html;
  }
});