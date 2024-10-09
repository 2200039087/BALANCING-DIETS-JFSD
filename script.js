document.getElementById("health-report-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    const bp = document.getElementById("bp").value;
    const heartRate = document.getElementById("heart-rate").value;

    // Create a new row in the report table
    const reportBody = document.getElementById("report-body");
    const newRow = reportBody.insertRow();
    newRow.insertCell(0).innerText = new Date().toLocaleDateString(); // Current date
    newRow.insertCell(1).innerText = weight;
    newRow.insertCell(2).innerText = height;
    newRow.insertCell(3).innerText = bp;
    newRow.insertCell(4).innerText = heartRate;

    // Clear the form
    this.reset();
});
