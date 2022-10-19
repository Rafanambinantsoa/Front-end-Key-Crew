'use strict';

/* Fonction qui fait apparaitre le navigation */

(function () {

    /* Faire disparaitre et apparaitre le nav */

    const menu = document.querySelector('.icon-header');
    const liens = document.querySelector('.liens');
    const subscribe = document.querySelector('.subscribe')
    console.log(subscribe);
    console.log(liens);
    menu.addEventListener('click', function () {
        if (liens.classList.contains('liens') || liens.classList.contains('disparaitre')) {
            liens.classList.add('visible');
            liens.classList.remove('liens');
            liens.classList.remove('disparaitre');
        } else if (liens.classList.contains('visible')) {
            liens.classList.add('disparaitre');
            liens.classList.remove('visible');
        }
    });

    /* Nav apparait quand window.innerWidth > 763 */
    window.addEventListener('resize',(e) => {
        if(e.srcElement.innerWidth > 763) {
            if (liens.classList.contains('visible') || liens.classList.contains('disparaitre')) {
                liens.classList.add('liens');
                liens.classList.remove('disparaitre');
                liens.classList.remove('visible');
            }
        };
    })

    /* Fonction qui fait disparaitre le balise p */

    const paragraphe = document.querySelectorAll('.text p');
    window.addEventListener('resize',(e) => {
        if(e.srcElement.innerWidth <= 551) {
            for (let i = 0; i < paragraphe.length;i++) {
                paragraphe[i].classList.add('invisible');
            }        
        };
    })


    /* Pour faire le formulaire quand le boutton subscribe est appyuer */

    subscribe.addEventListener('click', function () {
        console.log('good')
    })

})()