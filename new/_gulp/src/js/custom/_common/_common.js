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