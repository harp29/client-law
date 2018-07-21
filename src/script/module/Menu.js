class Menu{
    constructor(){


        this.menu            = document.querySelector('#js-menu');
        this.links           = document.querySelectorAll('.menu__link');
        this.menuCta         = document.querySelector('#js-menu-toggle');
        this.hamburger       = document.querySelector('#js-hamburger');
        this.menuOpen = false;

        this.hamburger.addEventListener('click', this.menuToggle.bind(this));
        

    };

    // hasClass, takes two params: element and classname
    hasClass(el, cls) {
        return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
    }
  

    menuToggle(){
        let tlMenu = new TimelineLite();


        if(!this.hasClass(this.menu, 'is-animating')){
            if(!this.menuOpen){
                console.log(this.menuOpen); //prints fine
                this.menuOpen = true; //why doesn't change?

                tlMenu
                    .addLabel('menu-open')
                    .set(this.menu, {className:'+=is-animating'})                
                    .to(this.menu, .7, {width: '100%', ease: Expo.easeIn}, 'menu-open')
                    .staggerFrom(this.links, .6, {x: -30, opacity: 0, ease: Expo.easeOut}, 0.08)
                    // .to(this.ctaLinks, 1, {color: 'black', ease: Power4.easeOut}, 'menu-open')
                    // .to(this.hamburger, 1, {stroke: 'black', ease: Power4.easeOut}, 'menu-open')
                    .set(this.menu, {className:'-=is-animating'});

                console.log(this.menuOpen);
    
            }else if(this.menuOpen){
                tlMenu
                    .set(this.menu, {className:'+=is-animating'})  
                    .addLabel('menu-close')
                    .staggerTo(this.links, 1, {x: -30, opacity: 0, ease: Expo.easeOut}, 0.05)
                    .to(this.menu, 1, {width: '0%', ease: Power4.easeOut}, '-=.85')
                    .set(this.links, {opacity: 1, x: 0})
                    .set(this.menu, {className:'-=is-animating'});
                    // .to(this.ctaLinks, 1, {color: 'white', ease: Power4.easeOut}, 'menu-close')
                    // .to(this.hamburger, 1, {stroke: 'white', ease: Power4.easeOut}, 'menu-close');
    
                this.menuOpen = false;
            };
        }
    }

    // closeMenu(){
    //     let tlMenu = new TimelineLite();
    //     tlMenu
    //         .addLabel('menu-open')
    //         .to(this.menu, 1, {opacity: 1, autoAlpha: 1, ease: Power4.easeOut}, 'menu-open')
    //         .to(this.ctaLinks, 1, {color: 'black', ease: Power4.easeOut}, 'menu-open')
    //         .to(this.hamburger, 1, {stroke: 'black', ease: Power4.easeOut}, 'menu-open')
    // }


//document.getElementById("top-bun").setAttribute("d", "M9,12 L10,12");
};

export default Menu;