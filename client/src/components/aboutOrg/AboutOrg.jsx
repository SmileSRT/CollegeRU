import React from 'react';
import anthemVideo from '../../../public/images/aboutOrgImages/anthemVideo.png'
import reviewVideo from '../../../public/images/aboutOrgImages/reviewVideo.png'
import photoGallery from '../../../public/images/aboutOrgImages/photoGallery.png'
import classes from './AboutOrg.module.css'

const AboutOrg = () => {
    return( 
        <div class="d-flex justify-content-center" className={classes.split}>
            <div class="container">
                <div class="d-flex flex-row">
                    <div class="col-6 col-md-5">
                        <h1 class="display-4">Знание - сила</h1>
                        <p class="lead">Создавая колледж, мы хотели, чтобы он стал не просто
                            еще одним учебным заведением, где ничем нне
                            связанные друг с другом люди будут обучать и учиться.
                        </p>
                        <p class="lead">
                            Наша цель была в другом: мы убеждены -- каждый 
                            человек талантлив; мы убеждены -- сейчас время
                            неординарных людей и неординарных идей; мы
                            убеждены -- только настоящее дело может быть
                            по-настоящему интересным; мы убеждены --
                            состоявшиеся люди -- это счастливые люди; 
                            мы убеждены -- только в атмосфере понимания и 
                            позитива человек может развиваться!

                        </p>
                    </div>
                    
                    <div class="col-12 col-md-3 row">
                        <div class="col" className={classes.zoom} style={{backgroundImage: anthemVideo}}>
                            <a href='#'>
                                <img src={anthemVideo} alt="ЗНАНИЕ | Гимн колледжа" />
                                {/* <p class="lead">ЗНАНИЕ | Гимн колледжа</p> */}
                            </a>
                        </div>

                        {/* Splitter */}
                        <div class="w-100"></div>
                        {/* Splitter */}

                        <div class="col" className={classes.zoom} style={{backgroundImage: reviewVideo}}>
                            <a href='#'>
                                <img src={reviewVideo} alt="ЗНАНИЕ | Видео-обзор" />
                            </a>
                        </div>
                        
                    </div>
                    <div class="col-12 col-md-4" className={classes.zoom} style={{backgroundImage: photoGallery}}>
                        <a href='#'>
                            <img src={photoGallery} alt="" height="536px"/>
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
export default AboutOrg;