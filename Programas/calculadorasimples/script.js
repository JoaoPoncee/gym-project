const inputFirstValue = document.querySelector("#firstValue");
const inputSecondValue = document.querySelector("#secondValue");
const showValue = document.querySelector("#showValue");
const buttonAddition = document.querySelector("#btnAddition");
const buttonSubtraction = document.querySelector("#btnSubtraction");
const buttonMultiplication = document.querySelector("#btnMultiplication");
const buttonDivision = document.querySelector("#btnDivision");
const buttonClear = document.querySelector("#btnClear");

buttonAddition.addEventListener("click", () =>{
    if(inputFirstValue == String || inputSecondValue == String){
        alert('Invalid Number');
    }else{
        let add = Number(inputFirstValue.value)+Number(inputSecondValue.value);
    showValue.innerHTML = `<p>${add}</p>`;
    }
    
});
buttonSubtraction.addEventListener("click", () =>{
    if(inputFirstValue == String || inputSecondValue == String){
        alert('Invalid Number');
    }else{
        let sub = Number(inputFirstValue.value)-Number(inputSecondValue.value);
    showValue.innerHTML = `<p>${sub}</p>`;
    }
});
buttonMultiplication.addEventListener("click", () =>{
    if(inputFirstValue == String || inputSecondValue == String){
        alert('Invalid Number');
    }else{
        let mult = Number(inputFirstValue.value)*Number(inputSecondValue.value);
    showValue.innerHTML = `<p>${mult}</p>`;
    }
});
buttonDivision.addEventListener("click", () =>{
    if(inputFirstValue == String || inputSecondValue == String){
        alert('Invalid Number');
    }else{
        let div = Number(inputFirstValue.value)/Number(inputSecondValue.value);
    showValue.innerHTML = `<p>${div}</p>`;
    }
});
buttonClear.addEventListener("click", () =>{
    
    showValue.innerHTML = ``;
    inputFirstValue.value = ``;
    inputSecondValue.value = ``;
})


