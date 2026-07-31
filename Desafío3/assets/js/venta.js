document.addEventListener('DOMContentLoaded', () => {
  const contenedorVenta = document.getElementById('listado-venta');

  if (contenedorVenta) {
    let html = '';
    for (const propiedad of propiedades_venta) {
      html += crearTarjeta(propiedad);
    }
    contenedorVenta.innerHTML = html;
  }
});
