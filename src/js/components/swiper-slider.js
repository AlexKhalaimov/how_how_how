import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

var swiper1 = new Swiper(".swiper-thumbs", {
    spaceBetween: 10,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    modules: [Pagination],
});
var swiper2 = new Swiper(".slider-lg", {
    spaceBetween: 10,
    modules: [Pagination],
    thumbs: {
        swiper: swiper1,
    },
});