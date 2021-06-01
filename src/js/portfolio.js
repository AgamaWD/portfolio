const projects = [
    {
        title: 'Ремонт квартир',
        description: 'Лендинг по ремонту квартир под ключ. Использовался Slick слайдер, библиотека wow.js, валидация форм и маска телефона на jQuery. Стили написаны на SASS. Настроена отправка формы через Ajax.',
        background: 'img/projects/repair.gif',
        projectlink: 'http://a98836qh.beget.tech',
        githubLink: 'https://github.com/AgamaWD/WebStartTranningRepair'
    },
    {
        title: 'Разработка приложений и сайтов',
        description: 'Лендинг по разработке приложений и сайтов. Вёрстка на flex. Стили на чистом CSS. Использовался Slick слайдер, jQuery.',
        background: 'img/projects/marathon.gif',
        projectlink: 'http://a98836qh.beget.tech/Marathon/',
        githubLink: 'https://github.com/AgamaWD'
    },
    {
        title: 'Средство для потенции',
        description: 'Лендинг препарата для потенции. Вёрстка на flex. Стили на чистом CSS. Видеофон первого экрана. Анимация CSS. Слайдер и счётчик на нативном JS.',
        background: 'img/projects/level_up.gif',
        projectlink: 'http://a98836qh.beget.tech/level_up/',
        githubLink: 'https://github.com/AgamaWD/levelUp'
    },
    {
        title: 'Email-письмо',
        description: 'По всем канонам вёрстки email-рассылок.',
        background: 'img/projects/email.gif',
        projectlink: 'http://a98836qh.beget.tech/email/',
        githubLink: 'https://github.com/AgamaWD/emails'
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
                                <h4 class="portfolio__item__title">${title}</h4>
                                <p class="portfolio__item__description">${description}</p>
                            </div>
                            <div>
                                <a href="${projectlink}" target='_blank' class="portfolio__item__link">Открыть сайт</a>
                                <a href="${githubLink}" target='_blank' class="portfolio__item__link">Открыть на GitHub</a>
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

        portfolioItem.classList.add('portfolio__item')
        portfolioItem.innerHTML = htmlLayout
        projectContainer.appendChild(portfolioItem)
    };
};

if (projectContainer) {
    createProject();
};