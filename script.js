
// const switchModal = () =>{
    
//     const modal = document.querySelector('.modal')
//     const actualStyle = modal.style.display
//     if(actualStyle == 'block'){
//         modal.style.display = 'none'
//     }else{
//         modal.style.display = 'block'
//     }
// }

function pageNavigation(){
    window.location.href = 'add-training.html'
}

const buttonWeek = document.querySelectorAll('button.btn-week')
buttonWeek.addEventListener('click', ()=>{
    pageNavigation()
})

