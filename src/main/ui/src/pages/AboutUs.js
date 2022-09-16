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
                        <img src="1.jpg" alt="1" width='490px'/>
                        <img src="2.jpg" alt="2" width='490px'/>
                        <img src="3.jpg" alt="3" width='490px'/>
                        <img src="4.jpg" alt="4" width='490px'/>
                        <img src="5.jpg" alt="5" width='490px'/>
                    </div>
                </div>
            </div>
            <div className='about-us-page-partners'><h1>Partners</h1></div>
        </div>
    );
}

export default AboutUs;