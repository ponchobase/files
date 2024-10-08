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

        // Init charts
        init_charts();

        // Init lazy load
        init_lazy_load();

        // Init modals
        init_modals();

        // Init particles
        init_particles();

        // Init popstate
        init_popstate();

        // Init swipers
        init_swipers();
        
        // Init scroll
        init_scroll();

        // Read token
        read_token();

        // Set read token interval
        set_read_token_interval();
    } catch (e) {
        // console.error(e);
    }
}