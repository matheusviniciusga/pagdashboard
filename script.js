document.addEventListener("DOMContentLoaded", function(event) {
// Mock data for illustration, replace with real data
const ageData = {
    labels: ['0-3', '6-10', '11-14', '16-18'],
    datasets: [{
        label: 'Faixa etária',
        data: [15, 25, 30, 20], // Replace with real data
        borderColor: 'rgba(166, 66, 244)',
        borderWidth: 1,
        fill: false
    }]
};

const networkData = {
    labels: ['Estadual', 'Particular', 'Municipal'],
    datasets: [{
        data: [40, 30, 30], // Replace with real data
        backgroundColor: ['rgba(21, 91, 203)', 'rgba(166, 66, 244)', 'rgba(239, 184, 16)'],
    }]
};

const timeData = {
    labels: ['Manhã', 'Diurno', 'Noturno', 'Integral'],
    datasets: [{
        label: 'Horário/turno',
        data: [25, 30, 20, 25], // Replace with real data
        backgroundColor: ['rgba(166, 66, 244)', 'rgba(166, 66, 244)', 'rgba(166, 66, 244)', 'rgba(166, 66, 244)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1
    }]
};

const raceData = {
    labels: ['Indígena', 'Preto', 'Pardo', 'Amarelo', 'Branco'],
    datasets: [{
        data: [5, 35, 25, 15, 20], // Replace with real data
        backgroundColor: ['rgba(48, 183, 127)', 'rgba(166, 66, 244)', 'rgba(239, 184, 16)', 'rgba(21, 91, 203)', 'rgba(198, 0, 3)']
        
    }]
};

// Render charts
renderChart('ageChart', 'line', ageData);
renderChart('networkChart', 'doughnut', networkData);
renderChart('timeChart', 'bar', timeData);
renderChart('raceChart', 'pie', raceData);

function renderChart(id, type, data) {
    const ctx = document.getElementById(id).getContext('2d');
    new Chart(ctx, {
        type: type,
        data: data,
    });
}
});