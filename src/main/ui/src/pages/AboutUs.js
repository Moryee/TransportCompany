import React from 'react';
import './Copy'
import './slider'
function AboutUs() {
    return (
        <div className='about-us-page'>
            <div className='about-us-page-text'>T.COMP – один із найпопулярніших сайтів вантажоперевезень в Україні.
             Ми працює з 2006 року, успішно поєднуючи транспортні компанії та прямих замовників перевезень. Після об`єднання у 2013 році з транспортними порталами,
              ми стали однією із найбільших компаній в Україні, і збільшили свою аудиторію більш ніж у 2 рази та кількість заявок на перевезення вантажів.
               І сьогодні на нашому сайті щодня реєструються сотні нових фірм, що потребують вантажних перевезень по Україні, та Європі.</div>
            <div className='about-us-page-slider'>
                <div id="slider">
                    <div id="polosa">
                        <img src="./slider-img/slider-img1.png" alt="1" />
                        <img src="./slider-img/slider-img2.png" alt="2" width='500px'/>
                        <img src="./slider-img/slider-img3.png" alt="3" width='500px'/>
                        
                    </div>
                </div>
            </div>
            <div className='about-us-page-partners'>
                <h1>Partners</h1>
                <img src="./PartnersLogo\Epc.png" alt="1" />
                <img src="./PartnersLogo\Eva.png" alt="1" />
                <img src="./PartnersLogo\Atb.png" alt="1" />
                <img src="./PartnersLogo\Shabo.png" alt="1" />
                <img src="./PartnersLogo\MXP.png" alt="1" />
                <img src="./PartnersLogo\Metro.png" alt="1" />
                <img src="./PartnersLogo\Prom.png" alt="1" />
                <img src="./PartnersLogo\Ab.png" alt="1" />
                <img src="./PartnersLogo\Optk.png" alt="1" />
                <img src="./PartnersLogo\Dtek.png" alt="1" />
                <img src="./PartnersLogo\Kernel.png" alt="1" />
                <img src="./PartnersLogo\Arc.png" alt="1" />
                <img src="./PartnersLogo\Pet.png" alt="1" />
                <img src="./PartnersLogo\Obolon.png" alt="1" />
                </div>
        </div>
    );
}

export default AboutUs;