autoSlider();
var left = 0;
var timer;

function autoSlider(){
    timer = setTimeout(function(){
        var polosa = document.getElementById('polosa');
        left = left - 490;/*цифрове значеннярозмір картинки*/
        if(left < -1960)
        {
            left = 0;
            clearTimeout(timer);
        }
        polosa.style.left = left + 'px';
        autoSlider();
    }, 3000);/*Час показу 1 слайду*/ 
}


