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

function format_number_decimals(value) {
    try {
        // Check if
        if ($.isNumeric(value)) {
            // Check if
            if (value >= 1 || value <= -1) {
                // 2 decimals
                value = parseFloat(value).toFixed(2);
            } else {
                // Number zeros after decimal
                var number_zeros = -Math.floor(Math.log10(Math.abs(value)) + 1);

                // Number of decimals = number zeros + 4
                var number_decimals = number_zeros + 4;

                // Check if
                if (number_zeros > 10) {
                    // Vars
                    value = 0;
                } else {
                    // Check if
                    if (number_decimals >= 10) {
                        // Vars
                        number_decimals = 10;
                    }

                    // Format value to number of decimals and trim extra zeros
                    value = parseFloat(parseFloat(value).toFixed(number_decimals));
                }
            }
        } else {
            // Vars
            value = 0;
        }
    } catch (e) {
        // console.error(e);
    }

    // Return
    return value;
}

function format_value_percent(value, percent) {
    // Define vars
    var return_string = "";

    try {
        // Check if
        if (value == 0 && percent == -100) {
            // Vars
            return_string = "";
        } else {
            // Check if
            if ($.isNumeric(value)) {
                // Vars
                value = format_number_decimals(value);
                percent = parseFloat(percent).toFixed(2);

                // Vars
                var change_color = get_change_color(percent);
                var change_direction = get_change_direction(percent);

                // Vars
                return_string = `<span class="font--bold font--${change_color}">${change_direction} ${value} (${percent}%)</span>`;
            }
        }
    } catch (e) {
        // console.error(e);
    }

    // Return
    return return_string;
}

function get_change_color(value) {
    // Define vars
    var change_color = "";

    try {
        // Check if
        if (value > 0) {
            // Vars
            change_color = "green";
        } else if (value < 0) {
            // Vars
            change_color = "red";
        } else {
            // Vars
            change_color = "white";
        }
    } catch (e) {
        // console.error(e);
    }

    // Return
    return change_color;
}

function get_change_direction(value) {
    // Define vars
    var change_direction = "";

    try {
        // Check if
        if (value < 0) {
            // Vars
            change_direction = '<i class="fas fa-long-arrow-alt-down"></i>';
        } else if (value > 0) {
            // Vars
            change_direction = '<i class="fas fa-long-arrow-alt-up"></i>';
        } else {
            // Vars
            change_direction = '';
        }
    } catch (e) {
        // console.error(e);
    }

    // Return
    return change_direction;
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