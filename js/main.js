/*фиксация шапки*/

function fixationMenu () {
    const header = document.getElementById('js-nav');
    const mainScreen = document.getElementById('js-main-screen')
    
    if (!header) return;

    window.addEventListener('scroll', () => {
        let currentOfset = window.pageYOffset;

        if(currentOfset >= 80) {
            header.classList.add('fixed');
            mainScreen.style = 'padding: 330px 245px 145px;'
        }

        if(currentOfset <= 80) {
            header.classList.remove('fixed');
            mainScreen.style = 'padding: 160px 245px 145px;'
        }
        console.log(currentOfset)

    });
};
fixationMenu();

/*Прокрутка по странице*/

function scrollFn(elemId) {
    const elem = document.getElementById(elemId);
    const elemPos = elem.getBoundingClientRect().top + pageYOffset - 90;

    window.scrollTo({
        'top' : `${elemPos}`,
        'behavior' : 'smooth'
    });
};