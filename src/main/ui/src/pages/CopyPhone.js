

function CopyPhone(){
    setTimeout(() => {
        let clickboardInput1 = document.getElementById('clickboardInput1')
        let successMessage1 = document.getElementById('successMessage1')
    clickboardInput1.onclick = function () {
        navigator.clipboard.writeText(clickboardInput1.value)
        successMessage1.classList.add('active')
        setTimeout(() => successMessage1.classList.remove('active'), 2000)
        
    }
    }, 1000); //Не працює копіювання з 1 разу
}
export default CopyPhone;