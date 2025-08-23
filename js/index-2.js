document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault()

    console.log("add money btn");
    
    const bank = document.getElementById("bank").value
    const accNumber = document.getElementById("acc-number").value
    const amount = parseInt(document.getElementById("add-amo").value)
    const pin = document.getElementById("add-pin").value

    const avBalance = parseInt(document.getElementById("balance").innerText)
    console.log(avBalance);
    
    const totalMoney = amount + avBalance;
    document.getElementById("balance").innerText = totalMoney
})