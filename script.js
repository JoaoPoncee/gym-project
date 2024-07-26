const nameExercise = document.querySelector(".input-form-exercise");
const repeatExercise = document.querySelector(".input-form-repeat");
const seriesExercise = document.querySelector(".input-form-series");
const btnWeek = document.querySelectorAll(".btn-week");
const btnAdd = document.querySelector("#btn-add");




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
  const actualStyle = modal.style.display;
  arrowBack.style.display = "none";
  modal.style.display = "flex";
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
  nameExercise.value = " ";
  repeatExercise.value = " ";
  seriesExercise.value = " ";
}

document.addEventListener('DOMContentLoaded', ()=>{
  const params = new URLSearchParams(document.location.search);
  const day = params.get("day");
  addTraining(day)
})

function addTraining(day) {

  let divContent = document.createElement('div');
  divContent.className = 'div-content';

  // Criando a seção de treino
  let divTraining = document.createElement('div');
  divTraining.className = 'training';
  divContent.appendChild(divTraining);

  // Criando a seção de exercício
  let divExercise = document.createElement('div');
  divExercise.className = 'exercise';
  divTraining.appendChild(divExercise);

  // Nome do exercício
  let pExercise = document.createElement('p');
  pExercise.className = 'exercise-name';  // Classe CSS para personalizar se necessário
  divExercise.appendChild(pExercise);

  // Repetições e séries
  let pRepeatAndSeries = document.createElement('p');
  pRepeatAndSeries.className = 'repeat-series';  // Classe CSS para personalizar se necessário
  divExercise.appendChild(pRepeatAndSeries);

  // Criando a seção de ações (botões)
  let divBtnActions = document.createElement('div');
  divBtnActions.className = 'div-btn-actions';
  divTraining.appendChild(divBtnActions);

  let btnPlus = document.createElement('button');
  btnPlus.className = 'style';
  divBtnActions.appendChild(btnPlus);

  let btnTrash = document.createElement('button');
  btnTrash.className = 'style';
  divBtnActions.appendChild(btnTrash);

  let btnPencil = document.createElement('button');
  btnPencil.className = 'style';
  divBtnActions.appendChild(btnPencil);

  let imgPlus = document.createElement('img');
  imgPlus.src = 'assets/img/plus.png';
  imgPlus.className = 'icon-actions';
  btnPlus.appendChild(imgPlus);

  let imgTrash = document.createElement('img');
  imgTrash.src = 'assets/img/trash.png';
  imgTrash.className = 'icon-actions';
  btnTrash.appendChild(imgTrash);

  let imgPencil = document.createElement('img');
  imgPencil.src = 'assets/img/pencil.png';
  imgPencil.className = 'icon-actions';
  btnPencil.appendChild(imgPencil);
  
  let training = JSON.parse(localStorage.getItem(day)) || [];
  training.map((train) =>{
    pExercise.innerHTML = train.name
    pRepeatAndSeries.innerHTML = `${train.repeat}x${train.series}`
    document.getElementById('trainingsContainer').appendChild(divTraining);
  })

  console.log('oi');
}


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
  addTraining(day)
});

