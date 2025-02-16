function bill() {
    let billAmount = parseFloat(document.getElementById("billAmount").value);
    let tipPercentage = parseFloat(document.getElementById("percentageTip").value);

    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert("Please enter valid numbers for both fields.");
        return;
    }

    let tipAmount = (billAmount * tipPercentage) / 100;
    let totalBill = billAmount + tipAmount;

    document.getElementById("tipAmount").textContent = `Tip Amount: ₹${tipAmount.toFixed(2)}`;
    document.getElementById("totalBill").textContent = `Total Bill: ₹${totalBill.toFixed(2)}`;
}
