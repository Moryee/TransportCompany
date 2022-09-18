import React from 'react';
import "./Copy"
function Home() {
    return (
        <div className='home-page'>
            { <div className='text-box'>
                <h1 className='text1'>ПЕРЕВЕЗЕННЯ ЧОГО ЗАВГОДНО</h1>
                <h1 className='text2'>КУДИ ЗАВГОДНО</h1>
                <h1 className='text3'>КОЛИ ЗАВГОДНО</h1>
                <p className='text4'>БІЛЬШЕ 10 ТИСЯЧ УСПІШНИХ ПЕРЕВЕЗЕНЬ УКРАЇНОЮ ТА КРАЇНАМИ ЄВРОПИ</p>
            </div> }

             <div class="social">
                <a class="social__icon phone" href="https://www.youtube.com/watch?v=Fxl_LU68Q5g">
                    <i class="fas fa-phone"></i>
                </a>
                <a class="social__icon facebook " href="https://www.facebook.com/groups/221656066288460">
                    <i class="fab fa-facebook-f"></i>
                </a>
                <div class="alert alert-success" id="successMessage">Gmail скопійовано!</div>

                <button value="t.comp@gmail.com" id="clickboardInput" class="social__icon envelope" >
                    <i class="fas fa-envelope"></i>
                </button>
                <a class="social__icon location" href="https://www.google.com/maps/place/Chernivtsi/@48.2693453,25.9384081,17z/data=!4m12!1m6!3m5!1s0x47340970e6c7bcd5:0x87bc1358b0c423cc!2sChernivtsi!8m2!3d48.2693453!4d25.9405967!3m4!1s0x47340970e6c7bcd5:0x87bc1358b0c423cc!8m2!3d48.2693453!4d25.9405967">
                    <i class="fas fa-search-location"></i>
                </a> 
                </div>

        </div>
    );
}

export default Home;
