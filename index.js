function AmountChange(){
    document.getElementById("txtAmount").value = document.getElementById("rangeAmount").value;
    
}
function YearsChange(){
    document.getElementById("txtYears").value = document.getElementById("rangeYears").value;
}
function RateChange(){
    document.getElementById("txtRate").value = document.getElementById("rangeRate").value;
}
function calculateclick(){

    let P = parseInt(document.getElementById("txtAmount").value);
    let R = parseFloat(document.getElementById("txtRate").value)/12/100;
    let N = parseInt(document.getElementById("txtYears").value)*12;
    let EMI = P * R * Math.pow(1+R, N)/ Math.pow(1+R,N)-1;
    document.getElementById("result").innerHTML = `Your Monthly Installment Amount is <b>&#8377; ${Math.round(EMI)}</b> for <b>${N}</b> Months`
}