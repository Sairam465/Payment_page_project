function calculateTotal() {
    let quantity = document.getElementById("quantity").value;
    let price = 1000;
    let subtotal = quantity * price;
    let tax = subtotal * 0.18;
    let total = subtotal + tax;
    
    document.getElementById("subtotal").innerText = subtotal;
    document.getElementById("tax").innerText = tax.toFixed(2);
    document.getElementById("total").innerText = total.toFixed(2);
}

function processPayment() {
    document.getElementById("pay-now").style.display = "none";
    document.getElementById("loading").classList.remove("hidden");
    
    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");
        let success = Math.random() > 0.5;
        let statusText = success ? "Payment Successful!" : "Payment Failed. Please try again.";
        let statusColor = success ? "green" : "red";
        
        let statusElement = document.getElementById("payment-status");
        statusElement.innerText = statusText;
        statusElement.style.color = statusColor;
        statusElement.classList.remove("hidden");
    }, 10000);
}
