function init_swipers() {
    try {
        // Init about swiper
        init_about_swiper();

        // Init roadmap swiper
        init_roadmap_swiper();
    } catch (e) {
        // console.error(e);
    }
}

function init_about_swiper() {
    try {
        // Define vars
        var selector_swiper = ".about-swiper";
        var data_swiper = "[data-swiper=about-swiper]";

        // Init new swiper
        new Swiper(data_swiper, {
            // Optional parameters
            direction: "horizontal",
            freeMode: true,
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            loop: true,
            mousewheel: {
                forceToAxis: true
            },
            navigation: {
                nextEl: selector_swiper + " .swiper-next",
                prevEl: selector_swiper + " .swiper-prev"
            },
            slidesPerView: "auto",
            slidesPerGroup: 1,
            spaceBetween: 16,
            updateOnWindowResize: true
        });
    } catch (e) {
        // console.error(e);
    }
}

function init_roadmap_swiper() {
    try {
        // Define vars
        var selector_swiper = ".roadmap-swiper";
        var data_swiper = "[data-swiper=roadmap-swiper]";

        // Init new swiper
        new Swiper(data_swiper, {
            // Optional parameters
            centeredSlides: true,
            centeredSlidesBounds: true,
            direction: "horizontal",
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            mousewheel: {
                forceToAxis: true
            },
            navigation: {
                nextEl: selector_swiper + " .swiper-next",
                prevEl: selector_swiper + " .swiper-prev"
            },
            slidesPerView: "auto",
            slidesPerGroup: 1,
            updateOnWindowResize: true
        });
    } catch (e) {
        // console.error(e);
    }
}