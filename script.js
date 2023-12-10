document.addEventListener("DOMContentLoaded", function(event) {

const ageData = {
    labels: ['0-3', '6-10', '11-14', '15-18', '19-25'],
    datasets: [{
        label: 'Faixa etária',
        data: [39, 47, 67, 98, 34],
        borderColor: 'rgba(166, 66, 244)',
        borderWidth: 1,
        fill: false
    }]
};

const networkData = {
    labels: ['Municipal', 'Estadual', 'Federal', 'Particular'],
    datasets: [{
        data: [75, 136, 17, 73],
        backgroundColor: ['rgba(21, 91, 203)', 'rgba(166, 66, 244)', 'rgba(239, 184, 16)', 'rgba(150, 190, 9)'],
    }]
};

const timeData = {
    labels: ['Manhã', 'Integral'],
    datasets: [{
        label: 'Horário/Turno',
        data: [237, 84],
        backgroundColor: ['rgba(166, 66, 244)', 'rgba(166, 66, 244)', 'rgba(166, 66, 244)', 'rgba(166, 66, 244)'],
        borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
        borderWidth: 1
    }]
};

const raceData = {
    labels: ['Indígena', 'Preto', 'Pardo', 'Amarelo', 'Branco'],
    datasets: [{
        data: [19, 650, 215, 124, 332],
        backgroundColor: ['rgba(48, 183, 127)', 'rgba(166, 66, 244)', 'rgba(239, 184, 16)', 'rgba(21, 91, 203)', 'rgba(198, 0, 3)']
        
    }]
};

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

function downloadChart(chartId, filename) {
  const canvas = document.getElementById(chartId);
  
  const downloadLink = document.createElement('a');
  downloadLink.href = canvas.toDataURL('image/png');
  downloadLink.download = filename;
  
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

const team = [
    {
      name: "Mariana dos Anjos",
      photo: "img/fotomari.jpg",
      social: "https://www.linkedin.com/in/mariana-dos-anjos-851030260"
    },
    {
      name: "Maria Cecília Sitcovsky",
      photo: "img/fotocecilia.jpg",
      social: "link_para_a_rede_social_2"
    },
    {
      name: "Giovanna Gabriela",
      photo: "img/fotogio.jpg",
      social: "https://www.linkedin.com/in/giovanna-gabriela-44b726270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    },
    {
      name: "Matheus Vinícius",
      photo: "img/fotomatheus.jpg",
      social: "https://www.linkedin.com/in/matheusviniciusga/"
    },
    {
      name: "Carlos Eduardo",
      photo: "img/fotocarlos.jpg",
      social: "https://www.linkedin.com/in/eduardo-lima-177w"
    },
  ];
  
  function displayTeam() {
    const teamContainer = document.getElementById('team-container');
  
    team.forEach((member, index) => {
      const memberDiv = document.createElement('div');
      memberDiv.classList.add('member');
  
      const memberImg = document.createElement('img');
      memberImg.src = member.photo;
      memberImg.alt = `Foto de ${member.name}`;
  
      const memberInfo = document.createElement('div');
      memberInfo.classList.add('member-info');
      memberInfo.innerHTML = `
        <h2>${member.name}</h2>
        <a href="${member.social}" target="_blank">LinkedIn</a>
      `;
  
      memberDiv.appendChild(memberImg);
      memberDiv.appendChild(memberInfo);
      teamContainer.appendChild(memberDiv);
  
      if ((index + 1) % 3 === 0 && index < team.length - 1) {
        memberDiv.classList.add('extra-margin');
      }
    });
  }
  
  window.onload = displayTeam;