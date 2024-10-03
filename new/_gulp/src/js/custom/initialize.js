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
        // Init accordions
        init_accordions();

        // Init anchor tags
        init_anchor_tags();

        // Init lazy load
        init_lazy_load();
        
        // Init scroll
        init_scroll();
    } catch (e) {
        // console.error(e);
    }
}