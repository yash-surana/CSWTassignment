let luckyDiv = document.querySelector(".lucky-draw");
let winButton = document.querySelector(".lucky-btn");
let discountCodes = ["10%","20%","30%","40%","50%"];

function random(num){
    return Math.floor((Math.random()*num));
};

function luckyDraw(){
    let winResult = document.createElement("h1");
    winResult.innerHTML = "Congratulations!"+"<br>" + "You have won " + "<font color = '#E11D48'>" + discountCodes[random(discountCodes.length)]+"</font>";
    luckyDiv.insertBefore(winResult,winButton);
    winButton.innerText = "Coupon has been generated";
    winButton.disabled = true;
    winButton.style.cursor = "not-allowed";
    alert("Discount will be applied at checkout.")
    

}

winButton.addEventListener("click",luckyDraw);