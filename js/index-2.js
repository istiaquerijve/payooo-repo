document.getElementById("add-money-btn").addEventListener("click", function (e) {
    e.preventDefault()

    console.log("add money btn");
    
    const bank = document.getElementById("bank").value
    const accNumber = document.getElementById("acc-number").value
    const amount = parseInt(document.getElementById("add-amo").value)
    const pin = document.getElementById("add-pin").value

    const avBalance = parseInt(document.getElementById("balance").innerText)
    // console.log(avBalance);
    
    if(accNumber.length < 11 && accNumber.length > 11){
        alert('provide full number')
        return;
    }


    const totalMoney = amount + avBalance;
    document.getElementById("balance").innerText = totalMoney
})


//cash out

document.getElementById("out-btn").addEventListener("click", function (e) {
    e.preventDefault()
    const amount = parseInt(document.getElementById("out-btn").value)
    const avBalance = parseInt(document.getElementById("balance").innerText)
    const totalBalance = avBalance - amount
    document.getElementById("balance").innerText = totalBalance
})


// toggling

document.getElementById("money-in").addEventListener("click", function () {
    document.getElementById("cash-out").style.display = "none"
    document.getElementById("add-money").style.display = "block"
})    


document.getElementById("money-out").addEventListener("click", function () {
    document.getElementById("add-money").style.display = "none"
    document.getElementById("cash-out").style.display = "block"
})    