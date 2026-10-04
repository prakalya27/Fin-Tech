function calculateLoan() {
    if (
    document.getElementById("customerName").value.trim() === "" ||
    document.getElementById("salary").value === "" ||
    document.getElementById("expenses").value === "" ||
    document.getElementById("loanAmount").value === "" ||
    document.getElementById("interestRate").value === "" ||
    document.getElementById("tenure").value === ""
) {

    document.getElementById("result").innerHTML =
        "⚠️ Please fill in all the fields before calculating.";

    return;
}

    let name = document.getElementById("customerName").value;

    let salary = Number(document.getElementById("salary").value);

    let expenses = Number(document.getElementById("expenses").value);

    let loanAmount = Number(document.getElementById("loanAmount").value);

    let interestRate = Number(document.getElementById("interestRate").value);

    let tenure = Number(document.getElementById("tenure").value);

    if (
        salary <= 0 ||
        expenses < 0 ||
        loanAmount <= 0 ||
        interestRate <= 0 ||
        tenure <= 0
    ) {

        document.getElementById("result").innerHTML =
            "WARNING: Please enter valid values greater than zero.";

        return;
    }

    if (expenses > salary) {

        document.getElementById("result").innerHTML =
            "WARNING: Your monthly expenses are higher than your salary.";

        return;
    }


    // Monthly income left after expenses

    let disposableIncome = salary - expenses;


    // Monthly interest rate

    let monthlyInterest = interestRate / 12 / 100;


    // Total number of monthly payments

    let months = tenure * 12;


    // EMI calculation

    let emi =
        loanAmount *
        monthlyInterest *
        Math.pow(1 + monthlyInterest, months)
        /
        (Math.pow(1 + monthlyInterest, months) - 1);


    // Income left after paying EMI

    let remainingIncome = disposableIncome - emi;

    let emiRatio = (emi / salary) * 100;


    // Loan affordability status

let message;
let statusClass;

if (remainingIncome < 0) {

    message = "Difficult";
    statusClass = "status-danger";

}
else if (remainingIncome < salary * 0.10) {

    message = "Tight";
    statusClass = "status-warning";

}
else {

    message = "Affordable";
    statusClass = "status-success";

}


    // Display result

    document.getElementById("result").innerHTML =

    "<div class='result-box'>" +

        "<div class='result-item'>" +
            "<div class='result-label'>Customer</div>" +
            "<div class='result-value'>" + name + "</div>" +
        "</div>" +

        "<div class='result-item'>" +
            "<div class='result-label'>Disposable Income</div>" +
            "<div class='result-value'>Rs. " +
            disposableIncome.toFixed(2) +
            "</div>" +
        "</div>" +

        "<div class='result-item'>" +
            "<div class='result-label'>Estimated EMI</div>" +
            "<div class='result-value'>Rs. " +
            emi.toFixed(2) +
            "</div>" +
        "</div>" +

        "<div class='result-item'>" +
            "<div class='result-label'>Remaining Income</div>" +
            "<div class='result-value'>Rs. " +
            remainingIncome.toFixed(2) +
            "</div>" +
        "</div>" +

        "<div class='result-item'>" +
            "<div class='result-label'>EMI-to-Income Ratio</div>" +
            "<div class='result-value'>" +
            emiRatio.toFixed(2) +
            "%" +
            "</div>" +
        "</div>" +

    "</div>" +

    "<br>" +

    "<div class ='" + statusClass + "'>" +
     " Loan Status:" + message +
     "</div>";

}
function resetForm() {

    document.getElementById("customerName").value = "";

    document.getElementById("salary").value = "";

    document.getElementById("expenses").value = "";

    document.getElementById("loanAmount").value = "";

    document.getElementById("interestRate").value = "";

    document.getElementById("tenure").value = "";

    document.getElementById("result").innerHTML =
        "Your result will appear here.";

}
