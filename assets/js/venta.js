document.addEventListener('DOMContentLoaded', () => {
  const contenedorVenta = document.getElementById('venta-todas-container');

  if (contenedorVenta) {
    let html = '';
    for (const propiedad of propiedades_venta) {
      html += renderizarTarjetaPropiedad(propiedad);
    }
    contenedorVenta.innerHTML = html;
  }
});