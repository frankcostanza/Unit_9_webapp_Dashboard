
/**FIRST CHART**/

var myLineChart = document.getElementById("myLineChart").getContext('2d');
var myLineChart = new Chart(myLineChart, {
type: 'line',
    data: {
        labels: ["CW1", "CW2", "CW3", "CW4", "CW5", "CW6", "CW7", "CW8", "CW9"],
        datasets: [{
            borderColor: 'grey',
            data: [500, 700, 200, 1500, 200, 800, 900, 2000, 700],
            lineTension: 0,
            pointRadius: 6,
            pointHoverRadius: 10,
            pointBackgroundColor: 'lightblue'
        }]
    },
    options: {
        legend: {
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:false
                }
            }]
        }
    }
});



/** SECOND CHART **/

var myBarChart = document.getElementById("myBarChart").getContext('2d');
var myChart = new Chart(myBarChart, {
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label:false,
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(138,105,255,0.7)',
                'rgba(138,105,255,0.7)',
                'rgba(138,105,255,0.7)',
                'rgba(138,105,255,0.7)',
                'rgba(138,105,255,0.7)',
                'rgba(138,105,255,0.7)'
            ],
            borderColor: [
                'rgba(138,105,255,1)',
                'rgba(138,105,255,1)',
                'rgba(138,105,255,1)',
                'rgba(138,105,255,1)',
                'rgba(138,105,255,1)',
                'rgba(138,105,255,1)'
            ],
            borderWidth: 2
        }]
    },
    options: {
            legend: {
                display: false
             },

            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero:true
                }
            }]
        }
    }
});

/** THIRD CHART **/
var plattform = document.getElementById('platform').getContext('2d');
var chartPlatform = new Chart(platform, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            label: true,
            data: [600, 350, 700],
            backgroundColor: [
                'rgb(138,105,255)',
                'rgb(152, 207, 9)',
                'rgb(27,29,211)',
            ],
        }]
    },
    options: {
        legend: {
            position: 'top'
        }
    }
});
