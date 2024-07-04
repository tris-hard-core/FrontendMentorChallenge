const toggleResultsBtn = document.getElementById("btn-submit");
const resultEmpty = document.querySelector(".result-empty");
const resultComplete = document.querySelector(".result-complete");

function showEmpty() {
    resultEmpty.style.display = "flex";
    resultComplete.style.display = "none";
}

function showComplete() {
    resultEmpty.style.display = "none";
    resultComplete.style.display = "flex";
}

toggleResultsBtn.addEventListener("click", function () {
    if (resultEmpty.style.display === "none") {
        showEmpty();
    } else {
        showComplete();
    }
});

function clearForm() {
    document.getElementById("mort-amount").value = "";
    document.getElementById("mort-term").value = "";
    document.getElementById("inter-rate").value = "";

    document.getElementById("repayment").checked = false;
    document.getElementById("interest-only").checked = false;
}

const toggleClear = document.querySelector(".clear");
toggleClear.addEventListener("click", function () {
    console.log("clicked");
    clearForm();
});
