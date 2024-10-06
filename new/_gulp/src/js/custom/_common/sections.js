function init_sections() {
    try {
        // Home
        // Copy home marquee content
        clone_home_marquee_content();
    } catch (e) {
        // console.error(e);
    }
}

function clone_home_marquee_content() {
    try {
        // Empty and append
        $(".home .home-marquee .content.clone").empty().append($(".home .home-marquee .content.original li").clone());
    } catch (e) {
        // console.error(e);
    }
}