function calcularPromedio(fila) {
    const partidasJugadas = parseInt(fila.querySelector('.partidas-jugadas').textContent, 10);
    const puntosTotales = parseInt(fila.querySelector('.puntos-totales').textContent, 10);
    const promedio = partidasJugadas > 0 ? puntosTotales / partidasJugadas : 0;
    fila.querySelector('.promedio-puntos').textContent = promedio.toFixed(2);
}

function aniadirPartida() {
    const filas = document.querySelectorAll('tbody tr');
    filas.forEach(fila => {
        const select = fila.querySelector('select');
        const rendimiento = parseInt(select.value, 10);
        if (rendimiento > 0) {
            const partidasCelda = fila.querySelector('.partidas-jugadas');
            let partidasJugadas = parseInt(partidasCelda.textContent, 10);
            partidasJugadas += 1;
            partidasCelda.textContent = partidasJugadas;
            const puntosTotalesCelda = fila.querySelector('.puntos-totales');
            let puntosTotales = parseInt(puntosTotalesCelda.textContent, 10);
            puntosTotales += rendimiento;
            puntosTotalesCelda.textContent = puntosTotales;
            calcularPromedio(fila);
            select.value = 0; 
        }
    });
}