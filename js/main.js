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
    });
};
fixationMenu();

                                                                                    /*Прокрутка по странице*/

function scrollFn(e) {
    e.preventDefault();

    const elemHref = e.target.getAttribute('href');

    if(!elemHref.length || elemHref.indexOf('#') != 0) {
        console.log(`Неправильная ссылка.`)
        return
    };

    if(elemHref.length == 1 && elemHref == '#') {
        scrollTo({'top': 0, 'behavior': 'smooth'});
    } else if (elemHref.length > 1) {
        const elemId = elemHref.substring(1);
        const elem = document.getElementById(`${elemId}`);

        if (!elem) {
            console.log(`Объект по якорю ${elemId} не найден.`)
            return
        }

        const elemPos = elem.getBoundingClientRect().top + pageYOffset - 90;
    
        window.scrollTo({
            'top' : `${elemPos}`,
            'behavior' : 'smooth'
        });
    }
};

                                                                                /*Переключение темы*/

function themeCheck() {
    const currThemeLS = localStorage.getItem('theme')
    const body = document.querySelector('body')

    if (currThemeLS == null) {
        return
    } else if (currThemeLS == 'dark') {
        body.classList.add('dark')
    }
}
document.addEventListener("DOMContentLoaded", themeCheck);

function themeToggle() {
    const body = document.querySelector('body')
    const currentThemeLS = localStorage.getItem('theme')
    if (currentThemeLS == null) {
        localStorage.setItem('theme', 'dark')
    } else if (currentThemeLS == 'dark') {
        localStorage.removeItem('theme')
    }
    console.log(currentThemeLS)
    body.classList.toggle('dark')
}

