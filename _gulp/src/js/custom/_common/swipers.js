function init_swipers() {
    try {
        // Init about swiper
        init_about_swiper();

        // Init home swiper
        init_home_swiper();

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
            speed: 600,
            updateOnWindowResize: true
        });
    } catch (e) {
        // console.error(e);
    }
}

function init_home_swiper() {
    try {
        // Define vars
        var selector_swiper = ".home-swiper";
        var data_swiper = "[data-swiper=home-swiper]";

        // Clone
        $(".home .home-swiper .swiper-slide").clone().appendTo(".home .home-swiper .swiper-wrapper");

        // Init new swiper
        var swiper_name = new Swiper(data_swiper, {
            // Optional parameters
            autoplay: {
                delay: 0
            },
            direction: "horizontal",
            keyboard: {
                enabled: true,
                onlyInViewport: false,
            },
            mousewheel: {
                forceToAxis: true
            },
            loop: true,
            slidesPerView: "auto",
            speed: 5000,
            updateOnWindowResize: true
        });

        // Init number counters
        init_number_counters();

        // On resize
        $(window).on("resize", throttle(function (event) {
            // Check if
            if (
                typeof swiper_name != "undefined" &&
                typeof swiper_name.initialized != "undefined"
            ) {
                // Stop
                swiper_name.autoplay.stop();

                try {
                    // Destroy swiper
                    swiper_name.destroy();
                } catch (e) {
                    // console.error(e);
                    // Destroy swiper
                    swiper_name.destroy();
                }
            }

            // Init new swiper
            swiper_name = new Swiper(data_swiper, {
                // Optional parameters
                autoplay: {
                    delay: 0
                },
                direction: "horizontal",
                keyboard: {
                    enabled: true,
                    onlyInViewport: false,
                },
                mousewheel: {
                    forceToAxis: true
                },
                loop: true,
                slidesPerView: "auto",
                speed: 2500,
                updateOnWindowResize: true
            });

            // Resume
            swiper_name.autoplay.resume();
            swiper_name.update();
        }, 1000));
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