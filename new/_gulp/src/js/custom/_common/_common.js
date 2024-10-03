function check_value_defined(value) {
    try {
        // Check if
        if (typeof value == "undefined" || value == null) {
            // Vars
            value = "";
        }
    } catch (e) {
        // console.error(e);
        // Vars
        value = "";
    }

    // Return
    return value;
}

function init_anchor_tags() {
    try {
        // On click
        $('a[href^="#"]').on("click", function (e) {
            // Vars
            var href = $(this).attr("href");

            // Check if
            if ($(".site__header .header-position-fixed").length > 0) {
                // Vars
                var headerHeight = $("header").innerHeight();
            } else {
                // Vars
                var headerHeight = 0;
            }

            // Animate
            $("html,body").animate({ scrollTop: $(href).offset().top - headerHeight - 100 }, 500);
        });
    } catch (e) {
        // console.log(e);
    }
}

function init_lazy_load() {
    try {
        // Callback
        let callback = (entries, observer) => {
            // Loop
            entries.forEach((entry) => {
                // Check if
                if (entry.intersectionRatio >= 0.1 && entry.target.style.opacity != 1) {
                    // Opacity
                    entry.target.style.opacity = 1;
                }
            });
        };

        // Options
        let options = {
            root: null,
            threshold: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
        }

        // Observer
        let observer = new IntersectionObserver(callback, options);

        // Select .lazy-load
        for (const target of document.querySelectorAll(".lazy-load")) {
            // Observer
            observer.observe(target);
        }
    } catch (e) {
        // console.error(e);
    }
}

function throttle(callback, limit) {
    try {
        // Vars
        var wait = false;

        // Return
        return function (...args) {
            // Check if
            if (!wait) {
                // Callback
                callback(...args);

                // True
                wait = true;

                // Set timeout
                setTimeout(function () {
                    // False
                    wait = false;
                }, limit);
            }
        }
    } catch (e) {
        // console.error(e);
    }
}