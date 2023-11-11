google.charts.load('current', {packages: ['corechart', 'geochart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Gráfico de média de idade dos alunos
    var dataMediaAlunos = google.visualization.arrayToDataTable([
        ['Idade', 'Alunos'],
        [15, 7.5],
        [18, 9.0],
        [21, 4.5],
        [25, 2.5],
    ]);

    var optionsMediaAlunos = {
        title: 'Média de Idade dos Alunos do Ensino Médio',
        hAxis: {title: 'Idade', minValue: 16, maxValue: 25},
        vAxis: {title: 'Alunos', minValue: 0, maxValue: 10.0},
        legend: 'none'
    };

    var chartMediaAlunos = new google.visualization.ScatterChart(document.getElementById('media_alunos'));
    chartMediaAlunos.draw(dataMediaAlunos, optionsMediaAlunos);

    // Gráfico de frequência de raças nas instituições
    var dataFrequenciaRacas = google.visualization.arrayToDataTable([
        ['Raça/cor', 'Instituição Pública', 'Instituição Privada'],
        ['Branco', 38, 62],
        ['Preto', 67, 33],
        ['Outros', 56, 44]
    ]);
    
    var optionsFrequenciaRacas = {
        title: 'Frequência de Raças nas Instituições',
        colors: ['#3160D7', '#add8e6', '#ec8f6e'],
    };
    
    var chartFrequenciaRacas = new google.visualization.BarChart(document.getElementById('barras'));
    chartFrequenciaRacas.draw(dataFrequenciaRacas, optionsFrequenciaRacas);

    

    // Gráfico de taxa de aprovação por instituição
    var dataTaxaAprov = google.visualization.arrayToDataTable([
        ["Element", "Density", { role: "style" } ],
        ["Federal", 87, "#3160D7"],
        ["Estadual", 94, "#3160D7"],
        ["Municipal", 96, "#3160D7"],
        ["Privada", 73, "#3160D7"]
    ]);

    var viewTaxaAprov = new google.visualization.DataView(dataTaxaAprov);
    viewTaxaAprov.setColumns([0, 1,
        { calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation" },
        2]);

    var optionsTaxaAprov = {
        title: "Taxa de Aprovação de acordo com a Instituição",
        width: 600,
        height: 400,
        bar: {groupWidth: "95%"},
        legend: { position: "none" },
    };

    var chartTaxaAprov = new google.visualization.ColumnChart(document.getElementById("tax_aprov"));
    chartTaxaAprov.draw(viewTaxaAprov, optionsTaxaAprov);

    // Gráfico de dados de inclusão nas escolas brasileiras
    var dataDadosInclusao = google.visualization.arrayToDataTable([
        ['Inclusão', 'Porcentagem'],
        ['Escolas Inclusas', 27],
        ['Escolas Não Inclusas', 14],
    ]);

    var optionsDadosInclusao = {
        title: 'Dados de Inclusão nas Escolas Brasileiras',
        colors: ['#3160D7', '#add8e6', '#ec8f6e'],
    };

    var chartDadosInclusao = new google.visualization.PieChart(document.getElementById('dados_esc'));
    chartDadosInclusao.draw(dataDadosInclusao, optionsDadosInclusao);
}