function init_scroll() {
    try {
        // Vars
        var scroll_selector = "#scroll-top";
        var last_scroll_top = 0;

        // On scroll
        $(window).on("scroll", throttle(function (event) {
            console.log("scroll");
            // Vars
            var scroll_top = $(this).scrollTop();

            // Check if
            if (scroll_top > last_scroll_top) {
                // Downscroll
                // Fade out
                $(scroll_selector).fadeOut();
            } else {
                // Upscroll
                // Vars
                var window_height = window.innerHeight;
                window_height = window_height * 1.5;

                // Check if
                if (scroll_top > window_height) {
                    // Fade in
                    $(scroll_selector).fadeIn();
                } else {
                    // Fade out
                    $(scroll_selector).fadeOut();
                }
            }

            // Vars
            last_scroll_top = scroll_top;
        }, 700));

        // On click
        $(scroll_selector).off("click");
        $(scroll_selector).on("click", function () {
            // Animate
            $("html, body").animate({ scrollTop: 0 }, 500);

            // Return
            return false;
        });
    } catch (e) {
        // console.error(e);
    }
}