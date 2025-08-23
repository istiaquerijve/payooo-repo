// loginBtn

document.getElementById('loginBtn').addEventListener("click", function (e) {
    e.preventDefault()
    const mobileNumber = 1234567890;
    const mobilPin = 1234;
    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueCon = parseInt(mobileNumberValue)
 
    const mobilPinValue = document.getElementById("mobile-pin").value
    const mobilPinValueCon = parseInt(mobilPinValue)

    // console.log(mobileNumberValueCon, mobilPinValueCon);
    
    if(mobileNumber === mobileNumberValueCon && mobilPin === mobilPinValueCon){
       window.location.href="./index-2.html"
    }
    else{
        alert("Invalid");
    }
})
