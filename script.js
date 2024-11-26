// Gráfico de Pizza com Chart.js (Infográfico)
const ctx = document.getElementById('energyPieChart').getContext('2d');
const energyPieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Energia Solar', 'Energia Eólica', 'Energia Hidrelétrica'],
        datasets: [{
            data: [30, 20, 50],
            backgroundColor: ['#ffcc00', '#00cc66', '#3399ff'],
            borderRadius: 8,
        }]
    },
    options: {
        responsive: true,
    }
});

// Calculadora de energia
document.getElementById('energyForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let solar = parseFloat(document.getElementById('solar').value);
    let eolica = parseFloat(document.getElementById('eolica').value);
    let hidreletrica = parseFloat(document.getElementById('hidreletrica').value);

    let total = solar + eolica + hidreletrica;

    if (total !== 100) {
        document.getElementById('resultado').innerHTML = "<p style='color: red;'>A soma das porcentagens deve ser igual a 100%.</p>";
    } else {
        document.getElementById('resultado').innerHTML = `
            <h3>Resultado</h3>
            <p><strong>Energia Solar:</strong> ${solar}%</p>
            <p><strong>Energia Eólica:</strong> ${eolica}%</p>
            <p><strong>Energia Hidrelétrica:</strong> ${hidreletrica}%</p>
            <p><strong>Total:</strong> 100%</p>
        `;
    }
});

// FAQ - Exibir Resposta ao Clicar
function openFAQ(id) {
    const faqElement = document.getElementById(id);
    faqElement.style.display = faqElement.style.display === "none" ? "block" : "none";
}

// Comparação entre Matrizes Energéticas
function showComparison() {
    Swal.fire({
        title: 'Comparação entre Matrizes Energéticas',
        html: '<strong>Brasil:</strong> 50% Hidrelétrica, 30% Solar, 20% Eólica<br>' +
              '<strong>Estados Unidos:</strong> 30% Hidrelétrica, 25% Solar, 40% Eólica',
        icon: 'info',
        confirmButtonText: 'Fechar'
    });
}
