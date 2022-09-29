setTimeout(() => {
    let clickboardInput = document.getElementById('clickboardInput')
    let successMessage = document.getElementById('successMessage')
clickboardInput.onclick = function () {
    navigator.clipboard.writeText(clickboardInput.value)
    successMessage.classList.add('active')
    setTimeout(() => successMessage.classList.remove('active'), 2000)
    
}
}, 1000); //Не працює копіювання з 1 разу
