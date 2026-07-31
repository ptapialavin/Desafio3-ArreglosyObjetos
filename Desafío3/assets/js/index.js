document.addEventListener('DOMContentLoaded', () => {
  const contenedorVenta = document.getElementById('contenedor-venta');
  const contenedorAlquiler = document.getElementById('contenedor-alquiler');

  const destacadasVenta = propiedades_venta.slice(0, 3);
  const destacadasAlquiler = propiedades_alquiler.slice(0, 3);

  if (contenedorVenta) {
    let html = '';
    for (const propiedad of destacadasVenta) {
      html += crearTarjeta(propiedad);
    }
    contenedorVenta.innerHTML = html;
  }

  if (contenedorAlquiler) {
    let html = '';
    for (const propiedad of destacadasAlquiler) {
      html += crearTarjeta(propiedad);
    }
    contenedorAlquiler.innerHTML = html;
  }
});
