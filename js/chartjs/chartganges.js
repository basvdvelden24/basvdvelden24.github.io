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
                backgroundColor: 'rgb(22, 214, 240,0.3)',
                borderColor: 'rgb(22, 214, 240)',
                borderWidth: '2',
                pointRadius: '0',
                fill: true,
                yAxisID: 'Y-axis-1',
                data: [5, 10, 30, 55, 235, 600, 680, 470, 350, 200, 35, 15]
            }, {
                type: "bar",
                label: "Gemiddelde hoeveelheid neerslag (mm) per maand Nederland",
                backgroundColor: 'rgb(26, 88, 235,0.3)',
                borderColor: 'rgb(26, 88, 235)',
                borderWidth: '2',
                pointRadius: '0',
                fill: true,
                yAxisID: 'Y-axis-1',
                data: [120, 90, 105, 115, 105, 135, 110, 125, 140, 105, 115, 118]
            }, {
                type: "line",
                label: 'Gemiddelde temperatuur Bangladesh in °C',
                backgroundColor: 'rgb(250, 10, 10)',
                borderColor: 'rgb(250, 20, 20)',
                borderWidth: '5',
                pointRadius: '0',
                fill: false,
                yAxisID: 'Y-axis-2',
                order: 1,
                data: [20, 23, 26, 28, 28, 27, 26, 26, 26, 26, 24, 22]
            }, {
                type: "line",
                label: 'Gemiddelde temperatuur Nederland in °C',
                backgroundColor: 'rgb(166, 5, 5)',
                borderColor: 'rgb(166, 5, 5)',
                borderWidth: '5',
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
                duration: 2700
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
