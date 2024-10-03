function init_swipers() {
    try {
        // Init roadmap swiper
        init_roadmap_swiper();
    } catch (e) {
        // console.error(e);
    }
}

function init_roadmap_swiper() {
    try {
        // Define vars
        var selector_roadmap_swiper = ".roadmap-swiper";

        // Define vars
        var data_roadmap_swiper = "[data-swiper=roadmap-swiper]";

        // Init new swiper
        new Swiper(data_roadmap_swiper, {
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
                nextEl: selector_roadmap_swiper + " .swiper-next",
                prevEl: selector_roadmap_swiper + " .swiper-prev"
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