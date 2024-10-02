function init_scroll() {
    try {
        // Vars
        var scroll_selector = "#scroll-top";
        var scroll_timeout = "";

        // On scroll
        $(window).on("scroll", throttle(function (event) {
            // Vars
            var scroll_top = $(this).scrollTop();
            var window_height = window.innerHeight;
            window_height = window_height * 1.5;

            // Check if
            if (scroll_top > window_height) {
                // Fade in
                $(scroll_selector).fadeIn(100);

                // Clear timeout
                clearTimeout(scroll_timeout)

                // Set timeout
                scroll_timeout = setTimeout(function () {
                    // Fade out
                    $(scroll_selector).fadeOut(100);
                }, 2000);
            } else {
                // Fade out
                $(scroll_selector).fadeOut(100);
            }
        }, 100));

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