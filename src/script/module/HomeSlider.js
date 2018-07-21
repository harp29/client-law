/*
*
*  HOME PAGE SLIDER. SIMPLE - FADE EACH SLIDE IN AND OUT.
*  Next and Previous Click
*
*  Needed: Variables - .slider__slide to access and work with slide
*                      .arrow-right and .arrow-left to shuffle arrows
*                      count to increment/decrement the slide to work with
*
* */

import VerticalLines from './VerticalLines';

class HomeSlider {

    static showFirstSlide(){
        let sliderNavigation = document.querySelector('.slider__arrows-navigation'),
            stagger          = document.querySelectorAll('.slider__slide.slider__slide--1 .slider__text-box .stagger'),
            tl = new TimelineLite();

        tl
            .set([document.querySelectorAll('.slider__slide')[0], document.querySelectorAll('.slider__img')[0]], {opacity: 1})
            .staggerTo(stagger, 1, {opacity: 1, y: 0, ease: Power4.easeOut}, 0.1, '+=.2')
            .to(sliderNavigation, 2, {opacity: 1, ease: Power4.easeOut}, '-=.3');

    }

    constructor() {

        new VerticalLines().createLines();

        this.slides                  = document.querySelectorAll('.slider__slide');
        this.slideImages             = document.querySelectorAll('.slider__img');
        let arrowsHolder             = document.querySelector('#js-arrows-holder');
        this.outSlide                = 0;
        this.inSlide                 = 0;
        this.count                   = 0;
        this.staggers                = [
                                         document.querySelectorAll('.slider__slide--1 .slider__text-box .stagger'),
                                         document.querySelectorAll('.slider__slide--2 .slider__text-box .stagger')
                                        ];
        this.tlSlider                = new TimelineLite();

        let that = this;

        arrowsHolder.addEventListener('click', function (e) {

                let clickedItem = e.target.id;

                if(clickedItem === 'js-arrow-right'){

                    that.nextSlide();

                }else if(clickedItem === 'js-arrow-left'){

                    that.prevSlide();

                };
        });

        // document.querySelector('.slider__text-box_cta').addEventListener('mouseover', function(){
        //    TweenLite.to(document.querySelector('.slider__img'), .5, {webkitFilter:'saturate(.7)'})
        // });
        //
        // document.querySelector('.slider__text-box_cta').addEventListener('mouseout', function(){
        //     TweenLite.to(document.querySelector('.slider__img'), .5, {webkitFilter:'saturate(0)'})
        // });

    };

    nextSlide(){

        this.outSlide = this.count;
        this.count+=1
        this.inSlide = this.count;

        if(this.count === this.slides.length){
            this.outSlide = this.slides.length - 1;
            this.count = 0;
            this.inSlide = this.count;
        }

            this.tlSlider
                .addLabel('previous-out')
                .to(this.slideImages[this.outSlide], 1, {opacity: 0, ease: Power4.easeOut},'previous-out')
                .staggerTo(this.staggers[this.outSlide], .5, {opacity: 0, y: -30, ease: Power4.easeOut}, 0.1, 'previous-out')
                .to(this.slides[this.outSlide], 1, {opacity: 0, ease: Power4.easeOut})
                .to([this.slideImages[this.count],this.slides[this.count]], 2, {opacity: 1, ease: Power4.easeInOut},'-=1.9')
                .staggerFromTo(this.staggers[this.inSlide], 1,
                    {opacity: 0, y: -30, ease: Power4.easeOut},
                    {opacity: 1, y: 0, ease: Power4.easeOut}, 0.1, '-=1.3');
    };

    prevSlide(){

        this.outSlide = this.count;
        this.count-=1;
        this.inSlide  = this.count;

        if(this.count < 0){
            this.outSlide = 0;
            this.count = this.slides.length - 1;
            this.inSlide = this.count;
        }

        this.tlSlider
            .addLabel('previous-out')
            .to(this.slideImages[this.outSlide], 1, {opacity: 0, ease: Power4.easeOut},'previous-out')
            .staggerTo(this.staggers[this.outSlide], .5,
                {opacity: 0, y: -30, ease: Power4.easeOut}, 0.1, 'previous-out')
            .to(this.slides[this.outSlide], 1, {opacity: 0, ease: Power4.easeOut})
            .to([this.slideImages[this.inSlide],this.slides[this.inSlide]], 2, {opacity: 1, ease: Power4.easeInOut},'-=1.9')
            .staggerFromTo(this.staggers[this.inSlide], 1,
                {opacity: 0, y: -30, ease: Power4.easeOut},
                {opacity: 1, y: 0, ease: Power4.easeOut}, 0.1, '-=1.3');
    };

};

export default HomeSlider;


