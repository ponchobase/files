function read_token() {
    // Read token
    $.ajax({
        type: "GET",
        cache: false,
        url: "https://api.dexscreener.com/latest/dex/tokens/0xc2fe011c3885277c7f0e7ffd45ff90cadc8ecd12",
        success: function (response, status, xhr) {
            console.log(response);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            // console.error("error");
        }
    }).always(() => {
        // nprogress_end();
    });
}