

function PageNavigation(){
    window.location.href = 'add-training.html'
}

function BackPage(){
    window.location.href = 'index.html'
}

function OpenModal(){
    const modal = document.querySelector('.modal')
    const arrowBack = document.querySelector('.img-arrow, .back-home')
    arrowBack.style.marginTop = '40px'
    arrowBack.style.position = 'static'
    modal.style.display = 'flex'
    const actualStyle = modal.style.display
    if(actualStyle == 'block'){
        modal.style.display = 'none'
    }else{
        modal.style.display = 'block'
    }
}


