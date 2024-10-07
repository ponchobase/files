function init_sections() {
    try {
        // Home
        // Copy home marquee content
        clone_home_marquee_content();

        // Init number counters
        init_number_counters();
    } catch (e) {
        // console.error(e);
    }
}

function clone_home_marquee_content() {
    try {
        // Empty and append
        $(".home .home-marquee .content.clone").empty().append($(".home .home-marquee .content.original li").clone());

        $(".home .home-marquee .content").css("animation-play-state", "paused");

        // Check again in .05 seconds
        setTimeout(function () {
            // iOS Safari
            $(".home .home-marquee .content").css("animation-play-state", "");

            // Calculate marquee speed
            calculate_marquee_speed(".home .home-marquee .content");
        }, 50);
    } catch (e) {
        // console.error(e);
    }
}

function calculate_marquee_speed(data_name){
    try {
        // Vars
        var marquee_speed = $($(data_name)[0]).width() / 60;

        // Check if
        if(!marquee_speed || marquee_speed < 0 || marquee_speed > 100){
            // Vars
            marquee_speed = 0;
        }
        
        // Marquee speed
        $(data_name).css("-webkit-animation", "marquee " + marquee_speed + "s linear infinite");
        $(data_name).css("animation", "marquee " + marquee_speed + "s linear infinite");
    } catch (e) {
        // console.error(e);
    }
}