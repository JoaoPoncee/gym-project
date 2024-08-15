const nameExercise = document.querySelector(".input-form-exercise");
const repeatExercise = document.querySelector(".input-form-repeat");
const seriesExercise = document.querySelector(".input-form-series");
const modalAddTraining = document.querySelector("#btn-add");
const arrowBack = document.querySelector(".back-home");
const modalEditTraining = document.createElement("div");
const buttonUpdate = document.querySelector("#btn-update");
const overlay = document.querySelector(".overlay");
const inputEditName = document.createElement("input");
const inputEditSeries = document.createElement("input");
const inputEditRep = document.createElement("input");
const buttonAddTraining = document.querySelector(".btn-add-training");

function backPage() {
  window.location.href = "index.html";
}

function openModal(modalDiv) {
  const modal = document.querySelector(modalDiv);

  const actualStyle = modal.style.display;
  arrowBack.style.display = "none";
  modal.style.display = "flex";
  if (actualStyle == "block") {
    modal.style.display = "none";
    overlay.style.display = "none";
  } else {
    modal.style.display = "block";
    overlay.style.display = "flex";
  }
}

buttonAddTraining.addEventListener("click", () => openModal("#modal-add"));

function closeModal(modalDiv) {
  const modal = document.querySelector(modalDiv);
  const arrowBack = document.querySelector(".img-arrow, .back-home");
  arrowBack.style.display = "block";
  modal.style.display = "none";
  overlay.style.display = "none";
  nameExercise.value = " ";
  repeatExercise.value = " ";
  seriesExercise.value = " ";
}

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(document.location.search);
  const day = params.get("day");
  addTraining(day);
});

function editTraining() {
  // modalEditTraining.className = "modal-edit-training";
  // contentTraining.appendChild(modalEditTraining);
  openModal("#modal-edit");
  // inputEditName.className = "input-edit-name";
  // inputEditRep.className = "input-edit-rep"
  // inputEditSeries.className = "input-edit-series"

  // modalEditTraining.appendChild(inputEditName);
  // modalEditTraining.appendChild(inputEditRep);
  // modalEditTraining.appendChild(inputEditSeries);
}

function addTraining(day) {
  const trainingsContainer = document.getElementById("trainingsContainer");
  trainingsContainer.innerHTML = "";

  // Recupera os treinos do localStorage

  let training = JSON.parse(localStorage.getItem(day)) || [];

  // Itera sobre cada treino e cria os elementos necessários
  training.forEach((train) => {
    let divContent = document.createElement("div");
    divContent.className = "div-content";

    //Div dos treinos
    let divTraining = document.createElement("div");
    divTraining.className = "training";
    divTraining.setAttribute("data-exercise-id", train.id);
    divContent.appendChild(divTraining);

    let divExercise = document.createElement("div");
    divExercise.className = "exercise";
    divTraining.appendChild(divExercise);

    let pExercise = document.createElement("p");
    pExercise.className = "exercise-name";
    pExercise.innerHTML = train.name;
    divExercise.appendChild(pExercise);

    let pRepeatAndSeries = document.createElement("p");
    pRepeatAndSeries.className = "repeat-series";
    pRepeatAndSeries.innerHTML = `${train.repeat} x ${train.series}`;
    divExercise.appendChild(pRepeatAndSeries);

    let divBtnActions = document.createElement("div");
    divBtnActions.className = "div-btn-actions";
    divTraining.appendChild(divBtnActions);

    let btnPlus = document.createElement("button");
    btnPlus.className = "style";
    let imgPlus = document.createElement("img");
    imgPlus.src = "assets/img/plus.png";
    imgPlus.className = "icon-actions";
    btnPlus.appendChild(imgPlus);
    divBtnActions.appendChild(btnPlus);

    let btnTrash = document.createElement("button");
    btnTrash.className = "style";
    let imgTrash = document.createElement("img");
    imgTrash.src = "assets/img/trash.png";
    imgTrash.className = "icon-actions";
    btnTrash.appendChild(imgTrash);
    divBtnActions.appendChild(btnTrash);

    let btnPencil = document.createElement("button");
    btnPencil.className = "style edit-button";
    let imgPencil = document.createElement("img");
    imgPencil.src = "assets/img/pencil.png";
    imgPencil.className = "icon-actions";
    btnPencil.addEventListener("click", () => {
      modalEditTraining.style.display = "flex";
      editTraining();
    });
    btnPencil.appendChild(imgPencil);
    divBtnActions.appendChild(btnPencil);

    // function removeItemArray(){
    //   let training = JSON.parse(localStorage.getItem(day)) || [];
    //   // Filtra o array para remover o item com id igual a 2
    //   const id = training.indexOf(1);
    //   if (id !== -1) {
    //     // Remove o item do array
    //     training.splice(id, 1);
    //   }
    //   // Remove elementos do DOM
    //   divTraining.remove();
    //   divContent.remove();
    // }

    // btnTrash.addEventListener("click", removeItemArray());

    // Adiciona o divContent com todo o conteúdo ao contêiner principal
    trainingsContainer.appendChild(divContent);
  });
}

modalAddTraining.addEventListener("click", (e) => {
  e.preventDefault();
  const params = new URLSearchParams(document.location.search);
  const day = params.get("day");
  // Recupera os dados existentes do localStorage
  let training = JSON.parse(localStorage.getItem(day)) || [];
  let id = parseInt(localStorage.getItem("id")) || 0;
  localStorage.setItem("id", id + 1);
  let trainingDay = training[day] || [];
  let nextId =
    trainingDay.length > 0 ? trainingDay[trainingDay.length - 0] : id + 1;
  // Cria o novo objeto de treinamento
  let newTraining = {
    name: nameExercise.value,
    repeat: repeatExercise.value,
    series: seriesExercise.value,
    id: nextId,
  };
  // Adiciona o novo objeto à lista de treinamentos
  training.push(newTraining);
  // Salva a lista atualizada no localStorage
  localStorage.setItem(day, JSON.stringify(training));
  closeModal("#modal-add");
  addTraining(day);
});

buttonUpdate.addEventListener("click", (e) => {
  e.preventDefault();
  const params = new URLSearchParams(document.location.search);
  const day = params.get("day");
  modalEditTraining.style.display = "none";

  let training = JSON.parse(localStorage.getItem(day)) || [];
  const valueNewExercise = document.querySelector("#edit-exercise");
  const valueNewSeries = document.querySelector("#edit-series");
  const valueNewRepeat = document.querySelector("#edit-repeat");
  const trainingId = document
    .querySelector(".training")
    .getAttribute("data-exercise-id");
  console.log(trainingId, "idddd");
  const newTraining = training.filter(
    (trainingUpdate) => trainingUpdate.id !== Number(trainingId)
  );
  console.log(newTraining, "TIREI");

  let updateTraining = {
    name: valueNewExercise.value,
    repeat: valueNewRepeat.value,
    series: valueNewSeries.value,
    id: Number(trainingId),
  };
  console.log(updateTraining, "ESCREVI");
  newTraining.push(updateTraining);
  console.log(newTraining, "COLOQUEI");
  localStorage.setItem(day, JSON.stringify(newTraining));

  console.log(newTraining);

  inputEditName.value = " ";
  closeModal("#modal-edit");
});
