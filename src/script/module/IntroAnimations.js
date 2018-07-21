/*
 * Objective:
 *
 */

//import
import SplitText from './SplitText';
import TweenMax from 'gsap';

class IntroAnimations {
    constructor() {

        //global variables

    };

    //Method: Animate all loading content
    loadAnimations() {

        //variables:
        let jsLogo = document.querySelector('#js-logo'),
            jsLoadPage = document.querySelector('#js-load-page'),
            jsSymbolC = document.querySelector('.letter--c'),
            jsSymbolB = document.querySelector('.letter--b'),
            jsLettersTop = document.querySelectorAll('.letters-top'),
            jsLettersBottom = document.querySelectorAll('.letters-bottom'),
            tlLoading = new TimelineLite({
                delay: 1
            });

        //loading overlay animation timelines
        tlLoading
            .set(jsSymbolC, {
                strokeDasharray: '363',
                strokeDashoffset: '-363'
            })
            .set(jsSymbolB, {
                strokeDasharray: '558',
                strokeDashoffset: '-558'
            })
            .set(jsLettersTop, {
                strokeDasharray: '210',
                strokeDashoffset: '-210'
            })
            .addLabel('symbol-logo-stroke')
            .to([jsSymbolC, jsSymbolB], 1.5, {
                    strokeDashoffset: '0',
                    opacity: '1',
                    fill: 'rgba(148,193,61,0)',
                    ease: Power4.easeOut
                },
                'symbol-logo-in'
            )
            .addLabel('symbols-in', '-=1.3')
            .to([jsLettersTop], 2.5, {
                strokeDashoffset: '0',
                opacity: '1',
                fill: 'rgba(88, 87, 87, 0)',
                ease: Power4.easeOut
            }, 'symbols-in')
            .to(jsLettersBottom, 4, {
                strokeDashoffset: '0',
                opacity: '1',
                fill: 'rgba(156,156,155,0)',
                ease: Power4.easeOut
            }, '-=1.7')
            .addLabel('letters-in', '-=3.8')
            .to([jsSymbolC, jsSymbolB], 1, {
                fill: 'rgba(148,193,61,1)'
            }, 'letters-in')
            .to([jsLettersTop], 1, {
                fill: 'rgba(88, 87, 87, 1)'
            }, 'letters-in')
            .to([jsLettersBottom], 1, {
                fill: 'rgba(156,156,155,1)'
            }, 'letters-in')
            .to(jsLogo, 1.5, {
                opacity: 0,
                autoAlpha: 0,
                ease: Power4.easeOut
            })
            .to(jsLoadPage, 1.5, {
                opacity: 0,
                autoAlpha: 0,
                ease: Power4.easeOut
            }, '-=.75');

        //return loading overlay timeine so can be placed into mastertimeline     
        return tlLoading;

    };

    landAnimations() {

        //variables
        let jsIntroHeading = document.querySelector(".js-intro__heading"),
            jsIntroDescription = document.querySelector(".js-intro__description"),
            jsPageBaseImage = document.querySelector('.js-page-base__image'),
            // introSplitText_CI = new SplitText(jsIntroContentIdentifier, {
            //     type: "chars"
            // }),
            introSplitText_Heading = new SplitText(jsIntroHeading, {
                type: "chars, lines, words",
                linesClass: "line line++"
            }),
            revertSplit = function () {
                // introSplitText_CI.revert();
                introSplitText_Heading.revert();
            };

        let lines = document.querySelectorAll(".line");
        const tlLanding = new TimelineMax({
            onComplete: revertSplit
        });
        tlLanding.fromTo(jsPageBaseImage, 5, {opacity: 0, scale: 1.3, '-webkit-filter':'saturate(0)', ease: Power4.easeOut},
        {opacity: .35, scale: 1, '-webkit-filter':'saturate(1)', ease: Power4.easeOut})
        .addLabel('now', '-=5')
        // tlLanding.staggerFrom(introSplitText_CI.chars, 1, {
        //     opacity: 0,
        //     x: 45,
        //     ease: Power4.easeOut
        // }, 0.03, '-=1.7')
        for (let i = 1; i < lines.length + 1; i++) {
            tlLanding.staggerFrom(
                ".line" + i + " div",
                0.55, {
                    opacity: 0,
                    x: 30,
                    ease: Power4.easeOut
                },
                0.02, 'now'
            );
        };

        return tlLanding;

    }

    //method to be orgainzed, clean, and have full control over other timelines via one timeline. Placing prior timelines into one
    animateTimelines() {

        //master timeline
        new TimelineMax()
            .add(this.loadAnimations())
            .add(this.landAnimations(), '-=1.6')
    }

};

export default IntroAnimations;

/*



*/

//OLD CODE:

/*
let jsIntroContentIdentifier = document.querySelector('#js-intro-content-identifier'),
            jsIntroHeading = document.querySelector('#js-intro-heading'),
            jsIntroDescription = document.querySelector('#js-intro-description'),
            jsGridInner = document.querySelector('#js-grid-inner'),
            jsGridMiddle = document.querySelector('#js-grid-middle'),
            introSplitText_CI = new SplitText(jsIntroContentIdentifier, {
                type: "chars"
            }),
            introSplitText_Heading = new SplitText(jsIntroHeading, {
                type: "chars"
            }),
            revertSplitCL = function () {
                introSplitText_CL.revert();
            },
            tlLanding = new TimelineLite();

        //landing timeline animations    
        tlLanding
            .staggerFrom(introSplitText_CI.chars, .8, {
                opacity: 0,
                x: 50,
                ease: Power4.easeOut
            }, 0.05, revertSplitCL)
            .staggerFrom(introSplitText_Heading.chars, .65, {
                opacity: 0,
                x: 25,
                ease: Power4.easeOut
            }, 0.02, '-=.1')
            .fromTo([jsGridInner, jsGridMiddle], 2, {height: 0}, {height: '100%', ease: Power4.easeOut}, '-=.8')
            .from(jsIntroDescription, .8, {opacity: 0, ease: Power4.easeOut}, '-=1.55')

        // //return landing timeine so can be placed into mastertimeline     
        return tlLanding;

*/