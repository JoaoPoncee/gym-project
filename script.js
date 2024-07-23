function pageNavigation(day) {
  const novaURL = `add-training.html?day=${day}`;
  window.location.href = novaURL;
}

function backPage() {
  window.location.href = "index.html";
}

function openModal() {
  const modal = document.querySelector(".modal");
  const arrowBack = document.querySelector(".img-arrow, .back-home");
  arrowBack.style.display = "none";
  modal.style.display = "flex";
  const actualStyle = modal.style.display;
  if (actualStyle == "block") {
    modal.style.display = "none";
  } else {
    modal.style.display = "block";
  }
}

function closeModal() {
  const modal = document.querySelector(".modal");
  const arrowBack = document.querySelector(".img-arrow, .back-home");
  arrowBack.style.display = "block";
  modal.style.display = "none";
  nameExercise.value = " "
  repeatExercise.value = " "
  seriesExercise.value = " "
}

const nameExercise = document.querySelector(".input-form-exercise");
const repeatExercise = document.querySelector(".input-form-repeat");
const seriesExercise = document.querySelector(".input-form-series");

const btnWeek = document.querySelectorAll(".btn-week");
const btnAdd = document.querySelector("#btn-add");

btnAdd.addEventListener("click", (e) => {
  e.preventDefault();
  const params = new URLSearchParams(document.location.search);
  const day = params.get("day");
  // Recupera os dados existentes do localStorage
  let training = JSON.parse(localStorage.getItem(day)) || [];
  // Cria o novo objeto de treinamento
  let newTraining = {
    name: nameExercise.value,
    repeat: repeatExercise.value,
    series: seriesExercise.value,
  };
  // Adiciona o novo objeto à lista de treinamentos
  training.push(newTraining);
  // Salva a lista atualizada no localStorage
  localStorage.setItem(day, JSON.stringify(training));
  closeModal();

});
