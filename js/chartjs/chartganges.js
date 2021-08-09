var ctx = document.getElementById('chartganges').getContext('2d');

var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'bar',

        // The data for our dataset
        data: {
            labels: ['Januari', 'Februari', 'Maart', 'April', 'Mei', 'Juni', 'Juli', 'Augustus', 'September', 'Oktober', 'November', 'December'],
            datasets: [{
                type: "bar",
                label: "Gemiddelde hoeveelheid neerslag (mm) per maand Bangladesh",
                backgroundColor: 'rgb(217,79,151,0.3)',
                borderColor: 'rgb(217,79,151)',
                borderWidth: '2',
                pointRadius: '0',
                fill: true,
                yAxisID: 'Y-axis-1',
                data: [5, 10, 30, 55, 235, 600, 680, 470, 350, 200, 35, 15]
            }, {
                type: "bar",
                label: "Gemiddelde hoeveelheid neerslag (mm) per maand Nederland",
                backgroundColor: 'rgb(5,82,159,0.3)',
                borderColor: 'rgb(5,82,159)',
                borderWidth: '1',
                pointRadius: '0',
                fill: true,
                yAxisID: 'Y-axis-1',
                data: [120, 90, 105, 115, 105, 135, 110, 125, 140, 105, 115, 118]
            }, {
                type: "line",
                label: 'Gemiddelde temperatuur Bangladesh',
                backgroundColor: 'rgb(217,82,159)',
                borderColor: 'rgb(217,79,151)',
                borderWidth: '5.5',
                pointRadius: '0',
                fill: false,
                yAxisID: 'Y-axis-2',
                order: 1,
                data: [20, 23, 26, 28, 28, 27, 26, 26, 26, 26, 24, 22]
            }, {
                type: "line",
                label: 'Gemiddelde neerslag Amsterdam',
                backgroundColor: 'rgb(5,82,159)',
                borderColor: 'rgb(5,82,159)',
                borderWidth: '4',
                pointRadius: '0',
                fill: false,
                yAxisID: 'Y-axis-2',
                order: 1,
                data: [12, 14, 16, 21, 24, 27, 28, 29, 26, 22, 17, 13]
            }],
        },

        // Configuration options go here
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                easing: 'linear',
                duration: 1700
            },
            scales: {
                yAxes: [{
                    id: 'Y-axis-1',
                    type: 'linear',
                    position: 'left',
                    ticks: {
                        beginAtZero: true
                    }
                }, {
                    id: 'Y-axis-2',
                    type: 'linear',
                    position: 'right',
                    ticks: {
                        beginAtZero: true
                    }
                }],
                title: {
                    display: true,
                    text: 'Custom Chart Title'
                },
                legend: {
                    display: true
                },
            },
        }
    });
