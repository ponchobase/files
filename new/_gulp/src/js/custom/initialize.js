// On document ready
$(function () {
    try {
        // Initialize app
        initialize_app();
    } catch (e) {
        // console.log(e);
    }
});

function initialize_app() {
    try {
        // Init scroll
        init_scroll();
    } catch (e) {
        // console.error(e);
    }
}