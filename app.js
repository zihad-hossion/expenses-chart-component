const data = fetch('data.json')
    .then(response => response.json())
    .then(data => {
        return data;})
    .catch(error => console.log(error));

// Convert data into array
let chartContainer = document.querySelector('.chart-container');
data.then(data => {
    data.forEach(item => {
        let chart = document.createElement('div');
        chart.classList.add('chart');
        const height = item.amount / 7;
        let value = "";
        if (item.day === "wed") {
            value = `<article class="chart-wrapper">
            <div class="chart-amount">$${item.amount}</div>
            <div class="chart-value active" style="--height:${height}rem"></div>
            </article>`;
        } else {
            value = `<article class="chart-wrapper">
            <div class="chart-amount">$${item.amount}</div>
            <div class="chart-value" style="--height:${height}rem"></div>
            </article>`
        }
        chart.innerHTML = `${value}
        <div class="chart-title">${item.day}</div>`;
        chartContainer.appendChild(chart);
    })})
