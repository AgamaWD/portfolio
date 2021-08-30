const projects = [
    {
        title: 'Weather (тестовое задание)',
        description: 'Браузерное приложение погоды. Вёрстка на flex. Стили на SASS. Функционал на чистом JS. Определяет местоположение, есть выбор города из списка.',
        background: 'img/projects/weather.gif',
        projectlink: 'https://agamawd.github.io/weather/',
    },
    {
        title: 'Lavakon Mix (тестовое задание)',
        description: 'Лендинг производства кондитерских смесей. Вёрстка на flex. Стили на чистом CSS. Мобильное меню-гамбургер на нативном на нативном JS.',
        background: 'img/projects/lavakon_mix.gif',
        projectlink: 'a98836qh.beget.tech/lavakonMix',
    },
    {
        title: 'Аптечный препарат (тестовое задание)',
        description: 'Лендинг аптечного препарата. Вёрстка на flex. Стили на чистом CSS. Видеофон первого экрана. Анимация CSS. Слайдер и счётчик на нативном JS.',
        background: 'img/projects/level_up.gif',
        projectlink: 'http://a98836qh.beget.tech/level_up/',
    },
    {
        title: 'Ремонт квартир (учебный проект)',
        description: 'Лендинг по ремонту квартир под ключ. Использовался Slick слайдер, библиотека wow.js, валидация форм и маска телефона на jQuery. Стили написаны на SASS. Настроена отправка формы через Ajax.',
        background: 'img/projects/repair.gif',
        projectlink: 'http://a98836qh.beget.tech',
    },
    {
        title: 'Разработка приложений и сайтов (учебный проект)',
        description: 'Лендинг по разработке приложений и сайтов. Вёрстка на flex. Стили на чистом CSS. Использовался Slick слайдер, jQuery.',
        background: 'img/projects/marathon.gif',
        projectlink: 'http://a98836qh.beget.tech/Marathon/',
    },
    {
        title: 'Email-письмо',
        description: 'По всем канонам вёрстки email-рассылок.',
        background: 'img/projects/email.gif',
        projectlink: 'http://a98836qh.beget.tech/email/',
    },
]
const numberOfProjects = projects.length
const projectContainer = document.getElementById('js-portfolio')

function createProject() {
    for (i=0; i<projects.length; i++) {

        let title = projects[i].title
        let description = projects[i].description
        let projectlink = projects[i].projectlink
        let githubLink = projects[i].githubLink
        let background = projects[i].background
        let htmlLayout = `<div class="portfolio__item--hover">
                            <div>
                                <h4 class="item__title">${title}</h4>
                                <p class="item__description">${description}</p>
                            </div>
                            <div>
                                <a href="${projectlink}" target='_blank' class="item__link">Открыть сайт</a>
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