const inputWeight = document.querySelector("#inputWeight");
const inputHeight = document.querySelector("#inputHeight");
const divCalculate  = document.querySelector("#divCalculate");
const buttonCalculate = document.querySelector("#buttonCalculate");
const h1Result = document.querySelector("#h1Result");
const buttonClear = document.querySelector("#buttonClear")

console.log(typeof inputHeight.value);


    h1Result.style.display = "none"
function calculateIMC() {
    
    h1Result.style.display="block"
    divCalculate.innerHTML="<h1>Resultado</h1>";
    const imc = inputWeight.value / (inputHeight.value*inputHeight.value);
    
    if(imc < 18.5){
        divCalculate.innerHTML+=`<p>Seu IMC é ${imc.toFixed(2)}, Estado: MAGREZA</p>`
    }else if(imc >= 18.5 && imc <= 24.9){
        divCalculate.innerHTML+=`<p>Seu IMC é ${imc.toFixed(2)}, Estado: NORMAL</p>`
    }else if(imc >= 25 && imc <= 29.9){
        divCalculate.innerHTML+=`<p>Seu IMC é ${imc.toFixed(2)}, Estado: SOBREPESO</p>`
    }else if(imc >= 30 && imc <= 39,9){
        divCalculate.innerHTML+=`<p>Seu IMC é ${imc.toFixed(2)}, Estado: OBESIDADE</p>`
    }else if(imc >= 40){
        divCalculate.innerHTML+=`<p>Seu IMC é ${imc.toFixed(2)}, Estado: OBESIDADE GRAVE</p>`
    }
}


buttonCalculate.addEventListener("click", () =>{
    if(inputHeight.value === "" || inputWeight.value === "" ||
    inputHeight.value !== Number || inputWeight.value !== Number){
        alert('Valor inválido! Digite um valor')
    }else{
        calculateIMC()
    }
    
})

buttonClear.addEventListener("click", () => {
    divCalculate.innerHTML=" ";
    inputHeight.value=" ";
    inputWeight.value=" ";
})



document.addEventListener("keypress", (e) => {
    const el = e.key;
    console.log(el);
    if (el == "Enter"){
        if(inputHeight.value === "" || inputWeight.value === "" || 
        inputHeight.value !== Number || inputWeight.value !== Number){
            alert('Valor inválido! Digite um valor')
        }else{
        calculateIMC();
        }   
    }
})

