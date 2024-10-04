function init_charts() {
    try {
        // Init tokenomics chart
        init_tokenomics_chart();
    } catch (e) {
        // console.error(e);
    }
}

function init_tokenomics_chart() {
    try {
        // Vars
        var ctx = document.getElementById("tokenomics_chart").getContext("2d");
        var type = "pie";

        // Data
        var data = {
            labels: [
                "Red",
                "Blue",
                "Yellow"
            ],
            datasets: [{
                label: "My First Dataset",
                data: [300, 50, 100],
                backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)"
                ],
                hoverOffset: 4
            }]
        }

        // Init new chart
        new Chart(ctx, {
            type: type,
            data: data
        });
    } catch (e) {
        // console.error(e);
    }
}