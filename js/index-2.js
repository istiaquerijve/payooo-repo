// 
function getInputValueNumber(id) {
   const inputField =  document.getElementById(id)
   const inputFieldValue = inputField.value
   const inputFieldValueNumber = parseInt(inputFieldValue) 
   return inputFieldValueNumber
}

//
function getInnerText(id) {
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
}




// 
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

    // 
       const data = {
        name: 'add money',
        date: new Date().toLocaleTimeString()
       }
       tData.push(data)
    // 
})


//cash out

document.getElementById("out-btn").addEventListener("click", function (e) {
    e.preventDefault()
    // const amount = getElementById("w-a")  
     parseInt(document.getElementById("w-a").value)
    // const avBalance = getInnerText("balance")
    const avBalance = parseInt(document.getElementById("balance").innerText)
    const totalBalance = avBalance - amount
    document.getElementById("balance").innerText = totalBalance
})


// toggling

document.getElementById("money-in").addEventListener("click", function () {
    document.getElementById("cash-out").style.display = "none"
    document.getElementById("transactions-page").style.display = "none" 
    document.getElementById("Transfer-page").style.display = "none" 
    document.getElementById("add-money").style.display = "block"
})    


document.getElementById("money-out").addEventListener("click", function () {
    document.getElementById("add-money").style.display = "none"
    document.getElementById("transactions-page").style.display = "none" 
    document.getElementById("Transfer-page").style.display = "none" 
    document.getElementById("cash-out").style.display = "block"
})    


// 

document.getElementById("Transfer-btn").addEventListener("click", function () {
    document.getElementById("add-money").style.display = "none"
    document.getElementById("cash-out").style.display = "none"
    document.getElementById("transactions-page").style.display = "none" 
    document.getElementById("Transfer-page").style.display = "block" 
})

// 
document.getElementById("Transactions-btn").addEventListener("click", function () {
    document.getElementById("add-money").style.display = "none"
    document.getElementById("cash-out").style.display = "none"
    document.getElementById("Transfer-page").style.display = "none" 
    document.getElementById("transactions-page").style.display = "block" 
})




// data 
 
const tData = []