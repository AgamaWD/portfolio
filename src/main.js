// стили
import './main.scss';
import { Fancybox } from "https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.esm.js";

document.addEventListener('DOMContentLoaded', () => {
  Fancybox.bind("[data-fancybox]", {
    placeFocusBack: false,
    mainClass: 'my-fancybox',
    idle: false,
    Carousel: {
        transition: "crossfade",
        Navigation: {
            prevTpl: '<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" fill="currentColor" /></svg>',
            nextTpl: '<svg viewBox="0 0 96 96" xmlns="http://www.w3.org/2000/svg"><path d="M69.8437,43.3876,33.8422,13.3863a6.0035,6.0035,0,0,0-7.6878,9.223l30.47,25.39-30.47,25.39a6.0035,6.0035,0,0,0,7.6878,9.2231L69.8437,52.6106a6.0091,6.0091,0,0,0,0-9.223Z" fill="currentColor" /></svg>',
          },
    },
    Thumbs: {
        type: "classic",
    },
    Toolbar: {
        enabled: true,
        display: {
            left: [],
            middle: [],
            right: [
              "close",
            ],
        },
    }

});
})
