/*Описание СТРОГО до 180 символов*/
/*количество работ лучше 4,6,8,12*/

//https://script.googleusercontent.com/macros/echo?user_content_key=xtkc_vPT-WsZG0Lpn39lzjJ7laT2CJYflODaZ1lwV0j4IEK3FVTjYI3JWqHfUn5y_wts2IKgJDOOCFDkSCeNTrjhemDIbCOpm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnH_Clfh_1rlEg_woD82gdyIenKP3WtVn3uC-hJvT_NaUbOQGZJTQ5pDr5jo4Tchqf2Vpa_PZ_5Bh4fOBLS4qMaEx9Xz4zdY3bQ&lib=M4NdiYeuQl-5QffUbAn7zZhMrWCC0QGP_

const projects = [
    {
        title: 'Строитель (страница ЖК)',
        description: 'Страница жилого комплекса на сайте строительной компании. Вёрстка на flex+Grid. Стили на SASS. Вкладки - swiper.js. Мобильное меню - JavaScript Native',
        background: 'img/projects/stroitel.gif',
        projectlink: 'https://agamawd.github.io/stroitel/',
        gpsLink: ''
    },
    {
        title: 'CookToo (главная)',
        description: 'Главная страница сайта по доставке еды. Вёрстка на flex+Grid. Стили на SASS. Функционала не много - только спойлеры на чистом JavaScript. Без адаптивной версии.',
        background: 'img/projects/cooktoo.gif',
        projectlink: 'https://agamawd.github.io/Cooktoo/',
        gpsLink: ''
    },
    {
        title: 'Weather (браузерное приложение)',
        description: 'Браузерное приложение погоды. Вёрстка на flex. Стили на SASS. Функционал на чистом JavaScript. Определяет местоположение, есть выбор города из списка.',
        background: 'img/projects/weather.gif',
        projectlink: 'https://agamawd.github.io/weather/',
        gpsLink: ''
    },
    {
        title: 'Lavakon Mix (лендинг)',
        description: 'Лендинг производства кондитерских смесей. Вёрстка на flex. Стили на чистом CSS. Мобильное меню-гамбургер на нативном на нативном JS.',
        background: 'img/projects/lavakon_mix.gif',
        projectlink: 'http://a98836qh.beget.tech/lavakonMix/',
        gpsLink: ''
    },
    {
        title: 'Аптечный препарат (лендинг)',
        description: 'Лендинг аптечного препарата. Вёрстка на flex. Стили на чистом CSS. Видеофон первого экрана. Анимация CSS. Слайдер и счётчик на нативном JS.',
        background: 'img/projects/level_up.gif',
        projectlink: 'http://a98836qh.beget.tech/level_up/',
        gpsLink: ''
    },
    {
        title: 'Ремонт квартир (лендинг)',
        description: 'Лендинг по ремонту квартир под ключ. Использовался Slick слайдер, библиотека wow.js, валидация форм и маска телефона на jQuery. Отправка формы через Ajax.',
        background: 'img/projects/repair.gif',
        projectlink: 'http://a98836qh.beget.tech',
        gpsLink: ''
    },
    {
        title: 'Разработка приложений и сайтов (лендинг)',
        description: 'Лендинг по разработке приложений и сайтов. Вёрстка на flex. Стили на чистом CSS. Использовался Slick слайдер, jQuery.',
        background: 'img/projects/marathon.gif',
        projectlink: 'http://a98836qh.beget.tech/Marathon/',
        gpsLink: ''
    },
   {
        title: 'Freebies Gallery (email-письмо)',
        description: 'По всем канонам вёрстки email-рассылок.',
        background: 'img/projects/email.gif',
        projectlink: 'http://a98836qh.beget.tech/email/',
        gpsLink: ''
    },
]
const numberOfProjects = projects.length
const projectContainer = document.getElementById('js-portfolio')

function createProject() {
    for (i=0; i<projects.length; i++) {

        let title = projects[i].title
        let description = projects[i].description
        let projectlink = projects[i].projectlink
        let gpsLink = 'https://developers.google.com/speed/pagespeed/insights/?url=' + projectlink
        let background = projects[i].background
        let htmlLayout = `<div class="portfolio__item--hover">
                            <div>
                                <h4 class="item__title">${title}</h4>
                                <p class="item__description">${description}</p>
                            </div>
                            <div>
                                <a href="${projectlink}" target='_blank' class="item__link">Открыть сайт</a>
                                <a href="${gpsLink}" target='_blank' class="item__link">Проверить скорость</a>
                            </div>
                        </div>`
        let portfolioItem = document.createElement('div')

        if (numberOfProjects < 4) {
            portfolioItem.style = `width: calc(100%/${numberOfProjects}); height: calc(50vw/${numberOfProjects}); background-image: url(${background});`
        } else if (numberOfProjects>=4 && numberOfProjects%4 == 0) {
            portfolioItem.style = `width: 25%; height: calc(25vw/2); background-image: url(${background});`
        } else if (numberOfProjects%5 == 0) {
            portfolioItem.style = `width: 20%; height: 10vw; background-image: url(${background});`
        } else if (numberOfProjects%3 == 0) {
            portfolioItem.style = `width: calc(100%/3); height: calc(100vw/3/2); background-image: url(${background});`
        } else {
            portfolioItem.style = `width: 25%; height: calc(25vw/2); background-image: url(${background});`
        }

        portfolioItem.classList.add('portfolio__item', 'item')
        portfolioItem.innerHTML = htmlLayout
        projectContainer.appendChild(portfolioItem)
    };
};

if (projectContainer) {
    createProject();
};