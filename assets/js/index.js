document.addEventListener('DOMContentLoaded', () => {
  const ventaContainer = document.getElementById('venta-container');
  const alquilerContainer = document.getElementById('alquiler-container');

  
  const propiedadesVentaHome = propiedades_venta.slice(0, 3);
  const propiedadesAlquilerHome = propiedades_alquiler.slice(0, 3);

  if (ventaContainer) {
    let htmlVenta = '';
    for (const propiedad of propiedadesVentaHome) {
      htmlVenta += renderizarTarjetaPropiedad(propiedad);
    }
    ventaContainer.innerHTML = htmlVenta;
  }

  if (alquilerContainer) {
    let htmlAlquiler = '';
    for (const propiedad of propiedadesAlquilerHome) {
      htmlAlquiler += renderizarTarjetaPropiedad(propiedad);
    }
    alquilerContainer.innerHTML = htmlAlquiler;
  }
});