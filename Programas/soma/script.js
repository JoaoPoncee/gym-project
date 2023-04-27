const inputFirstNumber = document.querySelector("#firstNumber");
const inputSecondNumber = document.querySelector("#secondNumber");
const buttonAdd = document.querySelector("#btnAdd");
const divShow = document.querySelector("#show");



buttonAdd.addEventListener("click", () => {
    let add = Number(inputFirstNumber.value)+Number(inputSecondNumber.value);
    divShow.innerHTML=`<p>Resultado = ${add}</p>`
   
}
);
